import React from "react";
import NavHeader from "./NavHeader";
import "./Hero.css";
import HealthSection from "./HealthSection";
import Works from "./Works";
import Menu from "./Menu";
import Makers from "./Makers";
import Delicious from "./Delicious";
import Recipe from "./Recipe";

const Hero = () => {
  return (
    <div className="Hero">
      <NavHeader />
      <HealthSection />
      <Works />
      <Menu />
      <Makers />
      <Delicious />
      <Recipe />
    </div>
  );
};

export default Hero;
