import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/jobs/Header";
import data from "../data.json";

const CareerDetails = () => {
  const params = useParams();
  const [job, setJob] = useState([]);

  useEffect(() => {
    const jobData = data.find((job) => job.id == params.id);
    setJob(jobData);
  });

  return (
    <div className="bg-gray-200 relative dark:bg-gray-900">
      <Header />

      {/* Job  Header */}
      <div className="max-w-sm mx-auto md:max-w-2xl  ">
        <div className=" relative  top-[-40px]  ">
          <div className=" bg-white dark:bg-black px-20 py-8 flex flex-col space-y-2 md:flex md:flex-row md:space-y-0  md:space-x-32  ">
            <img
              src={job.logo}
              className={`bg-orange-800 md:w-36 inline-block  p-6 md:p-10  absolute top-[-25px]  self-center  md:top-0 md:left-0 
      md:h-full 

      `}
            />

            <div className="mx-auto pb-6 flex flex-col ">
              <p className="font-semibold ml-2 text-lg md:ml-0  dark:text-white">
                {job.company}
              </p>
              <p className="dark:text-gray-300">{job.company}.com</p>
            </div>
            <div className="md:pt-4 md:pl-8">
              <a
                href={job.website}
                className="text-blue-500 text-lg font-bold bg-gray-300  py-3  w-40 block text-center rounded-md self-center md:self-end  md:mr-4  ml-6 md:ml-0  "
              >
                Company site
              </a>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="bg-white  mb-8  py-10  md:px-12  dark:bg-black dark:text-gray-300 ">
          <div className="mx-8 mb-8 md:flex md:items-center md:justify-between">
            <section>
              <div className="flex space-x-6 mb-2  ">
                <p>{job.postedAt}</p>
                <p>{job.contract}</p>
              </div>
              <div className="mb-6">
                <h2 className="font-semibold text-lg  dark:text-white">
                  {job.position}
                </h2>
                <p className="text-blue-600">{job.location}</p>
              </div>
            </section>
            <div>
              <a
                href={job.apply}
                className="bg-blue-500 text-white font-bold px-28 py-3 text-center  block  md:text-center md:px-0 md:w-36"
              >
                Apply
              </a>
            </div>
          </div>
          {/* Description */}
          <div className="px-8">
            <p className="mb-8">{job.description}</p>

            {/* Requirements */}
            <div>
              <h2 className="font-semibold text-lg mb-4 dark:text-white">
                Requirements
              </h2>
              {Object.values(job).map((x, i) => (
                <div key={i}>
                  <div className=" mb-6">{x.content}</div>

                  <ul className="list-disc">
                    {x.items?.map((item, index) => {
                      return (
                        <div key={index}>
                          <ul className="list-disc mb-2">
                            <li>{item}</li>
                          </ul>
                        </div>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Footer Mobile */}
        <div className="md:hidden ">
          <a
            href={job.apply}
            className="bg-blue-500 text-white font-bold px-28 py-3 text-center  block  md:text-center md:px-0 md:w-36"
          >
            Apply
          </a>
        </div>
      </div>
      {/* Footer Desktop */}
      <div className="bg-white p-6 w-full  hidden md:block dark:bg-black">
        <section className="flex mx-auto max-w-2xl justify-between">
          <div>
            <h2 className="font-semibold text-lg  dark:text-white">
              {job.position}
            </h2>
            <p className="dark:text-gray-300">{job.company}</p>
          </div>
          <div>
            <a
              href={job.apply}
              className="bg-blue-500 text-white font-bold px-28 py-3 text-center  block  md:text-center md:px-0 md:w-36"
            >
              Apply
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CareerDetails;
