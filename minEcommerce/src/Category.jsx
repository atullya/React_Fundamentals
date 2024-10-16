import React from "react";

export default function Category({ finalCategory, setcatname }) {
  // Debug: Log the received categories to check their structure
  console.log("Category Component - Received Categories:", finalCategory);

  // Map over finalCategory and access the correct field to render
  let cat = finalCategory.map((category, index) => {
    // Make sure 'category' is an object and has the expected properties
    if (typeof category !== "object" || !category.name) {
      console.error("Invalid category object:", category);
      return null; // Skip rendering if the object is invalid
    }

    return (
      <li
        onClick={() => setcatname(category)}
        key={index} // Using index as key (replace if there's a unique ID)
        className="bg-[#ccc] font-serif font-semibold p-[7px] cursor-pointer text-[16px] mb-3"
      >
        {/* Render the category name or slug or any field you'd like */}
        {category.name}
      </li>
    );
  });

  return (
    <div>
      <h3 className="text-[25px] font-500 p-[10px]">Product Category</h3>
      <ul>{cat}</ul>
    </div>
  );
}
