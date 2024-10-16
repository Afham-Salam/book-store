import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import Card from "../components/Cards"; 

export default function Products() {
  const [data, setData] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  // Extract the query params using URLSearchParams
  const searchParams = new URLSearchParams(location.search);
  const currentPage = parseInt(searchParams.get("page")) || 1; 
  const itemsPerPage = parseInt(searchParams.get("limit")) || 10; 

    console.log({currentPage,itemsPerPage,searchParams});
    
  // Fetch data based on current query parameters (page and limit)
  function fetchData(page, limit) {
    fetch(`http://localhost:3000/books?_page=${page}&_per_page=${limit}`)
      .then( (res) => {
        return res.json();
      })
      .then((data) =>
      {
        console.log({data});
        setTotalItems(data.items)

        setData(
          data.data.map((book) => ({
            ...book,
            isFavorite: false,
            isAddedToCart: false, 
          }))
        )
      }
      );
  }

  useEffect(() => {
    fetchData(currentPage, itemsPerPage);
  }, [currentPage, itemsPerPage]); 

  
  const handlePageChange = (page) => {
    navigate(`/products?page=${page}&limit=${itemsPerPage}`);
  };

  console.log({data});
  

  return (
    <div className="mt-10 ">
      {data.length}
      <section>
        <div className="flex flex-wrap h-full sm:gap-4  justify-center items-center lg:gap-3">
          {data.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </section>
      
      {/* Pagination Component */}
            <Pagination 
             defaultCurrent={currentPage} 
             defaultPageSize={10}
             total={totalItems} 
             showSizeChanger={false}
             className="mt-7" 
            onChange={handlePageChange}
            align="center" />;
    </div>
  );
}
