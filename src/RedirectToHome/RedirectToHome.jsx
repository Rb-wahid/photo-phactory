import React from "react";
import { Navigate } from "react-router-dom";

const RedirectToHome = ({ children }: { children: JSX.Element }) => {
  return <Navigate to="/home" />;
};

export default RedirectToHome;
