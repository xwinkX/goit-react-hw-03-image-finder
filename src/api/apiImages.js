import axios from 'axios';

const API_KEY = '28142937-a3dfb3cd180998f959efa9eff';
const BASE_URL = 'https://pixabay.com/api/';

export const getFilms = page => {
  return axios.get(
    `${BASE_URL}?q=cat&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
};

console.log('sss');
