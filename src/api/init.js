import axios from 'axios'

//const baseURL = "http://localhost:3000";

const baseURL = "https://back-end-production-946d.up.railway.app";

const init = axios.create({
  baseURL,
  headers: {
    Authorization: 
      localStorage.getItem("token")
      //   ? JSON.parse(localStorage.getItem("token")).access
      //   : undefined,
  },
});

export default init