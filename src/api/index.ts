import axios from 'axios';

export const api = axios.create({
  headers: {
    'Authorization': typeof window !== "undefined" && `Bearer ${localStorage.getItem('token')}`
  },
  baseURL: 'http://localhost:3000/',
});
