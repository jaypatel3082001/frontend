import { AuthApiService } from "./api";

export const SignUpUser = async (data) => {
  try {
    const response = await AuthApiService.post("/signup", data);
    return response;
  } catch (error) {
    throw error.response;
  }
};

export const Studentloging = async (data) => {
  try {
    const response = await AuthApiService.post("/userLogin", data);
    return response;
  } catch (error) {
    throw error.response;
  }
};
export const Adminloging = async (data) => {
  try {
    const response = await AuthApiService.post("/login", data);

    return response;
  } catch (error) {
    throw error.response;
  }
};
