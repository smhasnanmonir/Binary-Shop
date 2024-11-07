"use client";

import Link from "next/link";
import { useState } from "react";

const NavbarComp = () => {
  const [isBurger, setIsBurger] = useState(false);

  return (
    <div className="border px-[20px] py-3 rounded-full">
      <div className="flex justify-between">
        <div>
          <h1 className="font-semibold">Binary Shop BD</h1>
        </div>
        <div className="md:flex space-x-3 hidden">
          <Link className="font-semibold inline-block" href="">
            <p className="group relative w-max">
              <span className="px-1 relative z-10 group-hover:text-white">
                Home
              </span>
              <span className="duration-300 absolute left-0 bottom-0 w-full h-0.5 transition-all bg-indigo-600 z-0 group-hover:h-full "></span>
            </p>
          </Link>
          <Link className="font-semibold inline-block" href="">
            <p className="group relative w-max">
              <span className="px-1 relative z-10 group-hover:text-white">
                Products
              </span>
              <span className="duration-300 absolute left-0 bottom-0 w-full h-0.5 transition-all bg-indigo-600 z-0 group-hover:h-full "></span>
            </p>
          </Link>
          <Link className="font-semibold inline-block" href="">
            <p className="group relative w-max">
              <span className="px-1 relative z-10 group-hover:text-white">
                Contact Us
              </span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 ease-in-out bg-indigo-600 z-0 group-hover:h-full duration-300"></span>
            </p>
          </Link>
        </div>

        {/* Burger Menu Start*/}

        <div
          onClick={() => setIsBurger(!isBurger)}
          className="cursor-pointer md:hidden block"
        >
          {!isBurger ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </>
          )}
        </div>

        {/* Burger Menu Ends*/}
      </div>
    </div>
  );
};

export default NavbarComp;
