"use client";

import React, { useState } from "react";
import Link from "next/link";
import Bars from "../Icons/Bars/Bars";
import { usePathname } from "next/navigation";

function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const pathname = usePathname(); // Get the current path

  const registerBtnHandler = () => {
    // dispatch(setOpenModal());
    // dispatch(setRegistrationState({ item: "Login" }));
  };

  return (
    <>
      <div className={`sticky w-full h-fit top-0 z-[9999] left-0 bg-white`}>
        <div className="mainHeader flex justify-between items-center px-5 lg:px-28 py-6 h-[112px] relative">
          <img src="./logo.png" className="w-[58px] h-[70px]" alt="" />
          <div className="hidden lg:!flex justify-center items-center gap-6">
            <Link
              href="/"
              className={`${
                pathname === "/"
                  ? "text-black font-bold"
                  : "text-gray-500"
              } text-2xl hover:text-black t05`}
            >
              Home
            </Link>
            <Link
              href="/About-us"
              className={`${
                pathname === "/About-us"
                  ? "text-black font-bold"
                  : "text-gray-500"
              } text-2xl hover:text-black t05`}
            >
              About
            </Link>
            <Link
              href="/Services"
              className={`${
                pathname === "/Services"
                  ? "text-black font-bold"
                  : "text-gray-500"
              } text-2xl hover:text-black t05`}
            >
              Services
            </Link>
            <Link
              href="/Contact-us"
              className={`${
                pathname === "/Contact-us"
                  ? "text-black font-bold"
                  : "text-gray-500"
              } text-2xl hover:text-black t05`}
            >
              Contact
            </Link>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="h-10 w-10 rounded-lg p-2 flex lg:!hidden justify-center items-center text-white">
              <div
                className="w-fit h-fit cursor-pointer"
                onClick={() => {
                  setShowMobileNav((prev) => !prev);
                }}
              >
                <Bars />
              </div>
            </div>

            <div
              className="py-2 px-5 rounded-2xl bg-black text-white cursor-pointer ms-6 text-nowrap hover:bg-blue-400 t05"
              onClick={registerBtnHandler}
            >
              Login / Sign Up
            </div>
          </div>

          <div
            className={`mobileNavbarItems absolute ${
              showMobileNav ? "left-0" : "left-[-100vw]"
            } flex flex-col bg-modalBg t07 top-[12vh] bg-slate-300 w-full`}
          >
            <Link
              href="/"
              className={`${
                pathname === "/"
                  ? "text-black"
                  : "text-gray-500"
              } text-2xl hover:text-black t05 flex justify-center items-center`}
            >
              Home
            </Link>
            <Link
              href="/About-us"
              className={`${
                pathname === "/About-us"
                  ? "text-black"
                  : "text-gray-500"
              } text-2xl hover:text-black t05 flex justify-center items-center`}
            >
              About
            </Link>
            <Link
              href="/Services"
              className={`${
                pathname === "/Services"
                  ? "text-black"
                  : "text-gray-500"
              } text-2xl hover:text-black t05 flex justify-center items-center`}
            >
              Services
            </Link>
            <Link
              href="/Contact-us"
              className={`${
                pathname === "/Contact-us"
                  ? "text-black"
                  : "text-gray-500"
              } text-2xl hover:text-black t05 flex justify-center items-center`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
