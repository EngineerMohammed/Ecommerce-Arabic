import React from "react";
// import phone from "../Images/phone.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="sticky bottom-0 bg-indigo-200 z-10">
      <div className="container font-thin ">
        <div className="sm:flex  sm:flex-row flex-col justify-between items-center bg-blue-200 min-h-12 mt-5">
          <div className="flex justify-center items-center gap-2 font-mono">
            <p>الشروط والاحكام</p>
            <p>سياسةالخصوصية</p>
            <p>إتصل بنا</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <FaPhoneAlt className="text-green-600 cursor-pointer z-10 shadow-xl"/>
              <p className="text-md font-semibold">01002725414</p>
            </div>
            <FaFacebookF className="text-blue-600 cursor-pointer z-10 shadow-xl" />
            <FaInstagramSquare className="cursor-pointer text-red-600 z-10 shadow-xl" />
            <FaTwitter className="text-blue-600 cursor-pointer z-10 shadow-xl" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
