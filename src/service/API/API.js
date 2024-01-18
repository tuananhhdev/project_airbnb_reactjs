import { API } from "./configServ";
export const listAPI = {
  // login
  login: (data) => API.post("/api/auth/signin", data),

  // register
  register: () => API.post("/api/auth/signup"),

  // search location
  searchLocation: () => API.get("/api/vi-tri"),

  // page location
  pageLocation: () =>
    API.get("/api/vi-tri/phan-trang-tim-kiem?pageIndex=4&pageSize=4s"),

  // get room location
  getRoomLocation: () => API.get("/api/phong-thue/lay-phong-theo-vi-tri"),
};
