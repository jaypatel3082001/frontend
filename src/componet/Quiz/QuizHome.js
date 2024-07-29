// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { logout } from "../slices/auth/authSlice";
// import {
//   DecodeToken,
//   isAccessTokenExpired,
//   removeTokens,
// } from "../services/tokenServices";
// import {
//   AdminApiServices,
//   DefaultApiService,
//   DocumentApiService,
//   ReferenceApiService,
//   UserApiService,
// } from "../services/api";
// import {
//   adminAccessArray,
//   LocalStorageKeys,
//   USER_ROLES,
// } from "../constants/staticValue";
// import { addToast } from "../slices/toaster/toasterSlice";
// import { startLoader, stopLoader } from "../slices/loader/loaderSlice";
// import { setAuthenticateUser } from "../slices/user/userSlice";
// import { GetAdminUserById } from "../services/admin";
// import routes from "../routes/routes";
// import { GetUserById } from "../services/user";
// import { VscGlobe } from "react-icons/vsc";

// export default function AuthCheck(props) {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const accessToken = localStorage.getItem(LocalStorageKeys?.token);
//   const { userId: authId, roles: roles } = DecodeToken(accessToken);
//   const user = useSelector((state) => state.user.authUser);

//   const checkAccessToken = async () => {
//     try {
//       if (isAccessTokenExpired()) {
//         handleTokenExpired("Token expired, Please login again");
//         // if (refreshToken && !isRefreshTokenExpired()) {
//         //   const newAccessToken = await RefreshTokenToAccessToken(refreshToken);
//         //   setAccessToken(newAccessToken);
//         //   updatedApiHeader(newAccessToken);
//         //   const { roles, userId } = DecodeToken(newAccessToken);
//         //   dispatch(
//         //     setTokenAndAuthenticationState({
//         //       token: newAccessToken,
//         //       isAuthenticated: true,
//         //       roles,
//         //     })
//         //   );
//         // } else {
//         //   handleTokenExpired("Refresh token is expired");
//         // }
//       }
//     } catch (error) {
//       handleTokenExpired("Token verification failed");
//       console.error("Token verification failed:", error.message);
//     }
//   };

// // Check if the refreshtoken token is expired
// export const isRefreshTokenExpired = () => {
//     const refreshtoken = getDataFromLocal(LocalStorageKeys?.refreshToken);
//     if (!refreshtoken) return true; // Token doesn't exist
//     const decodedToken = jwtDecode(refreshtoken);
//     const currentTime = Date.now() / 1000;
//     return decodedToken.exp < currentTime;
//   };

//   useEffect(() => {
//     checkAccessToken();
//     }, 1000);
// //////////////////////
// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const fs = require("fs");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// app.post("/saveData", (req, res) => {
//   const data = req.body;
//   fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
//   res.send({ message: "Data saved successfully" });
// });
// const port = 5000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
