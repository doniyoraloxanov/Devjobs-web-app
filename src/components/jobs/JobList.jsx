import React, { useState } from "react";
import data from "../../data.json";
import Jobs from "./Jobs";
const imagePerRow = 12;

const JobList = ({ title, location, isChecked }) => {
  const [next, setNext] = useState(imagePerRow);

  const handleMoreJob = () => {
    setNext(next + imagePerRow);
  };

  const result = data.filter(
    (job) =>
      job.position.toLowerCase().includes(title) &&
      job.location.toLowerCase().includes(location.toLowerCase()) &&
      (isChecked ? job.contract === "Full Time" : true)
  );

  const renderedJobs = result?.slice(0, next)?.map((career, index) => {
    return <Jobs career={career} key={index} />;
  });

  return (
    <div className="flex flex-col  items-center space-y-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-8 md:gap-y-14 justify-center ">
        {renderedJobs}
      </div>
      <div>
        {next < result?.length && (
          <button
            onClick={handleMoreJob}
            className="bg-blue-600 text-white p-3 w-40 font-semibold text-lg  block  "
          >
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default JobList;
