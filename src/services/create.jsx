import { DefaultApiService } from "./api";

export const createquestion = async (data) => {
  try {
    const response = await DefaultApiService.post(`/questions/create`, data);

    return response;
  } catch (error) {
    console.log("Request failed:", error.response.data);
    throw error.response;
  }
};

export const createsection = async (data) => {
  try {
    const response = await DefaultApiService.post(`/section/create`, data);

    return response;
  } catch (error) {
    console.log("Request failed:", error.response.data);
    throw error.response;
  }
};

export const createquiz = async (data) => {
  try {
    const response = await DefaultApiService.post(`/quiz/create`, data);

    return response;
  } catch (error) {
    console.log("Request failed:", error.response.data);
    throw error.response;
  }
};

export const createkey = async (data) => {
  try {
    const response = await DefaultApiService.post(`/key/generatekey`, data);

    return response;
  } catch (error) {
    console.log("Request failed:", error.response.data);
    throw error.response;
  }
};
