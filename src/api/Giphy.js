import axios from "axios";

const KEY = "ZCqFmJOKeCnm6P08k6k1Ikv9Tajkofel";
const URL = "https://api.giphy.com";

export default axios.create({
  baseURL: URL,
  params: {
    api_key: KEY,
  },
});
