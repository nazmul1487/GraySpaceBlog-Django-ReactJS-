import axios from "axios";

const api = "https://grayspace-blog.herokuapp.com/api/";

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