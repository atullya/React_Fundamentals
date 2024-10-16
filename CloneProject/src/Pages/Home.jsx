import React from "react";
import Header from "../Component/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import svgback from "../assets/Images/back.png"; // Correct import
import { daa } from "./Data/data1";
import Showtest from "../Component/ShowTests/Showtest";

export default function Home() {
  return (
    <div>
      <Header />
     
      <div className="p-[40px] mx-[60px] flex justify-between items-center">
        <div className=" flex flex-col  p-10 ">
          <h2 className="w-[390px]  text-[37px]">
            All Your Health Questions Answer Here
          </h2>
          <h1 className="font-bold text-[37px] text-[#049BA7]">Cufefy!!</h1>
          <div className="flex items-baseline gap-[0px] justify-center">
            <input
              className="border border-[#8d7f7f] w-[330px] p-[12px] mt-[30px] rounded-[10px] rounded-r-none placeholder-black shadow-lg shadow-gray opacity-1"
              type="text "
              placeholder="Search Doctor,Hospital, Medicine Labs"
            />
            <div className="bg-[#049BA7] text-[#fff] text-[16px] rounded-l-none rounded-r-[10px] p-[13px]">
              <FontAwesomeIcon icon={faSearch} /> <button>Search</button>
            </div>
          </div>
        </div>
        <div className="svg">
          <img width={570} height={300} src={svgback} alt="" />
        </div>
      </div>
      <div className="flex p-[19px] mx-[80px]">
        {daa.map((v, i) => {
          return <Items key={i} item={v} />;
        })}
      </div>
      <div className="p-[30px]">

      <Showtest />
      </div>
    </div>
  );
}
function Items({ item }) {
  return (
    <div className="flex flex-col gap-2 p-4  mx-[20px] rounded   shadow-lg shadow-blue-500/50  hover:shadow-indigo-500/40">
      {/* Individual item layout with proper spacing and flex direction */}
      <h2 className="text-xl font-semibold">{item.title}</h2>
      <p className="text-gray-600">{item.des}</p>
    </div>
  );
}
