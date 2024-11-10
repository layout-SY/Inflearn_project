import React, { useEffect, useState } from 'react';
import api from '../../api/axios';
import requests from '../../api/requests';
import './Banner.css';

const Banner = () => {
	const [popularMovieData, setPopularMovieData] = useState({});

	const apiRequest = async () => {
		const popularMovieList = await api.get(requests.fetchPopularMovieList);
		const movieData = await api.get(
			`movie/${
				popularMovieList.data.results[Math.floor(Math.random() * popularMovieList.data.results.length)].id
			}`
		);
		setPopularMovieData(movieData.data);
	};

	useEffect(() => {
		apiRequest();
	}, []);

	return (
		<header
			className="banner"
			style={{
				backgroundImage: `url(https://image.tmdb.org/t/p/original/${popularMovieData.backdrop_path})`,
				backgroundPosition: 'top center',
				backgroundSize: 'cover',
			}}
		>
			<div className="banner__contents">
				<h1 className="banner__title">
					{popularMovieData.title || popularMovieData.name || popularMovieData.original_name}
				</h1>

				<div className="banner__buttons">
					<button className="banner__button play">Play</button>
					<button className="banner__button info">More Information</button>
				</div>

				<h1 className="banner__description"></h1>
			</div>
			<div className="banner--fadeBottom" />
		</header>
	);
};

export default Banner;
