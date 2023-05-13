import React from "react";
import data from "../data.json";
import Jobs from "./Jobs";

const JobList = ({ title, location, isChecked }) => {
  const result = data.filter(
    (job) =>
      job.position.toLowerCase().includes(title) &&
      job.location.toLowerCase().includes(location.toLowerCase()) &&
      (isChecked ? job.contract === "Full Time" : true)
  );

  const renderedJobs = result.map((career, index) => {
    return <Jobs career={career} key={index} />;
  });

  return (
    <div className="">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-8 md:gap-y-14 ">
        {renderedJobs}
      </div>
    </div>
  );
};

export default JobList;
