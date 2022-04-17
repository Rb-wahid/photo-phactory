import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../Firebase.init";
import github from "../img/github.svg";
import google from "../img/google.svg";

const SocialLogIn = ({ type }) => {
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, userGithub, loadingGithub, errorGithub] =
    useSignInWithGithub(auth);

  const error = errorGoogle || errorGithub;

  /*
   * some style collect from creativetimofficial/tailwind-starter-kit
   * & then modified
   * link -> https://github.com/creativetimofficial/tailwind-starter-kit/blob/main/Login%20Page/react-login-page/src/views/Login.js
   */

  return (
    <div className="rounded-t mb-0 px-6 py-6">
      <div className="text-center mb-3">
        <h6 className="text-gray-600 text-sm font-bold">{type} with</h6>
      </div>
      <div className="btn-wrapper text-center">
        <button
          className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center hover:font-bold text-xs"
          type="button"
          style={{ transition: "all .15s ease" }}
          onClick={async () => await signInWithGithub()}
        >
          <img alt="..." className="w-5 mr-1" src={github} />
          Github
        </button>
        <button
          className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center hover:font-bold text-xs"
          type="button"
          style={{ transition: "all .15s ease" }}
          onClick={async () => await signInWithGoogle()}
        >
          <img alt="..." className="w-5 mr-1" src={google} />
          Google
        </button>
      </div>
      {error && (
        <div className="text-center mt-6 text-red-700 font-semibold">
          <p style={{ transition: "all .15s ease" }}>{error.message}</p>
        </div>
      )}
      <hr className="mt-6 border-b-1 border-gray-400" />
    </div>
  );
};

export default SocialLogIn;
