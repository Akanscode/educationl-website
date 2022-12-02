import React from "react";
//import AboutCard from "../About/AboutCard";
//import HomeBlog from "./HomeBlog";
//import HomeAbout from "./HomeAbout";
import Hero from "./Hero/Hero";
//  import Heading from "../CommonComponent/HeadComponent/Heading";
import About from "../About/About";
import CoureseHome from "../CoursesCard/CoursesHome";
import Pricing from "../Pricing/Price";
import Blog from "../Blog/Blog";
import Footer from "../CommonComponent/FooterComponent/Footer";
//import HomePrice from "./HomePrice";

const Home = () => {
  return (
    <>
      <Hero />

      <About />
      <CoureseHome />
      <Pricing />
      <Blog />
      <Footer />
    </>
  );
};
export default Home;
