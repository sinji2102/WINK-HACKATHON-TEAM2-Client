import { privateAxios } from "../axiosInstance";

export const postRegister = async (allCircle) => {
  try {
    const response = await privateAxios.post("/loadmap", allCircle);
    return response.data;
  } catch (error) {
    console.error("error", error);
    throw error;
  }
};
