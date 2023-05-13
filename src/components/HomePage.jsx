import React, { useState } from "react";
import Header from "./Header";
import JobList from "./JobList";
import SearchBar from "./SearchBar";

const HomePage = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const getTitle = (newTitle) => {
    setTitle(newTitle);
  };

  const getLocation = (newLocation) => {
    setLocation(newLocation);
  };

  const getFullTime = (newFullTime) => {
    setIsChecked(newFullTime);
  };

  return (
    <div className="">
      <Header />
      <div className="flex justify-center">
        <div className=" flex justify-center absolute top-36 ">
          <SearchBar
            onSearch={getTitle}
            onLocation={getLocation}
            onFullTime={getFullTime}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
          />
        </div>

        <div className="flex justify-center py-14 md:pt-28 ">
          <JobList title={title} location={location} isChecked={isChecked} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
