import { DefaultApiService } from "./api";

export const updatequestion = async (id, data) => {
  try {
    const response = await DefaultApiService.put(
      `/questions/update/${id}`,
      data
    );

    return response;
  } catch (error) {
    console.log("Request failed:", error.response.data);
    throw error.response;
  }
};

export const updatesection = async (id, data) => {
  try {
    const response = await DefaultApiService.put(`/section/update/${id}`, data);

    return response;
  } catch (error) {
    console.log("Request failed:", error.response.data);
    throw error.response;
  }
};

export const updatequiz = async (id, data) => {
  try {
    const response = await DefaultApiService.put(`quiz/update/${id}`, data);

    return response;
  } catch (error) {
    console.log("Request failed:", error.response.data);
    throw error.response;
  }
};
