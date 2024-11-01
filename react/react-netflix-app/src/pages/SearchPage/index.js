import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import instance from '../../api/axios';
import './SearchPage.css';

export default function SearchPage() {
	const [searchResults, setSearchResults] = useState([]);

	console.log(useLocation());
	const useQuery = () => {
		return new URLSearchParams(useLocation().search);
	};

	let query = useQuery();
	const searchTerm = query.get('q');

	useEffect(() => {
		if (searchTerm) {
			fetchSearchMovie(searchTerm);
		}
	}, [searchTerm]);

	const fetchSearchMovie = async () => {
		try {
			const request = await instance.get(`/search/multi?include_adult=false&query=${searchTerm}`);
			console.log(request);
			setSearchResults(request.data.results);
		} catch (e) {
			console.error(e);
		}
	};

	const renderSearchResults = () => {
		return searchResults.length > 0 ? (
			<section className="search-container">
				{searchResults.map((movie) => {
					if (movie.backdrop_path !== null && movie.media_type !== 'person') {
						const movieImageUrl = 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path;
						return (
							<div className="movie__column-poster">
								<img src={movieImageUrl} alt="movie" className="movie__poster" />
							</div>
						);
					}
				})}
			</section>
		) : (
			<section className="no-results">
				<div className="no-results__text">
					<p>찾고자 하는 검색어 "{searchTerm}"에 맞는 영화가 없습니다.</p>
				</div>
			</section>
		);
	};

	return renderSearchResults();
}
