import { faHouse, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function TopHeading() {
  return (
    <div className="m-0 p-0 box-border">
      <div className=" w-[100%] flex  justify-between bg-[#EEF9F5] items-center py-[5px] px-[8px] ">
        <div className="">
          <ul className="flex text-[#12A1AC] font-semibold space-x-[25px] justify-between p-[5px] ml-[100px] font-sans ">
            <li>Terms</li>
            <li>Privacy Policy</li>
            <li>Legal Agreement</li>
          </ul>
        </div>
        <div className="">
          <ul className="flex text-[#12A1AC] font-semibold space-x-[25px] justify-between p-[5px] mr-[80px] font-sans">
            <li className="text-black flex gap-[10px] align-center justify-center">
         
            
                <FontAwesomeIcon className="mt-[4px]" icon={faPhone} />

              98133232323
            </li>

            <li>curefy@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
