import { DefaultApiService } from "./api";

export const questiondelete = async (id) => {
  try {
    const response = await DefaultApiService.delete(`/questions/delete/${id}`);
    return response;
  } catch (error) {
    throw error.response;
  }
};

export const quizdelete = async (id) => {
  try {
    const response = await DefaultApiService.delete(`/quiz/delete/${id}`);
    return response;
  } catch (error) {
    throw error.response;
  }
};

export const sectiondelete = async (id) => {
  try {
    const response = await DefaultApiService.delete(`/section/delete/${id}`);
    return response;
  } catch (error) {
    throw error.response;
  }
};

export const admindelete = async (id) => {
  try {
    const response = await DefaultApiService.delete(`/auth/delete/${id}`);
    return response;
  } catch (error) {
    throw error.response;
  }
};

export const keydelete = async (id) => {
  try {
    const response = await DefaultApiService.put(`/key/delete/${id}`);
    return response;
  } catch (error) {
    throw error.response;
  }
};

export const quizssectiondelete = async (id, updatedDel) => {
  try {
    const response = await DefaultApiService.put(
      `/quiz/deletetquiz/${id}`,
      updatedDel
    );
    return response;
  } catch (error) {
    throw error.response;
  }
};

export const sectiontoquestiondelete = async (id, updatedDel) => {
  try {
    const response = await DefaultApiService.put(
      `/section/deletequize-question/${id}`,
      updatedDel
    );
    return response;
  } catch (error) {
    throw error.response;
  }
};
