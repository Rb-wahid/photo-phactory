import React, { useState } from "react";
import register from "../img/register_bg_2.png";
import { Link } from "react-router-dom";
import SocialLogIn from "../SocialLogIn/SocialLogIn";
import auth from "../../../Firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { async } from "@firebase/util";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});
  const [signInWithEmailAndPassword, user, loading, errorSignIn] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, errorResetPassword] =
    useSendPasswordResetEmail(auth);

  if (errorSignIn || errorResetPassword) {
    let err = errorSignIn || errorResetPassword;
    setError(err);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const password = event.target.password.value;

    await signInWithEmailAndPassword(email, password);
  };

  const resetPassword = async (event) => {
    if (email) {
      setError({})
      await sendPasswordResetEmail(email);
    } else {
      let err = {};
      err.message = "Enter your email first";
      setError(err);
    }
  };

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
              <SocialLogIn type="Sign in" />
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-gray-500 text-center mb-3 font-bold">
                  <small>Or sign in with credentials</small>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      onChange={(e) => setEmail(e.currentTarget.value)}
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
                  {error && (
                    <div className="text-center mt-6 text-red-700 font-semibold">
                      <p style={{ transition: "all .15s ease" }}>
                        {error.message}
                      </p>
                    </div>
                  )}
                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                      type="submit"
                      style={{ transition: "all .15s ease" }}
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="flex flex-wrap mt-6">
                    <div className="w-1/2 text-blue-500 hover:text-blue-700 font-semibold">
                      <Link to onClick={resetPassword}>
                        Forgot password?
                      </Link>
                    </div>
                    <div className="w-1/2 text-right text-blue-500 hover:text-blue-700 font-semibold">
                      <Link to="/signup">Create new account</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
