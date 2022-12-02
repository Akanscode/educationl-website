import React from "react";
//import Back from "../CommonComponent/BackComponent/BackComponent";
import Heading from "../CommonComponent/HeadingComponent/Head";

import BlogCard from "./BlogCard";
import "./Blog.css";

const Blog = () => {
  return (
    <>
      {/*<Back title="Blog Post" />*/}
      <Heading subtitle="OUR BLOG" title="Recent From Blog" />
      <section className="blog padding">
        <div className="container grid2">
          <BlogCard />
        </div>
      </section>
    </>
  );
};

export default Blog;
