import React from "react";
import logo from "../Images/logo.png";
import cart from "../Images/cart.png";
import login from "../Images/login.png";
import { FaBars } from "react-icons/fa";

const NavBarLogin = () => {
  return (
    <nav className=" bg-zinc-800">
      <div className="container max-w-7xl m-auto px-8 py-4">
        <div className="lg:flex lg:flex-row flex-col justify-between items-center gap-4">
          <div className="flex justify-between items-center w-full">
            <div>
              <img src={logo} alt="" width={60} height={60} />
            </div>
            <div>
              <FaBars className="lg:hidden text-white text-3xl" />
            </div>
          </div>

          <div className="flex lg:w-[80%]  justify-center items-center">
            <input
              type="text"
              placeholder="ابحث...."
              className="text-center flex-1 "
            />
          </div>
          <div className="flex md:flex-row flex-col lg:m-auto m-3 gap-4 justify-center items-center">
            <div className="flex gap-1 cursor-pointer justify-center items-center">
              <img src={login} width={25} height={25} alt="" />
              <p className=" text-white">دخول</p>
            </div>
            <div className="flex gap-1 cursor-pointer justify-center items-center">
              <img src={cart} width={25} height={25} alt="" />
              <p className=" text-white">العربة</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarLogin;
