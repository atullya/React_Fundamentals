import React, { useState, useEffect } from "react";

export default function Showtest() {
  const [data, setData] = useState([]); // State to store the JSON data

  // Use useEffect to fetch data on component mount
  useEffect(() => {
    // Fetching the JSON data
    fetch("/testData.json") // Correctly referencing the JSON file in the public folder
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the JSON response
      })
      .then((jsonData) => setData(jsonData)) // Set the data to state
      .catch((error) => console.error("Error loading data:", error)); // Handle errors
  }, []);

  // Render the data if it exists
  return (
    <div className=" grid grid-cols-3 gap-[20px]  ">
      {data.length === 0 ? (
        <p>Loading data...</p>
      ) : (
        data.map((item, index) => (
          <div
            key={index}
            className="border  border-black place-self-center p-[25px]"
          >
            {/* Displaying image if it exists */}
            {item.image && (
              <img
                src={`/${item.image}`} // Should correctly reference the image path
                alt={item.title}
                style={{ width: "300px", height: "300px" }}
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop
                  e.target.src = "/path/to/fallback-image.jpg"; // Optional: Fallback image
                }}
              />
            )}
            {/* Displaying ID, title, and prices */}

            <h1 className="text-[20px] font-bold"> {item.title}</h1>
            <h3>{item.ntest}</h3>
            <div>
              <p className="text-[#F73C64] text-[18px] font-semibold"> ${item.originalPrice}</p>
              <p> ${item.oldPrice}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
