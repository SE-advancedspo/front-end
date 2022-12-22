import axios from 'axios'

// const baseURL = "http://localhost:3000";
const baseURL = "http://167.99.136.159:3000";

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