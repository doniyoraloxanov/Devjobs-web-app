const SearchBarDesktop = ({
  onTitle,
  onLocation,
  onChange,
  handleSubmit,
  title,
  location,
  isChecked,
}) => {
  return (
    <div className="hidden md:block  ">
      <form onSubmit={handleSubmit} className="flex  ">
        {/* Search by title*/}
        <div className="relative">
          <input
            placeholder="Filter by title..."
            className="outline-none  py-6  px-6 pl-16  lg:w-[400px]  w-auto"
            type="text"
            id="title"
            value={title}
            onChange={onTitle}
          />
          <span className="absolute top-6 left-5">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
                fill="#5964E0"
                fill-rule="nonzero"
              />
            </svg>
          </span>
        </div>
        <div className=" border"></div>
        {/* Search by location */}
        <div className="relative">
          <input
            placeholder="Filter by location..."
            className="outline-none  py-6  px-6 pl-16   w-auto  lg:w-[400px]"
            type="text"
            value={location}
            id="location"
            onChange={onLocation}
          />
          <span className="absolute top-6 left-5">
            <svg width="17" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
                fill="#5964E0"
                fill-rule="nonzero"
              />
            </svg>
          </span>
        </div>
        <div className=" border"></div>
        {/* Checkbox */}
        <div className="flex items-center bg-white   w-auto  lg:w-[400px] px-6 space-x-10 lg:space-x-28 ">
          <div className="flex items-center lg:space-x-8">
            <input
              id="default-checkbox"
              type="checkbox"
              name="checkbox"
              value={isChecked}
              checked={isChecked}
              onChange={onChange}
              className="w-6 h-6  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
            />
            <label
              htmlFor="checkbox"
              className="ml-2 text-md font-bold text-gray-900  flex space-x-2"
            >
              <span>Full</span>
              <span>Time</span>
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold  px-3 py-2 lg:px-6  block "
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBarDesktop;
