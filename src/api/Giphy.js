import axios from "axios";

const URL = "https://api.giphy.com";

export default axios.create({
  baseURL: URL,
  params: {},
});
