import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID hxeJZO98hWQvAYXciF5H96kYehBOMVYz9u1e3eMIqy4',
  }
});
