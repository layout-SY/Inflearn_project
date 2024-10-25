import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://api.themoviedb.org/3',
	params: {
		api_key: '82165458e0ceb2a0a721f5484c588e40',
		language: 'ko-KR',
	},
});

export default instance;
