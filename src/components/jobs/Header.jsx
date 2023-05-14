import React from "react";
import Switcher from "../DarkMode/Switcher";
const Header = () => {
  return (
    <div>
      <div className=" bg-hero-mobile md:bg-hero-tablet lg:bg-hero-desktop  bg-contain h-48  bg-no-repeat ">
        <div className="flex items-center  justify-between px-16 pt-12  md:px-24">
          <p className="text-white text-bold text-4xl  ">devjobs</p>
          <Switcher />
        </div>
      </div>
    </div>
  );
};

export default Header;
