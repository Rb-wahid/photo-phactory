import React from "react";
import { ToastContainer, toast } from "react-toastify";

const Checkout = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast("Thank you for the booking");
  };

  /*
   * Design get from https://larainfo.com/blogs/tailwind-css-simple-ecommerce-checkout-page-ui-example
   * then modified
   */
  return (
    <div className="flex flex-col w-2/3 md:w-2/4 px-0 mx-auto md:flex-row mt-12">
      <div className="flex flex-col md:w-full">
        <h2 className="mb-4 font-bold md:text-xl text-heading text-center pb-2 ">
          Shipping Address
        </h2>
        <form onSubmit={handleSubmit} className="justify-center w-full mx-auto">
          <div className="">
            <div className="space-x-0 lg:flex lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <label
                  htmlFor="firstName"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  First Name
                </label>
                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="w-full lg:w-1/2 ">
                <label
                  htmlFor="firstName"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  Last Name
                </label>
                <input
                  name="Last Name"
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>
            <div className=" mt-4 space-x-0 lg:flex lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <label
                  htmlFor="phone"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <label
                  htmlFor="Email"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  Email
                </label>
                <input
                  name="Last Name"
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full">
                <label
                  htmlFor="Address"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  Address
                </label>
                <textarea
                  className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  name="Address"
                  cols="20"
                  rows="4"
                  placeholder="Address"
                ></textarea>
              </div>
            </div>
            <div className="space-x-0 lg:flex lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <label
                  htmlFor="city"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  City
                </label>
                <input
                  name="city"
                  type="text"
                  placeholder="City"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="w-full lg:w-1/2 ">
                <label
                  htmlFor="postcode"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  Postcode
                </label>
                <input
                  name="postcode"
                  type="text"
                  placeholder="Post Code"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>

            <div className="mt-8">
              <button className="w-full px-6 py-2 text-blue-300 hover:text-blue-100 bg-blue-600 hover:bg-blue-900 hover:font-bold">
                Process
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Checkout;
