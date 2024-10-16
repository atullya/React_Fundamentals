import React from "react";
import Header from "../Common/Header";
import { blogs } from "../Data/blogs";
import { Link } from "react-router-dom";

export default function Blog() {
  let allblogs = blogs.map((d, i) => {
    return (
      <div className="blog-items" key={i}>
        <h3>{d.title}</h3>
        <p>{d.body}</p>
        <button>
          {" "}
          <Link to={`/blog/${d.id}`}>Read More </Link>
        </button>
      </div>
    );
  });
  return (
    <div>
      <Header />I am blog page
      <div className="container">{allblogs}</div>
    </div>
  );
}
