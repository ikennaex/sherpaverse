import React from "react";
import { whoareweimg } from "../import";
import { IoIosMore } from "react-icons/io";
import { Link } from "react-router";


const whoarewe = () => {
  return (
    <div className="bg-stone-200">
    <div className="lg:px-40 lg:py-20 container mx-auto pb-7 my-7 px-7">
      <div className="text-center flex justify-center items-center py-7">
        <div className="h-1 w-1/2 bg-red-600"></div>
        <h2 className="text-2xl w-full">Who are we</h2>
        <div className="h-1 w-1/2 bg-red-600"></div>
      </div>

      <div className="lg:flex-row flex flex-col items-center lg:gap-10">
        <img className="lg:h-100 h-90 pb-7" src={whoareweimg} alt="" />
        <p className="text-justify">
          Sherpaverse Ltd is a travel concierge startup specializing in luxury
          travel, visa assistance, study abroad, M.I.C.E. tourism, leisure
          tourism, and professional TEFL/TESOL training. We craft personalized
          experiences to make every journey seamless and unforgettable.
        </p>
      </div>

      <div className="pt-7 flex justify-center">
        <Link to = "/about-us" >
        <button className="lg:rounded-2xl lg:px-10 flex gap-2 items-center bg-red-600 p-4 rounded-3xl font-bold text-white">
        <IoIosMore size={27}/>
          Learn more
        </button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default whoarewe;
