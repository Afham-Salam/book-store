import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-24">
          <div className="bg-[#e29c6f] lg:w-[350px] lg:h-[350px] w-[300px] h-[300px] rounded-full overflow-hidden">
            <img
              src="src/assets/indexImg2.jpg"
              className="w-full h-full object-cover scale-x-[-1]"
            />
          </div>

          <div className=" flex flex-col lg:gap-10 gap-5">
            <p className="md:text-5xl text-4xl text-black font-bold">
              Find the book you're<br></br>
              looking for easier to<br></br>
              read right away
            </p>
            <p className="">
              The most appropriate book site to search for books.
            </p>
            <Link
              to="/home"
              className="text-white contentfont font-semibold text-[14px] w-32 contentfont bg-[#d98856] rounded-full px-6 py-4 hover:bg-[#cb7a47]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
