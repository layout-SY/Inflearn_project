import React, { useEffect, useState } from 'react';
import api from '../../api/axios';
import requests from '../../api/requests';
import Banner from '../../components/Banner/Banner';
import FamousTheme from '../../components/FamousTheme/FamousTheme';

const MainPage = () => {
	return (
		<div>
			<Banner />

			<FamousTheme />
		</div>
	);
};

export default MainPage;
