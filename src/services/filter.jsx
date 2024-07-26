import { DefaultApiService, SearchApiService } from "./api";

export const GetallItem = async (QueryParam) => {
  try {
    const response = await SearchApiService.get("/getsearchAll", {
      params: QueryParam,
    });

    return response?.data;
  } catch (error) {
    console.log("Request failed:", error.response.data);
    throw error;
  }
};

export const GetallResult = async (QueryParam, id) => {
  try {
    const response = await SearchApiService.get(`/getsearchsection/${id}`, {
      params: QueryParam,
    });

    return response?.data;
  } catch (error) {
    console.log("Request failed:", error.response.data);
    throw error;
  }
};

export const Getuser = async (QueryParam) => {
  try {
    const response = await SearchApiService.get(`/getusers`, {
      params: QueryParam,
    });

    return response?.data;
  } catch (error) {
    console.log("Request failed:", error.response.data);
    throw error;
  }
};
