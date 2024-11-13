import React, { useEffect, useState } from 'react';
import api from '../../api/axios';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './Row.css';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import MovieCard from '../MovieCard/MovieCard';

const Row = ({ title, fetchUrl, id }) => {
	const [movieData, setMovieData] = useState([]);
	const [isMovieCardOpened, setIsMovieCardOpened] = useState(false);
	const [selectedMovie, setSelectedMovie] = useState([]);

	const apiRequest = async () => {
		const results = await api.get(fetchUrl);
		setMovieData(results.data.results);
	};

	const handleClick = (movie) => {
		setIsMovieCardOpened(true);
		setSelectedMovie(movie);
	};

	useEffect(() => {
		apiRequest();
	}, []);

	return (
		<section className="row">
			<h2>{title}</h2>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				loop={true}
				breakpoints={{
					1378: {
						slidesPerView: 6,
						slidesPerGroup: 6,
					},
					998: {
						slidesPerView: 5,
						slidesPerGroup: 5,
					},
					625: {
						slidesPerView: 4,
						slidesPerGroup: 4,
					},
					0: {
						slidesPerView: 3,
						slidesPerGroup: 3,
					},
				}}
				navigation
				pagination={{ clickable: true }}
			>
				<div id={id} className="row__posters">
					{movieData.map((movie) => (
						<SwiperSlide>
							<img
								key={movie.id}
								src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
								className={`row__poster`}
								alt={movie.title}
								style={{ padding: '25px 0' }}
								onClick={() => handleClick(movie)}
							/>
						</SwiperSlide>
					))}
				</div>
			</Swiper>

			{isMovieCardOpened && <MovieCard {...selectedMovie} setIsMovieCardOpened={setIsMovieCardOpened} />}
		</section>
	);
};

export default Row;
