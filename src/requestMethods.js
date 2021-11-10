import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODZmM2ZkNTYyNDZlYzZiYzU3YTUwNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjUxNzA2NywiZXhwIjoxNjM2Nzc2MjY3fQ.I66f9QROZaYbEgTMEfeUP4mbj2i2m1_QbyPnK-JH728';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
