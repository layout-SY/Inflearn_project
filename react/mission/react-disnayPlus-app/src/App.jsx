import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import MainPage from './pages/MainPage/MainPage';
import DetailPage from './pages/DetailPage/DetailPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import { Outlet } from 'react-router-dom';
import './App.css';
import SearchPage from './pages/SearchPage/SearchPage';

function Layout() {
	return (
		<div>
			<Header />

			<Outlet />

			<Footer />
		</div>
	);
}

function App() {
	const [isLogin, setIsLogin] = useState(false);

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="main" element={<MainPage />} />
				<Route path="search" element={<SearchPage />} />
				<Route path="main/:movieId" element={<DetailPage />} />
				<Route path="profile" element={<ProfilePage />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Route>
		</Routes>
	);
}

export default App;
