const requests = {
	fetchPopularMovieList: `movie/popular`,
	fetchNowPlaying: 'movie/now_playing',
	fetchTopRated: '/movie/top_rated',
	fetchActionMovies: '/discover/movie?with_genres=28&include_adult=true',
	fetchComedyMovies: '/discover/movie?with_genres=35&include_adult=true',
	fetchHorrorMovies: '/discover/movie?with_genres=27&include_adult=true',
	fetchRomanceMovies: '/discover/movie?with_genres=10749&include_adult=true',
	fetchDocumentMovies: '/discover/movie?with_genres=99&include_adult=true',
};

export default requests;
