import React, { useEffect, useState } from 'react';
import api from '../../api/axios';
import './SearchPage.css';
import { useLocation } from 'react-router-dom';
import { useDebounce } from '../../hooks/useDounced';

const SearchPage = () => {
	const [searchResults, setSearchResults] = useState([]);

	const useQuery = () => {
		return new URLSearchParams(useLocation().search);
	};

	let query = useQuery();
	const searchTerm = query.get('q');
	const debouncedSearchTerm = useDebounce(searchTerm, 500);

	useEffect(() => {
		if (debouncedSearchTerm) {
			fetchSearchMovie(debouncedSearchTerm);
		}
	}, [debouncedSearchTerm]);

	const fetchSearchMovie = async () => {
		try {
			const request = await api.get(`/search/multi?include_adult=true&query=${searchTerm}`);
			setSearchResults(request.data.results);
		} catch (e) {}
	};

	return (
		<section className="search-container">
			{searchResults.map((searchTerm) => (
				<div className="movie" key={searchTerm.id}>
					<img
						src={`https://image.tmdb.org/t/p/w500/${searchTerm.backdrop_path}`}
						alt="movie"
						className="movie__poster"
					/>
				</div>
			))}
		</section>
	);
};

export default SearchPage;
