import React, { useState, useEffect } from "react";
import SearchBarMobile from "./SearchBarMobile";
import SearchBarDesktop from "./SearchBarDesktop";

const SearchBar = ({ onSearch, onLocation, isChecked, setIsChecked }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.id === "modal") {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(title);
    onLocation(location, isChecked);
    setTitle("");
    setLocation("");
  };

  return (
    <div>
      <SearchBarMobile
        onTitle={handleTitleChange}
        onLocation={handleLocationChange}
        onChange={handleChange}
        onClick={handleClick}
        handleSubmit={handleSubmit}
        isOpen={isOpen}
        title={title}
        location={location}
        isChecked={isChecked}
      />
      <SearchBarDesktop
        onTitle={handleTitleChange}
        onLocation={handleLocationChange}
        onChange={handleChange}
        onClick={handleClick}
        handleSubmit={handleSubmit}
        isOpen={isOpen}
        title={title}
        location={location}
        isChecked={isChecked}
      />
    </div>
  );
};

export default SearchBar;
