import axios from 'axios'

const API = axios.create({baseURL :"http://localhost:8000"});

axios.interceptors.request.use(req => {
    if(localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
})

export const fetchPost = () => axios.get('/posts');
export const createPost = (newPost) => axios.post("/posts", newPost);
export const updatePost = (id, updatedPost) => axios.patch(`/posts/${id}` , updatedPost);
export const deletePost = (id) => axios.delete(`/posts/${id}`);
export const likePost = (id) => axios.patch(`/posts/likepost/${id}`);

export const signIn = (FormData) => API.post('/user/signin' , FormData);
export const signUp = (FormData) => API.post('/user/signup' , FormData);