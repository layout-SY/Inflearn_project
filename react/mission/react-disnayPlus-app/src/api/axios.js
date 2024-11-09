import axios from 'axios';

const api = axios.create({
	baseURL: `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=N&listCount=50&ServiceKey=8I246J03562Y9995346D`,
});

const test = async () => {
	const getAPI = await api.get();
	console.log(getAPI);
};

test();
