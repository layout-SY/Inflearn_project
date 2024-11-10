import axios from 'axios';

const api_key = import.meta.env.VITE_TMDB_API_KEY;

const api = axios.create({
	baseURL: `https://api.themoviedb.org/3/`,
	headers: {
		accept: 'application/json',
	},
	params: {
		api_key: api_key,
		language: 'ko-KR',
	},
});

export default api;
