import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class DMRequest {
  constructor(url, timeout) {
    this.instance = axios.create({
      baseURL: url,
      timeout: timeout,
    });
    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        return err;
      }
    );
  }
  request(config) {
    return this.instance.request({ ...config });
  }
  get(config) {
    return this.instance.request({ ...config, method: "get" });
  }
  post(config) {
    return this.instance.request({ ...config, method: "post" });
  }
}

const dmRequest = new DMRequest(BASE_URL, TIMEOUT);

export default dmRequest;
