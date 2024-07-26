import { DefaultApiService } from "./api";

export const topstudent = async () => {
  try {
    const response = await DefaultApiService.get(`/result/topTenResults`);
    return response;
  } catch (error) {
    throw error.response;
  }
};

export const RecentStudent = async () => {
  try {
    const response = await DefaultApiService.get(`/result/recentResults`);
    return response;
  } catch (error) {
    throw error.response;
  }
};

export const keyget = async (id) => {
  try {
    const response = await DefaultApiService.get(`/key/update/${id}`);
    return response;
  } catch (error) {
    throw error.response;
  }
};

export const quizpopboxget = async () => {
  try {
    const response = await DefaultApiService.get(`/quiz/read`);
    return response;
  } catch (error) {
    throw error.response;
  }
};

export const quizpaper = async (id) => {
  try {
    const response = await DefaultApiService.get(`/quiz/getall/${id}`);
    return response;
  } catch (error) {
    throw error.response;
  }
};

export const quizallsectionread = async () => {
  try {
    const response = await DefaultApiService.get(`/section/getall`);
    return response;
  } catch (error) {
    throw error.response;
  }
};

export const quizaddsectionread = async (id) => {
  try {
    const response = await DefaultApiService.get(`/quiz/read/${id}`);
    return response;
  } catch (error) {
    throw error.response;
  }
};

export const quizinsertsectionread = async (id, ele) => {
  try {
    const response = await DefaultApiService.put(`/quiz/insertquiz/${id}`, ele);
    return response;
  } catch (error) {
    throw error.response;
  }
};

export const studentwiseresult = async (id) => {
  try {
    const response = await DefaultApiService.get(`/result/read/${id}`);
    return response;
  } catch (error) {
    throw error.response;
  }
};

export const sectiontoquestionread = async () => {
  try {
    const response = await DefaultApiService.get(`/section/getall`);
    return response;
  } catch (error) {
    throw error.response;
  }
};

export const sectionallquestionread = async () => {
  try {
    const response = await DefaultApiService.get(`/questions/getallquestions`);
    return response;
  } catch (error) {
    throw error.response;
  }
};
export const sectionaddquestionread = async (id) => {
  console.log("first", id);
  try {
    const response = await DefaultApiService.get(`/section/read/${id}`);
    return response;
  } catch (error) {
    throw error.response;
  }
};

export const sectioninsertquestion = async (id, ele) => {
  try {
    const response = await DefaultApiService.put(
      `/section/insert-questions/${id}`,
      ele
    );
    return response;
  } catch (error) {
    throw error.response;
  }
};
