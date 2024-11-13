import React, { useEffect, useState } from 'react';
import api from '../../api/axios';
import requests from '../../api/requests';
import Banner from '../../components/Banner/Banner';
import FamousTheme from '../../components/FamousTheme/FamousTheme';
import Row from '../../components/Row/Row';

const MainPage = () => {
	return (
		<div>
			<Banner />

			<FamousTheme />
			<Row title="Now Playing" id="NP" fetchUrl={requests.fetchNowPlaying} />
			<Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />

			<Row title="Action Movies" id="AM" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" id="CM" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" id="HM" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" id="RM" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Document Movies" id="DM" fetchUrl={requests.fetchDocumentMovies} />
		</div>
	);
};

export default MainPage;
