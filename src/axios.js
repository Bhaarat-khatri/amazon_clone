import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-610d7/us-central1/api", //Api (Clound Function)Url
});

export default instance;
