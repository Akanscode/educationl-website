import React from "react";

import Heading from "../../CommonComponent/HeadingComponent/Head";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO ACADEMIA"
              title=" Best online Eduction Expertise"
            />
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </button>
              <button>
                VIEW COURSE <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};
export default Hero;
