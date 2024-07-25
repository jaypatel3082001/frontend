import { DefaultApiService } from "./api";

export const questiondelete = async (id) => {
  try {
    const response = await DefaultApiService.delete(`/question/delete/${id}`);
    return response;
  } catch (error) {
    throw error.response;
  }
};
