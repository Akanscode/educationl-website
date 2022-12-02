import React from "react";
//import Back from "../CommonComponent/BackComponent/BackComponent";
import Heading from "../CommonComponent/HeadingComponent/Head";

import PriceCard from "./PriceCard";

import Faq from "./Faq";

const Pricing = () => {
  return (
    <>
      <Heading subtitle="OUR PRICING" title="Pricing & Packages" />
      <section className="price padding">
        <div className="container grid">
          <PriceCard />
        </div>
      </section>
      <Faq />
    </>
  );
};
export default Pricing;
