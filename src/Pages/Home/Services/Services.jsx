/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Family from "./Family/Family";
import PackageNav from "./PackageNav/PackageNav";
import Student from "./Student/Student";
import Wedding from "./Wedding/Wedding";

const Services = () => {
  return (
    <div>
      <h2 className="shadow-md pt-4 pb-3"></h2>
      <h2 className="text-3xl text-center font-bold my-8 text-blue-900 shadow-md pb-5">
        Service Package
      </h2>
      <PackageNav />
      <div className=" max-w-7xl m-auto">
        <Routes>
          <Route path="/" element={<Wedding />} />
          <Route path="Wedding" element={<Wedding />} />
          <Route path="family" element={<Family />} />
          <Route path="student" element={<Student />} />
        </Routes>
      </div>
    </div>
  );
};

export default Services;
