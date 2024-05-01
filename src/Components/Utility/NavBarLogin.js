import React from "react";
import logo from "../Images/logo.png";
import cart from "../Images/cart.png";
import login from "../Images/login.png";
import { FaBars } from "react-icons/fa";

const NavBarLogin = () => {
  return (
    <div className="sticky top-0 z-10 bg-indigo-950 shadow-2xl ">
      <div className="container max-w-7xl m-auto px-6 py-2 ">
        <div className="sm:flex  sm:flex-row flex-col justify-between items-center min-h-10 gap-4">
          <div className="flex justify-between sm:w-fit sm:m-auto mb-8 items-center">
            <a href="/" >
              <img src={logo} alt="" width={80} height={80} />
            </a>
            <FaBars className="sm:hidden outline cursor-pointer  rounded-sm outline-blue-800 outline-offset-4 outline-4 text-white text-3xl" />
          </div>
          <div className="flex sm:w-full justify-center items-center">
            <input
              type="text"
              placeholder="ابحث...."
              className="text-center flex-1 outline-offset-4 rounded-md h-8 outline-none"
            />
          </div>
          <div className="flex text-white sm:flex-row flex-col sm:m-auto m-3 gap-8 justify-center items-center">
            <a
              className="flex cursor-pointer justify-center items-center gap-1 no-underline"
              href="/login"
            >
              <img src={login} width={25} height={25} alt="" />
              <p>دخول</p>
            </a>
            <a
              className="flex text-white cursor-pointer justify-center items-center gap-1"
              href="cart"
            >
              <img src={cart} width={25} height={25} alt="" />
              <p >العربة</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarLogin;
