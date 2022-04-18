import React from "react";
import { useNavigate } from "react-router-dom";

const Family = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    return navigate("/checkout");
  };

  /*
   * get design from here https://tailwind-elements.com/snippets/tailwind/tailwindelements/3590598
   * then modified
   */
  return (
    <div className=" max-w-7xl m-auto mx-12 my-12">
      <h2 className="text-center text-2xl font-semibold mb-7 text-blue-700">
        Family Package
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-7">
        <div class="mb-6 lg:mb-0">
          <div class="block rounded-lg shadow-lg bg-white h-full">
            <div class="p-6 border-b border-gray-300 text-center">
              <p class="uppercase mb-4 text-sm">
                <strong>Outdoor Photo shoot</strong>
              </p>
              <h3 class="text-2xl mb-6">
                <strong>$ 200</strong>
              </h3>
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-transparent text-blue-500 font-semibold text-md leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"
                style={{ backgroundColor: "hsl(0, 0%, 95%)" }}
                data-mdb-ripple="true"
                data-ripple-color="primary"
                onClick={handleCheckout}
              >
                BOOK A DAY
              </button>
            </div>
            <div class="p-6">
              <ol class="list-inside">
                <li class="mb-4 flex items-center">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="check"
                    class="text-green-600 w-4 h-4 mr-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                    ></path>
                  </svg>
                  Request Destination
                </li>
                <li class="mb-4 flex items-center">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="check"
                    class="text-green-600 w-4 h-4 mr-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                    ></path>
                  </svg>
                  Free Pickup
                </li>
                <li class="mb-4 flex items-center">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="check"
                    class="text-green-600 w-4 h-4 mr-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                    ></path>
                  </svg>
                  Hard Photo 10 Album
                </li>
                <li class="mb-4 flex items-center">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="check"
                    class="text-green-600 w-4 h-4 mr-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                    ></path>
                  </svg>
                  5 Videos Cinematic
                </li>
                <li class="mb-4 flex items-center">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="check"
                    class="text-green-600 w-4 h-4 mr-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                    ></path>
                  </svg>
                  Hard Photo Guarantee
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div class="mb-6 lg:mb-0">
          <div class="block rounded-lg shadow-lg bg-white h-full">
            <div class="p-6 border-b border-gray-300 text-center">
              <p class="uppercase mb-4 text-sm">
                <strong>Exclusive Studio</strong>
              </p>
              <h3 class="text-2xl mb-6">
                <strong>$ 150</strong>
              </h3>
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-transparent text-blue-500 font-semibold text-md leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"
                style={{ backgroundColor: "hsl(0, 0%, 95%)" }}
                data-mdb-ripple="true"
                data-ripple-color="primary"
                onClick={handleCheckout}
              >
                BOOK A DAY
              </button>
            </div>
            <div class="p-6">
              <ol class="list-inside">
                <li class="mb-4 flex items-center">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="check"
                    class="text-green-600 w-4 h-4 mr-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                    ></path>
                  </svg>
                  Hard Photo 10 Album
                </li>
                <li class="mb-4 flex items-center">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="check"
                    class="text-green-600 w-4 h-4 mr-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                    ></path>
                  </svg>
                  5 Videos Cinematic
                </li>
                <li class="mb-4 flex items-center">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="check"
                    class="text-green-600 w-4 h-4 mr-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                    ></path>
                  </svg>
                  Hard Photo Guarantee
                </li>
                <li class="mb-4 flex items-center">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="check"
                    class="text-green-600 w-4 h-4 mr-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                    ></path>
                  </svg>
                  50+ Take Photo
                </li>
                <li class="mb-4 flex items-center">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="check"
                    class="text-green-600 w-4 h-4 mr-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                    ></path>
                  </svg>
                  One Day Service
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div class="mb-6 lg:mb-0">
          <div class="block rounded-lg shadow-lg bg-white h-full">
            <div class="p-6 border-b border-gray-300 text-center">
              <p class="uppercase mb-4 text-sm">
                <strong>Standard Studio</strong>
              </p>
              <h3 class="text-2xl mb-6">
                <strong>$ 80</strong>
              </h3>
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-transparent text-blue-500 font-semibold text-md leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"
                style={{ backgroundColor: "hsl(0, 0%, 95%)" }}
                data-mdb-ripple="true"
                data-ripple-color="primary"
                onClick={handleCheckout}
              >
                BOOK A DAY
              </button>
            </div>
            <div class="p-6">
              <ol class="list-inside">
                <li class="mb-4 flex items-center">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="check"
                    class="text-green-600 w-4 h-4 mr-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                    ></path>
                  </svg>
                  10 Take Photo
                </li>
                <li class="mb-4 flex items-center">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="check"
                    class="text-green-600 w-4 h-4 mr-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                    ></path>
                  </svg>
                  Large Hard Photo
                </li>
                <li class="mb-4 flex items-center">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="check"
                    class="text-green-600 w-4 h-4 mr-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                    ></path>
                  </svg>
                  Soft Copy Photo
                </li>
                <li class="mb-4 flex items-center">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="check"
                    class="text-green-600 w-4 h-4 mr-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                    ></path>
                  </svg>
                  Free 1 Frame Photo
                </li>
                <li class="mb-4 flex items-center">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="check"
                    class="text-green-600 w-4 h-4 mr-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                    ></path>
                  </svg>
                  One Day Service
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Family;
