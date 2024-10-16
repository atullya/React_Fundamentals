import React from "react";
import { useLocation } from "react-router-dom";

export default function HospitalDetail() {
  // Retrieve the data passed in `Link`'s state attribute
  const location = useLocation();
  const { indvdata } = location.state || {}; // Use `location.state` and handle undefined

  return (
    <div>
      {/* Check if data exists before displaying */}
      {indvdata ? (
        <div>
          <h1>Hospital Name: {indvdata.name}</h1>
          {/* <p>Address: {indvdata.address}</p>
          <p>Phone: {indvdata.phone_number}</p> */}
          {/* Display other data as needed */}
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
