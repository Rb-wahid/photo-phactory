/* eslint-disable jsx-a11y/anchor-is-valid */
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import "tw-elements";
import CustomLink from "../../../CustomLink/CustomLink";
import auth from "../../../Firebase.init";
const Header = () => {
  const [user, loading, errorAuth] = useAuthState(auth);
  console.log("header ", user);
  return (
    <nav
      className={`
  relative
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-4
  
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  shadow-lg
  navbar navbar-expand-lg navbar-light
  bg-[#111827]
  `}
    >
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <button
          className="
      navbar-toggler
      text-gray-500
      border-0
      hover:shadow-none hover:no-underline
      py-2
      px-2.5
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            className="w-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </button>
        <div
          className="collapse navbar-collapse flex-grow items-center ml-10"
          id="navbarSupportedContent"
        >
          <a
            className="
        flex
        items-center
        text-gray-900
        hover:text-gray-900
        focus:text-gray-900
        mt-2
        lg:mt-0
        mr-1
      "
          >
            <h2 className="text-gray-300 italic font-semibold font-['Pacifico'] text-3xl shadow-xs shadow-gray-100">
              Photo Phactory
            </h2>
          </a>
          {/* <!-- Left links --> */}
          <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
            <li className="nav-item p-2">
              <div
                className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                href="#"
              >
                <CustomLink to="/home">Home</CustomLink>
              </div>
            </li>
            <li className="nav-item p-2">
              <div
                className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                href="#"
              >
                <CustomLink to="/blog">Blog</CustomLink>
              </div>
            </li>
          </ul>
          {/* <!-- Left links --> */}
        </div>
        {/* <!-- Collapsible wrapper --> */}

        {/* <!-- Right elements --> */}
        <div className="flex items-center mr-10">
          <div className="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4">
            <CustomLink to="/about">About</CustomLink>
          </div>

          <div className="flex items-center">
            {user ? (
              <>
                {/* Display If  Sign In  */}

                <div className="relative">
                  <p>{user.displayName.split(' ')[0]}</p>
                </div>
                <Link
                  to="/"
                  className="pl-5 font-semibold text-gray-300 hover:text-gray-700 focus:text-gray-700 mr-4"
                  onClick={() => signOut(auth)}
                >
                  Sign out
                </Link>
              </>
            ) : (
              <>
                {/* Display If Not  Sign In  */}
                <div className="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4">
                  <CustomLink to="/signin">Sign In</CustomLink>
                </div>
                <div className="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4">
                  <CustomLink to="/signup">Sign Up</CustomLink>
                </div>
              </>
            )}
          </div>
        </div>
        {/* <!-- Right elements --> */}
      </div>
    </nav>
  );
};

export default Header;
