import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODZmM2ZkNTYyNDZlYzZiYzU3YTUwNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjQyODgzMSwiZXhwIjoxNjM2Njg4MDMxfQ.9Z-JGaOTKsXYzkHUTYQOMxtYkjPAKNxG9V_TkQ0oKh8';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
