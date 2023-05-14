import React from "react";

const SearchBarMobile = ({
  onTitle,
  onLocation,
  onChange,
  onClick,
  handleSubmit,
  isOpen,
  title,
  location,
  isChecked,
}) => {
  return (
    <div className="md:hidden">
      <form onSubmit={handleSubmit}>
        <div className="md:flex md:space-x-2  ">
          <div className="flex justify-center    ">
            <input
              placeholder="Filter by title..."
              className="outline-none  py-6  px-6 pl-8  w-96 "
              type="text"
              id="title"
              value={title}
              onChange={onTitle}
            />

            <div className="absolute flex items-center top-2 right-8 space-x-6 md:hidden ">
              <span className="">
                <svg
                  width="24"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={onClick}
                >
                  <path
                    d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
                    fill="#6E8098"
                    fillRule="nonzero"
                  />
                </svg>
              </span>
              {/* Search icon */}
              <span className="bg-blue-500 p-3 rounded-md">
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
                    fill="#fff"
                    fillRule="nonzero"
                  />
                </svg>
              </span>
            </div>
          </div>

          {isOpen && (
            <section
              id="modal"
              className={`flex flex-col   space-y-4 z-10  shadow-lg  
            bg-black fixed  inset-0 bg-opacity-30 backdrop-blur-sm items-center justify-center rounded-md   `}
            >
              <div className="bg-white px-7  space-y-4 py-4   ">
                <div>
                  <input
                    placeholder="Filter by location..."
                    className="outline-none  py-4 pr-32 pl-4 "
                    type="text"
                    value={location}
                    id="location"
                    onChange={onLocation}
                  />
                </div>
                <div className="flex items-center ">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="checkbox"
                    value={isChecked}
                    checked={isChecked}
                    onChange={onChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                  />
                  <label
                    htmlFor="checkbox"
                    className="ml-2 text-md font-bold text-gray-900 "
                  >
                    Full time
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-bold px-6 py-2  block w-96"
                >
                  Search
                </button>
              </div>
            </section>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchBarMobile;
