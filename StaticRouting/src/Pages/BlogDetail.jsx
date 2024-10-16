// import React from "react";
// import { useLocation } from "react-router-dom";
// import Header from "../Common/Header";
// import Blog from "./Blog";
// import { blogs } from "../Data/blogs";

// export default function BlogDetail() {
//   let uselocation = useLocation();
//   let currentID = uselocation.pathname.split("/")[2];
//   let currentData = blogs.filter((v) => v.id == currentID)[0];
//   console.log(currentData);
//   return (
//     <div>
//       <Header />
//       {currentData.body}
//     </div>
//   );
// }
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Common/Header";
import { blogs } from "../Data/blogs";

export default function BlogDetail() {
  // Use useParams hook to get the 'id' from the URL parameters
  const { id } = useParams();

  // Find the current blog data using the 'id'
  const currentData = blogs.filter((blog) => blog.id === parseInt(id))[0];
  // Result: `currentData` is the first element of the filtered array.

  //   const currentData = blogs.filter((blog) => blog.id === parseInt(id)); // Convert id to number if necessary

  // If no blog is found, display a message
  if (!currentData) {
    return (
      <div>
        <Header />
        <h2>Blog not found</h2>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <h1>{currentData.title}</h1> {/* Render the blog title */}
      <p>{currentData.body}</p> {/* Render the blog content */}
    </div>
  );
}
