import React, { useEffect } from "react";
import { whoareweimg } from "../../import";

const Whoarewepage = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div className="bg-stone-200">
    <div className="lg:px-40 container mx-auto pb-7 px-7 ">
      <div className="text-center flex justify-center items-center py-7">
        <div className="h-1 w-1/2 bg-red-600"></div>
        <h2 className="text-2xl w-full">Who are we</h2>
        <div className="h-1 w-1/2 bg-red-600"></div>
      </div>

      <div className="lg:flex lg:gap-10">
        <img className="lg:h-90 pb-7" src={whoareweimg} alt="" />
        <p className="">
          Sherpaverse Ltd is a premier travel concierge startup specializing in
          creating personalized luxury travel experiences. We provide a diverse
          range of bespoke services, including: 

          <div className="flex flex-col gap-3">

          <li>
          <span className="font-bold">Luxury Travel Planning: </span>
           Tailored
          itineraries and exclusive experiences.
          </li>
          <li>
          <span className="font-bold">Visa Assistance: </span>
           Streamlined
          and hassle-free visa services.
          </li>
          <li>
          <span className="font-bold">Study Abroad Support: </span>
           Expert guidance
          for international education opportunities.
          </li>
          <li>
            <span className="font-bold">M.I.C.E. Tourism: </span>
          Professional services for Meetings, Incentives, Conferences, and
          Exhibitions.
          </li>
          <li>
          <span className="font-bold">Leisure Tourism: </span>
           Curating unforgettable vacations and
          getaways.
          </li>
          <li>
          <span className="font-bold">Professional Training: </span>
           Certified TEFL/TESOL programs for
          aspiring educators.
          </li>

          <p> At Sherpaverse, we redefine convenience and
          excellence in global travel, ensuring every journey is seamless,
          enriching, and unforgettable.</p>
          </div>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Whoarewepage;
