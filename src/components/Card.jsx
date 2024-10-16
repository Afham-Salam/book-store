import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { notification } from "antd";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

export default function Card({ id, image, bookName, isFavourite, authorName, bookRate, isAddedToCart, price }) {
  console.log({ id, image, bookName, isFavourite, authorName, bookRate, isAddedToCart, price });
  
  const [discountedPrice, setDiscountedPrice] = useState(price);
  const [favorite, setFavorite] = useState(isFavourite);
  const [inCart, setInCart] = useState(isAddedToCart);
  const dispatch = useDispatch();
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const openNotification = (bookName) => {
    api.open({
      message: "Item Added to Cart",
      description: `${bookName} has been added to your cart.`,
      type: "success",
      duration: 2,
    });
  };

  const handleAddItem = () => {
    if (inCart) {
    
      navigate("/cart"); // Navigate to the cart page
    } else {
      // Add item to the cart
      dispatch(
        addItem({
          id: id,
          name: bookName,
          price: price,
          quantity: 1,
          image: image,
        })
      );

      openNotification(bookName);
      setInCart(true); // Update the state to mark the item as added to cart
    }
  };

  // Function to toggle the favorite status
  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  // Function to calculate the discounted price
  const calculateDiscountedPrice = (originalPrice, discountPercent) => {
    console.log({originalPrice, discountPercent});
    

    let discountAmount = (+originalPrice * +discountPercent) / 100;
    console.log({discountAmount})
    return originalPrice - discountAmount; // Return final price after discount
  };

  useEffect(() => {

    setDiscountedPrice(calculateDiscountedPrice(price, 45));
  }, [price]);

  return (
    <div className="lg:pl-7">
      {contextHolder}

      <section>
        <div className="flex mt-10 gap-10 justify-center items-center flex-wrap">
          <div
            key={id}
            className="border-2 flex flex-col pt-2 h-full w-64 rounded-lg shadow-md p-4 gap-3"
          >
            <div className="relative flex justify-center">
              <img
                src={image}
                className="h-56 object-cover self-center shadow-2xl"
                alt={bookName}
              />

              {/* Favorite Button */}
              <button
                className={`absolute top-0 right-0 text-4xl rounded-full ${
                  favorite ? "text-red-600" : "text-gray-400"
                }`}
                onClick={toggleFavorite}
              >
                ♥
              </button>
            </div>

            <div className="flex flex-col items-start px-3 space-y-2">
              <p className="font-bold text-md text-black">{bookName}</p>
              <p className="text-sm text-gray-600">by {authorName}</p>

              <div className="flex items-center">
                <p className="text-md font-bold text-[#41a700]">{bookRate}/5</p>
                <span className="ml-2 text-yellow-500">★★★★☆</span>
              </div>

              <div className="flex flex-col">
                <p className="text-lg font-bold text-[#E91E63]">
                ₹{Math.floor(discountedPrice)}/-
                  <span className="text-gray-500 ml-2 line-through">₹{price}/-</span>
                 
                </p>
                <p className="text-green-600 text-sm">45% off</p>
              </div>

              <div>
                <p className="text-green-500 text-sm">Free delivery</p>
                <p className="text-sm text-gray-700">Save extra with combo offers</p>
                <p className="text-red-600 text-sm">Only 15 left</p>
              </div>
            </div>

            <button
              className="bg-[#e56512] text-white font-bold py-2 rounded hover:bg-[#d35400] transition duration-300"
              onClick={handleAddItem}
            >
              {inCart ? "Go to Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
