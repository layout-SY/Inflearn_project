import React, { useEffect, useState } from 'react';
import api from '../../api/axios';
import requests from '../../api/requests';
import Banner from '../../components/Banner/Banner';
import Company from '../../components/Company/Company';

const MainPage = () => {
	return (
		<div>
			<Banner />

			<Company />
		</div>
	);
};

export default MainPage;
