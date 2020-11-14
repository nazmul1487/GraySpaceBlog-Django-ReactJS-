import axios from "axios";

const api = "https://jsonplaceholder.typicode.com/posts";

function postUrl(id) {
  return `${api}/${id}`;
}

const getPosts = (page) =>{
  const num_of_post = 5
  const postsLink = `${api}?_page=${page}&_limit=${num_of_post}`;
  return axios.get(postsLink);
}

const getPost = (postId) =>{
  return axios.get(postUrl(postId));
}

const getComments = (postId) =>{
  const commentsLink = postUrl(postId) + "/comments";
  return axios.get(commentsLink);
}

export {
  getPosts,
  getPost,
  getComments,
};