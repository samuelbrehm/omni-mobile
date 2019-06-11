import axios from 'axios';
import store from '~/store';

// localhost genymotion => 10.0.3.2
// localhost android => 10.0.2.2

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use((config) => {
  const { token } = store.getState().auth;
  // const { active: team } = store.getState().teams;

  const headers = { ...config.headers };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  // if (team) {
  //   headers.TEAM = team.slug;
  // }

  return { ...config, headers };
});

export default api;
