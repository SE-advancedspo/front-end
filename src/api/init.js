import axios from 'axios'

const baseURL = "http://localhost:3000";

const init = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${
      localStorage.getItem("token")
        ? JSON.parse(localStorage.getItem("token")).access
        : null
    }`,
  }
});

export default init