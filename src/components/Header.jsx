import React from "react";

const Header = () => {
  return (
    <div>
      <div className=" bg-hero-mobile md:bg-hero-tablet lg:bg-hero-desktop  bg-contain h-48  bg-no-repeat ">
        <div className="flex items-center  justify-between px-8 pt-12  md:px-24">
          <p className="text-white text-bold text-4xl  ">devjobs</p>
          <p className="text-white">Dark mode</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
