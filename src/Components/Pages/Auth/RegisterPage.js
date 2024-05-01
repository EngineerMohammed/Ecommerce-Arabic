import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className=" min-h-[670px] pt-10">
      <div className="container ">
        <div className="grid grid-rows-5 gap-2 border rounded-lg justify-center items-center text-center ">
          <label className="font-bold text-xl">تسجيل حساب جديد</label>
          <input
            type="password"
            placeholder=" اسم المستخدم"
            className="rounded-lg w-80 h-9 text-center border-2 border-black"
          />
          <input
            type="text"
            placeholder="الايميل"
            className="rounded-lg w-80 h-9 text-center border-2 border-black"
          />

          <input
            type="password"
            placeholder="كلمة السر"
            className="rounded-lg w-80 h-9 text-center border-2 border-black"
          />
          <button
            type="button"
            className="bg-gray-900 p-2 rounded-xl text-white border-2 border-black"
          >
            تسجيل حساب
          </button>
          <div>
            <label>
              لديك حساب بالفعل؟
              <Link to="/login">
                <span className="text-red-500 cursor-pointer">أضغط هنا</span>
              </Link>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
