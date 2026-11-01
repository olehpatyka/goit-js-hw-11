import axios from 'axios';
export function getImagesByQuery(query) {
  return axios.get('https://pixabay.com/api', {
    params: query,
  });
}
