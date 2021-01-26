import axios from "axios";
import Vue from "vue";

Vue.use(axios);

export default api = axios.create({
  baseURL: "https://api.github.com"
});
