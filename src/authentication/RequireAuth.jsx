import React, { useEffect } from "react";
import auth from "../firebase/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { Atom } from "react-loading-indicators";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth)
  console.log("user", user);
  const location = useLocation();

  if (loading) {
    return <p className="h-screen flex justify-center items-center"><Atom color="#1e99f5" size="large" text="" textColor="" /></p>
  }

  if (!user) {
    return (
      <Navigate to={"/register"} state={{ from: location }} replace></Navigate>
    );
  }

  return children;
};

export default RequireAuth;
