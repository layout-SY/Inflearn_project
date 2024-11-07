import { axios } from 'axios';

const api = axios.create({
	baseURL: 'http://api.koreafilm.or.kr/',
	params: {
		api,
	},
});

`http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=N&listCount=50&ServiceKey=${process.env.KMDB_API_KEY}&title=${title}`;
