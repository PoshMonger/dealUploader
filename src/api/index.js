import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_BACKEND });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsByCreator = (name) => API.get(`/posts/creator?name=${name}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const fetchPostsBySearchtype = (searchQuery) => API.get(`/posts/search2?searchQuery=${searchQuery.search2 || 'none'}&tags=${searchQuery.tags}`);

export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value });
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);



export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);



const url = process.env.REACT_APP_BACKEND
export const fetchContacts = () => axios.get(url);
export const createContact = (newContact) => axios.post(url, newContact)





export const fetchBosts = (page) => API.get(`/bosts?page=${page}`);

export const createBost = (newBost) => API.post('/bosts', newBost)

export const updateBost = (id, updatedBost) => API.patch(`/bosts/${id}`, updatedBost)

export const likeBost = (id) => API.patch(`/bosts/${id}/likeBost`);

export const deleteBost = (id) => API.delete(`/bosts/${id}`);

