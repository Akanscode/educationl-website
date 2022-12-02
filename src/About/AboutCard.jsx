import React from "react";
import Heading from "../CommonComponent/HeadingComponent/Head";
import "./About.css";
import { homeAbout } from "../Data";
import AboutWrapper from "./AboutWrapper";

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img
              src="https://images.unsplash.com/photo-1666720196093-823ac4d705e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="right row">
            <Heading
              subtitle="LEARN ANYTHING"
              title="Browse our online Courses"
            />
            <div className="items">
              {homeAbout.map((val) => {
                return (
                  <div className="items flexSB">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <AboutWrapper />
    </>
  );
};

export default AboutCard;
