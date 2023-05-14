import { Link } from "react-router-dom";

const Jobs = ({ career }) => {
  return (
    <div
      className="bg-white shadow-lg shadow-gray-300 p-7     
      relative  w-96 z-0 dark:bg-black  dark:shadow-black shadow-sm "
    >
      <Link to={`/details/${career.id}`}>
        <div className="flex flex-col space-y-3 ">
          <div className="text-md flex   ">
            <div className=" bg-orange-500 p-3 rounded-xl absolute top-[-20px] ">
              <img src={career.logo} className="inline-block w-7   " />
            </div>
            <div className="mr-12 pt-4  flex space-x-2 text-gray-300">
              <span>{career.postedAt}</span>
              <span>{career.contract}</span>
            </div>
          </div>
          <h2 className="font-semibold text-black text-xl dark:text-white">
            {career.position}
          </h2>

          <p className="dark:text-gray-300">{career.company}</p>
          <p className="text-bold text-blue-600 text-lg">{career.location}</p>
        </div>
      </Link>
    </div>
  );
};

export default Jobs;
