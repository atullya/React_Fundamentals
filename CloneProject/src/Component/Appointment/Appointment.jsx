// import React, { useState } from "react";
// import { appdata } from "./appointdata"; // Assuming `appdata` is an array of data
// import "./Appointment.css";

// export default function Appointment() {
//   const [activeTab, setActiveTab] = useState(appdata[0].title); // Default to first tab's title

//   // Find the currently active tab data based on activeTab state
//   const activeTabContent = appdata.find((tab) => tab.title === activeTab);

//   return (
//     <div className="container m-auto w-[850px]">
//       {/* Tab Titles */}
//       <div className="tab-titles flex justify-between mb-4">
//         {appdata.map((v, i) => (
//           <button
//             key={i}
//             onClick={() => setActiveTab(v.title)} // Update active tab on click
//             className={`tab-button px-4 py-2 cursor-pointer ${
//               activeTab === v.title ? "bg-slate-700 text-white" : "bg-slate-300"
//             }`}
//           >
//             {v.title}
//           </button>
//         ))}
//       </div>

//       {/* Show content of active tab only */}
//       {activeTabContent && (
//         <div className="tab-content p-[20px] border bg-gray-100">
//           <h1 className="text-2xl font-bold">{activeTabContent.title}</h1>
//           <h2 className="description text-lg">{activeTabContent.des}</h2>
//         </div>
//       )}

//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import "./Appointment.css";
import HospitalDetail from "./HospitalDetail";
import { Link } from "react-router-dom";
export default function ToggleContent() {
  const [toggle, settoggle] = useState(1); // State to track active content
  const [hospitaldata, sethospitaldata] = useState([]);
  let getData = async () => {
    let response = await fetch("/Hospital.json");
    let data = await response.json();
    sethospitaldata(data);
  };
  useEffect(() => {
    getData();
    // Fetch the data and handle it properly
    // fetch("/Hospital.json")
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     return response.json(); // Parse the response as JSON
    //   })
    //   .then((finalData) => {
    //     sethospitaldata(finalData);
    //     console.log(finalData); // Log the parsed data
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching hospital data: ", error); // Handle errors
    //   });
  }, []);

  let showHospitalData = hospitaldata.map((v, index) => {
    return (
      <div key={index} className="p-3 bg-gray-100 rounded-lg shadow-md my-4 ">
        {/* Image Section */}
        <img
          src={v.photos}
          alt={v.name}
          className=" object-cover rounded-t-lg mb-4 m-[auto] w-[200px] h-[200px]"
        />

        {/* Hospital/Doctor Information Section */}
        <div className="mb-4">
          <h1 className="text-[20px] font-semibold text-gray-800 mb-2">
            {v.name}
          </h1>
          <p className="text-sm text-gray-600 mb-2">Type: {v.types}</p>
          <h1 className="font-medium text-gray-700 mb-1">
            Phone Number: {v.phone_number}
          </h1>
          <p className="text-sm text-gray-600 mb-4">City: {v.city}</p>
        </div>

        {/* Opening Time Section */}
        <h1 className="font-semibold text-xl text-gray-800 mb-2">
          Opening Time
        </h1>
        <table className=" border border-gray-300 bg-white shadow-md rounded-lg overflow-hidden text-[14px]">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-2 border-b border-gray-200">Sunday</th>
              <th className="py-3 px-2 border-b border-gray-200">Monday</th>
              <th className="py-3 px-2 border-b border-gray-200">Tuesday</th>
              <th className="py-3 px-2 border-b border-gray-200">Wednesday</th>
              <th className="py-3 px-2 border-b border-gray-200">Thursday</th>
              <th className="py-3 px-2 border-b border-gray-200">Friday</th>
              <th className="py-3 px-2 border-b border-gray-200">Saturday</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-700 text-center">
              <td className="py-3 px-2 border-b border-gray-200">{v.Sunday}</td>
              <td className="py-3 px-2 border-b border-gray-200">{v.Monday}</td>
              <td className="py-3 px-2 border-b border-gray-200">
                {v.Tuesday}
              </td>
              <td className="py-3 px-2 border-b border-gray-200">
                {v.Wednesday}
              </td>
              <td className="py-3 px-2 border-b border-gray-200">
                {v.Thursday}
              </td>
              <td className="py-3 px-2 border-b border-gray-200">{v.Friday}</td>
              <td className="py-3 px-2 border-b border-gray-200">
                {v.Saturday}
              </td>
            </tr>
          </tbody>
        </table>
        <Link
          to={{
            pathname: `/hospital/${v.business_id}`,
          }}
          state={{ indvdata: v }} // Pass `v` as state data
        >
          <button className="w-[200px] bg-stone-500 p-[15px] mx-[40px] mt-[20px] text-white font-sans text-[18px] rounded-[10px]">
            See Details
          </button>
        </Link>
      </div>
    );
  });

  return (
    <>
      <div className="container   mx-[55px]  p-[20px]">
        {/* Hospital Booking Section */}
        <div className="w-[100%] flex gap-[200px]  items-center">
          <button
            onClick={() => {
              settoggle(1);
            }}
            className={`w-[50%]  py-2 px-4 mb-4 ${
              toggle === 1 ? "bg-blue-600" : "bg-slate-700"
            } text-white rounded-lg`}
          >
            Book Hospital
          </button>

          {/* Doctor Appointment Section */}

          <button
            onClick={() => {
              settoggle(2);
            }}
            className={`w-[50%]  py-2 px-4 mb-4 ${
              toggle === 2 ? "bg-blue-600" : "bg-slate-700"
            } text-white rounded-lg`}
          >
            Doctor Appointment
          </button>
        </div>
        <p
          className={`transition-all   mx-2 p-1 border rounded-lg ${
            toggle === 1 ? "activecontent" : "content"
          }`} // Use 'activecontent' when toggle is 1, otherwise 'content'
        >
          <div>
            {" "}
            {hospitaldata.length > 0 ? (
              <div className="grid grid-flow-row grid-cols-2">
                {" "}
                {showHospitalData}{" "}
              </div>
            ) : (
              "No Data Available"
            )}
          </div>
        </p>
        <p
          className={`transition-all   mx-2 p-1 border rounded-lg${
            toggle === 2 ? "activecontent" : "content"
          }`} // Use 'activecontent' when toggle is 2, otherwise 'content'
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam odit
          delectus earum enim tenetur nisi quos, optio laudantium excepturi
          dolorem!
        </p>
      </div>
    </>
  );
}
