import axios from "axios";

const api = "http://127.0.0.1:8000/api/";

const verifyToken = (token) =>{
  return axios.post(api + "token/verify/", token);
}

const postRegistration = (values) =>{
  return axios.post(api + "registration/", values);
}

const postLogin = (values) =>{
  return axios.post(api + "token/", values);
}

export {
  verifyToken,
  postRegistration,
  postLogin,
};