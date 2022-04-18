import React from "react";
import CustomLink from "../../../../CustomLink/CustomLink";

const PackageNav = () => {
  return (
    <div className="flex justify-center ">
      <div className="mx-3 md:mx-5 md:px-2 rounded-lg w-[400px] flex flex-wrap items-center justify-evenly py-4 text-gray-300 shadow-lg  navbar navbar-expand-lg navbar-light bg-[#111827]">
        <CustomLink to="wedding">Wedding pkg</CustomLink>
        <CustomLink to="family">Family pkg</CustomLink>
        <CustomLink to="student">Student pkg</CustomLink>
      </div>
    </div>
  );
};

export default PackageNav;
