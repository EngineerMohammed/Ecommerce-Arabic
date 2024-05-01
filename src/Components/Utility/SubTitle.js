import React from "react";
import { Link } from "react-router-dom";

const SubTitle = ({ title, btntitle, pathText }) => {
  return (
    <div className="flex justify-between pt-4">
      <div className="font-bold text-xl  hover:bg-red-100 p-2 rounded-full">
        {title}
      </div>
      {btntitle ? (
        <Link to={`${pathText}`}>
          <div className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
            {btntitle}
          </div>
        </Link>
      ) : null}
    </div>
  );
};

export default SubTitle;
