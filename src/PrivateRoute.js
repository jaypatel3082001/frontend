import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  // useEffect(() => {
  //   if (token !== null) {
  //     navigate("/");
  //   } else {
  //     navigate("/Logingpage");
  //   }
  // }, [token]);

  const removeTokens = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("onBoarding");
  };

  return props.children;
};

export default PrivateRoute;
