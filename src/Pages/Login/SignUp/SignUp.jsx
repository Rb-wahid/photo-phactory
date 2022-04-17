import React, { useState } from "react";
import register from "../img/register_bg_2.png";
import { Link } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import auth from "../../../Firebase.init";
import SocialLogIn from "../SocialLogIn/SocialLogIn";

const SignUp = () => {
  const [isAgree, setIsAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, errorCreateUser] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending, errorSendEmailVerification] =
    useSendEmailVerification(auth);
  const [updateProfile, updating, errorUpdateProfile] = useUpdateProfile(auth);

  const error =
    errorCreateUser || errorUpdateProfile || errorSendEmailVerification;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    await sendEmailVerification();
  };

  /*
   * some style collect from creativetimofficial/tailwind-starter-kit
   * & then modified
   * link -> https://github.com/creativetimofficial/tailwind-starter-kit/blob/main/Login%20Page/react-login-page/src/views/Login.js
   */

  return (
    <section className="absolute w-full h-full">
      <div
        className="absolute top-0 w-full h-full bg-gray-900"
        style={{
          backgroundImage: `url(${register})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
              <SocialLogIn type="Sign up" />
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-gray-500 text-center mb-3 font-bold">
                  <small>Or Sign up with credentials</small>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Name"
                      style={{ transition: "all .15s ease" }}
                      id="name"
                      required
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Email"
                      style={{ transition: "all .15s ease" }}
                      id="email"
                      required
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Password"
                      style={{ transition: "all .15s ease" }}
                      id="password"
                      required
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer pt-1">
                      <input
                        id="checkbox"
                        type="checkbox"
                        className=" border-0 rounded text-gray-800 ml-1 w-5 h-5"
                        style={{ transition: "all .15s ease" }}
                        onClick={(event) => setIsAgree(event.target.checked)}
                      />
                      <span className="ml-2 text-sm font-semibold text-gray-700">
                        Accept Terms and Conditions
                      </span>
                    </label>
                  </div>
                  {error && (
                    <div className="text-center mt-6 text-red-700 font-semibold">
                      <p style={{ transition: "all .15s ease" }}>
                        {error.message}
                      </p>
                    </div>
                  )}

                  <div className="text-center mt-6">
                    <button
                      disabled={!isAgree}
                      className={`bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ${
                        !isAgree && "bg-opacity-40"
                      } `}
                      type="submit"
                      style={{ transition: "all .15s ease" }}
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className=" flex flex-wrap mt-6">
                    <p className=" pr-2">Already have an account? </p>
                    <Link
                      to="/signin"
                      className="font-semibold text-blue-500 hover:text-blue-700"
                    >
                      Please Sign in
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
