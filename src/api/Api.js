//import axios
import axios from "axios";

const Api = axios.create({
  //set default endpoint API
  baseURL: "https://sibani.gorontaloweb.com/api",
});

export default Api;
