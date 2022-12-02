import React from "react";
import Heading from "../CommonComponent/HeadingComponent/Head";
import PriceCard from "../Pricing/PriceCard";

const HomePrice = () => {
  return (
    <>
      <section className="hprice padding">
        <Heading subtitle="OUR PRICING" title="Pricing & Packages" />
        <div className="price container grid">
          <PriceCard />
        </div>
      </section>
    </>
  );
};

export default HomePrice;
