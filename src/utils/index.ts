import axios, { AxiosInstance } from "axios";

// base URL
const request: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 3000,
});

/**
 * Hàm get api
 * @param api api cần truyền
 * @param params Tham số truyền cho api
 * @returns promise
 */
const get = async (api: string, params: object = {}) => {
  const response = await request.get(api, params);
  return response.data;
};

/**
 * Hàm post api
 * @param api api cần truyền
 * @param payload Dữ liệu gửi đi cùng api
 * @returns promise
 */
const post = async (api: string, payload: object = {}) => {
  const response = await request.post(api, payload);
  return response.data;
};

export { get, post };
