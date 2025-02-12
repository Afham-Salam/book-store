import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import video from "../assets/homevideo.mp4"
import homeImg from "../assets/indexImg.webp"

import logo1 from "../assets/logo1.png"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/log3.png"
import logo4 from "../assets/logo4.jpg"
import logo5 from "../assets/logo5.png"

import banner from "../assets/ads 1.jpg"
import ad1 from "../assets/ad 2.jpg"
import ad2 from "../assets/ad 3.jpg"
import Card from "../components/Card";




export default function Home() {
  const [data, setData] = useState([]);
  function fetchData(page, limit) {
    fetch(`http://localhost:3000/books?_limit=10`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(
          data.map((book) => ({
            ...book,
            isFavorite: false,
            isAddedToCart: false, // Flag to track if the item is added to cart
          }))
        );
      });
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <section class="relative">
        <div className="absolute inset-0">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div class="relative z-10 bg-black bg-opacity-50 min-h-screen flex justify-center items-center">
          <div class="hero-content flex-col lg:flex-row-reverse lg:gap-24 text-white">
            <div class="bg-[#e29c6f] lg:w-[350px] lg:h-[350px] w-[300px] h-[300px] rounded-full overflow-hidden">
              <img
                src={homeImg}
                class="w-full h-full object-cover scale-x-[-1]"
              />
            </div>

            <div class="flex flex-col lg:gap-10 gap-5">
              <p class="md:text-5xl text-4xl font-bold">
                UPTO <span class="text-[#e56512]">45% OFF</span> on all
                <br />
                Self Help Books
              </p>
              <p class="">
                The most appropriate book site to search for books.
              </p>
              <a
                href="/products"
                class="text-white font-semibold text-[14px] w-32 bg-[#e56512] rounded-full px-6 py-4 hover:bg-[#d35400]"
              >
                SHOP NOW
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <p className="text-[25px] text-center contentfont  text-black mt-6">
          New Arrival
        </p>
        <section className="flex flex-wrap justify-center gap-8">
          {data?.map((it) => (
            <Card
              key={it.id}
              bookName={it.bookName}
              authorName={it.authorName}
              bookRate={it.bookRate}
              image={it.image}
              price={it.price}
            />
          ))}
        </section>
        <div className="w-full flex items-center justify-center">
          <Link
            to="/products"
            className="text-white text-[14px] contentfont bg-[#e56512] rounded-full px-6 py-3 hover:bg-[#d35400] mt-5"
          >
            SHOW MORE
          </Link>
        </div>
      </section>

      <section>
        <div className="flex justify-center items-center my-20">
          <div className=" flex flex-col gap-6 justify-center items-center   ">
            <p className="text-black self-center text-[22px] font-bold  mt-3">
              Shop By Publishers
            </p>
            <marquee scrollamount="10">
              <div className="flex gap-20  pb-10">
                <img src={logo1} className=" w-32"></img>
                <img src={logo2} className=" w-32"></img>
                <img src={logo3}className=" w-32"></img>
                <img src={logo4} className=" w-32"></img>
                <img src={logo5} className=" w-32"></img>
              </div>
            </marquee>
          </div>
        </div>
      </section>

      <section className=" lg:mt-10">
        <div className="flex flex-col gap-3">
          <div>
            <img
              src={banner}
              className="w-full hidden md:block"
            />
          </div>

          <div className="flex justify-center gap-7 flex-col md:flex-row sm:align-middle ">
            <div className="w-auto lg:h-[168px] sm:h-[160px]">
              <img src={ad1}></img>
            </div>
            <div className="w-auto lg:h-[168px] sm:h-[160px]">
              <img src={ad2}></img>
            </div>
            <div className="w-auto lg:h-[168px] sm:h-[160px]">
              <img src={ad1}></img>
            </div>
            <div className="w-auto lg:h-[300px] sm:h-[160px]">
              <img src={ad2}></img>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div class="flex items-center justify-center flex-col lg:flex-row border-t border-b w-full border-[#ad5051] gap-4 py-10">
          <div class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 14 14"
            >
              <path
                fill="#e56512"
                fill-rule="evenodd"
                d="m13.691 7.212l-1.338-2.74a1.5 1.5 0 0 0-1.348-.842h-.438v3.582zm-4.374-4.06a1.5 1.5 0 0 0-1.158-.548H1.702a1.5 1.5 0 0 0-1.5 1.5v6.626a1.5 1.5 0 0 0 1.5 1.5h.304a1.896 1.896 0 0 0 3.784 0h2.553a1.896 1.896 0 0 0 3.787-.187h.166a1.5 1.5 0 0 0 1.5-1.5V8.462H9.942a.625.625 0 0 1-.625-.625z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Free Delivery</span>
          </div>
          <div class="h-6 w-px bg-gray-300 mx-4 "></div>
          <div class="flex items-center space-x-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 512 512"
            >
              <path
                fill="#e56512"
                d="m210.6 44.39l-7-4.39c-13.7-8.4-30.8-13.28-45.5-8.7c-15.8 4.92-28.4 17.09-35 35.37l-9.4-4.84c-16.2-8.34-24.68-8.47-31.71-5.31c-5.61 2.51-11.46 8.55-18.09 17.37l82.4 63.71c12.9 4.2 31.8 4.1 50.7-.8c19-4.9 37.9-14.5 51.7-27.4l31.1-76.9c-27.4-21.65-52.4-9.11-69.2 11.89m53.1 76.51c-17 17.2-42.3 28.8-62 34c-6.9 1.8-13.8 3.1-20.5 3.8c-3.7 6.1-6.8 12.3-9.2 18.5c4.8 24.4 13.8 44.4 27.3 60.8l-14.4 12c-8.3-10-15.7-20.8-21.3-32.8c-.9 23.2 4.3 47.2 12.8 72.2l-17.7 6c-15.6-45.6-20.9-92.3 1-136.3c-7.4-.6-14.4-2-20.9-4.3l-.3-.1q-6.45 6.15-12.3 12.9c-31.57 36.6-48.96 85.3-39.86 123.2c4.87 20.3 13.6 39.5 26.16 55.9c18.4-.4 35.8 0 51.6 6c7.5-.8 15.2-1.3 23.2-1.3c28.5 0 54.3 5.3 73.8 14.5c7.6 3.6 14.5 7.9 20 12.8c0-5.3.8-11 2.4-15.2c-8.9-8.4-14.5-18.6-14.5-30.2c0-16.1 10.7-29.4 26.2-39c0-4.6.9-9 2.5-13.2c-10.1-8.7-16.6-19.5-16.6-32.1c0-7.9 2.6-15.1 7-21.6c-4.4-6.4-7-13.6-7-21.5c0-3.9.6-7.5 1.7-11c-9.7-8.6-15.8-19.2-15.8-31.4c0-12.1 6-22.6 15.6-31.1c-5.9-4.6-12.2-8.5-18.9-11.5m111.4 2.3c-26 0-49.5 5.5-65.6 13.6c-16.2 8.1-23.8 18.1-23.8 26.7c0 8.7 7.6 18.7 23.8 26.8c16.1 8.1 39.6 13.6 65.6 13.6c11.3 0 22-1.1 31.9-2.9v-17c13.9-2.1 25.4-5.9 32.8-10.8v17.6c12.5-3.6 24.5-16.9 24.8-27.3c0-8.6-7.6-18.6-23.8-26.7s-39.6-13.6-65.7-13.6m96.5 67.7c-3.3 3.5-7.2 6.8-11.6 9.8l.2 29c12.6-7.5 18.5-16.2 18.5-23.8c0-4.8-2.3-10-7.1-15m-171.8 15.4c.3 8.6 7.9 18.3 23.8 26.3c16.2 8.2 39.6 13.6 65.7 13.6c16.3 0 31.6-2.2 44.7-5.8l.7-27.2c-17.2 6-37.6 9.3-59.6 9.3c-28.5 0-54.4-5.7-74-15.5c-.5-.2-.9-.5-1.3-.7m2 34.8c-1.4 2.7-2 5.4-2 7.9c0 8.7 7.6 18.7 23.8 26.8s39.6 13.5 65.7 13.5c13.2 0 25.7-1.3 37-3.8v-24c-11.6 2.2-24 3.3-37 3.3c-28.6 0-54.5-5.6-74.1-15.5c-4.9-2.4-9.4-5.2-13.4-8.2m174.9 0c-6.1 4.3-11.4 7.5-17.6 10.2v22.3c13.3-7.7 19.6-16.7 19.6-24.6c0-2.5-.6-5.2-2-7.9m7.5 36.8c-2 2-4.2 3.9-6.6 5.8v32.4c10.3-7 15.3-14.7 15.3-21.7c0-5.3-2.9-11-8.7-16.5m-170.1 14c-.1.9-.2 1.7-.2 2.5c0 8.7 7.6 18.6 23.8 26.7c16.2 8.2 39.7 13.6 65.7 13.6c14.9 0 29.1-1.8 41.4-4.8V300c-16.3 5.2-35.2 8-55.5 8c-28.6 0-54.5-5.7-74.1-15.5c-.4-.2-.7-.4-1.1-.6m-13.6 21.4c-8.7 6.5-12.8 13.6-12.8 20c0 8.7 7.6 18.6 23.8 26.8c16.2 8.1 39.6 13.5 65.7 13.5c9.5 0 18.7-.7 27.3-2v-18.2h-1.1c-28.6 0-54.5-5.7-74.1-15.6c-12.5-6.2-22.9-14.5-28.8-24.5M463 343.9c-7.9 2.8-16.5 5.1-25.7 6.6v12.1c1.9-.8 3.8-1.6 5.6-2.5c9.8-5 16.4-10.6 20.1-16.2m9.2 18.2c-3.8 3.8-8.2 7.2-13.1 10.3V401c13.3-7.6 19.6-16.6 19.6-24.5c0-4.6-2.1-9.6-6.5-14.4m-348.7 2.8c-10.2.1-21.2 1.4-32.6 4.1c-22.81 5.3-42.42 15-55.22 25.7c-12.8 10.6-17.8 21.4-16.3 29.1s9.4 14.8 24.8 18.9c15.35 4 36.82 4.2 59.62-1.1c9.2-2.2 17.8-5 25.7-8.3v-20.7c14.6-6.5 25.5-14.3 30.4-21.9v24.4c12.1-10.4 16.8-20.8 15.4-28.4c-1.4-7.7-9.4-14.8-24.8-18.8c-7.7-2-16.9-3.1-27-3m64.6 5.2c2.7 3.9 4.6 8.3 5.6 13.2c1.1 6 .6 11.8-1.2 17.5c9.9 2.6 18.9 6.1 26.7 10.5c4.4 2.4 8.5 5.3 12.1 8.3c9-2.1 16.6-5.1 22-8.7v20.6c16.1-7.6 23.5-16.9 23.5-24.3c0-7.5-7.4-16.8-23.6-24.4c-16.1-7.5-39.3-12.6-65.1-12.7m111.8 5c-.1.4-.1.9-.1 1.4c0 8.7 7.6 18.6 23.8 26.8c16.2 8.1 39.6 13.5 65.7 13.5c13.2 0 25.7-1.4 37-3.8v-26.9c-14.8 4-31.5 6.2-49.1 6.2c-28.6 0-54.5-5.7-74.1-15.5c-1.1-.6-2.2-1.2-3.2-1.7m2.8 37.3c-2 3.3-2.9 6.5-2.9 9.6c0 8.7 7.6 18.6 23.8 26.8c16.2 8.1 39.6 13.5 65.7 13.5c13.2 0 25.7-1.4 37-3.8v-26.4c-11.6 2.2-24 3.4-37 3.4c-28.6 0-54.5-5.7-74.1-15.6c-4.5-2.2-8.7-4.7-12.5-7.5m173.1 0c-5.8 3.9-10.9 7-16.7 9.5v24.6c13.3-7.6 19.6-16.6 19.6-24.5c0-3.1-.9-6.3-2.9-9.6m-292.6 5.4c-3.5 4.4-7.6 8.6-12.2 12.4c-15.6 13.1-37.6 23.7-63 29.6c-9.06 2.1-18.06 3.4-26.7
 4.1c3.2 5.3 8.83 10.5 17.07 15.1c13.63 7.7 33.63 12.9 55.83 12.9c10.1 0 19.7-1.1 28.5-3v-20.8c13.8-2.1 25.4-5.9 32.8-10.8v18.4c10-7 14.8-14.9 14.8-22.4c0-8.7-6.5-18-20.2-25.7c-7.4-4.1-16.6-7.5-26.9-9.8"
              />
            </svg>
            <span>Cash on Delivery</span>
          </div>
          <div class="h-6 w-px bg-gray-300 mx-4"></div>
          <div class="flex items-center space-x-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#e56512"
                fill-rule="evenodd"
                d="M15.418 5.643a1.25 1.25 0 0 0-1.34-.555l-1.798.413a1.25 1.25 0 0 1-.56 0l-1.798-.413a1.25 1.25 0 0 0-1.34.555l-.98 1.564c-.1.16-.235.295-.395.396l-1.564.98a1.25 1.25 0 0 0-.555 1.338l.413 1.8a1.25 1.25 0 0 1 0 .559l-.413 1.799a1.25 1.25 0 0 0 .555 1.339l1.564.98c.16.1.295.235.396.395l.98 1.564c.282.451.82.674 1.339.555l1.798-.413a1.25 1.25 0 0 1 .56 0l1.799.413a1.25 1.25 0 0 0 1.339-.555l.98-1.564c.1-.16.235-.295.395-.395l1.565-.98a1.25 1.25 0 0 0 .554-1.34L18.5 12.28a1.25 1.25 0 0 1 0-.56l.413-1.799a1.25 1.25 0 0 0-.554-1.339l-1.565-.98a1.25 1.25 0 0 1-.395-.395zm-.503 4.127a.5.5 0 0 0-.86-.509l-2.615 4.426l-1.579-1.512a.5.5 0 1 0-.691.722l2.034 1.949a.5.5 0 0 0 .776-.107z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Verified Products</span>
          </div>
          <div class="h-6 w-px bg-gray-300 mx-4 "></div>
          <div class="flex items-center space-x-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#e56512"
                d="M8 2H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m12 12h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2M16.707 2.293a1 1 0 0 1 .083 1.32l-.083.094L15.414 5H19a3 3 0 0 1 2.995 2.824L22 8v3a1 1 0 0 1-1.993.117L20 11V8a1 1 0 0 0-.883-.993L19 7h-3.585l1.292 1.293a1 1 0 0 1-1.32 1.497l-.094-.083l-3-3a.98.98 0 0 1-.28-.872l.036-.146l.04-.104q.087-.191.245-.334l2.959-2.958a1 1 0 0 1 1.414 0M3 12a1 1 0 0 1 .993.883L4 13v3a1 1 0 0 0 .883.993L5 17h3.585l-1.292-1.293a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.32-.083l.094.083l3 3a.98.98 0 0 1 .28.872l-.036.146l-.04.104a1 1 0 0 1-.245.334l-2.959 2.958a1 
  1 0 0 1-1.497-1.32l.083-.094L8.584 19H5a3 3 0 0 1-2.995-2.824L2 16v-3a1 1 0 0 1 1-1"
              />
            </svg>
            <span>Easy Replacement</span>
          </div>
        </div>
      </section>
    </>
  );
}
