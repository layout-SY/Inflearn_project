import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import MainPage from './pages/MainPage/MainPage';
import DetailPage from './pages/DetailPage/DetailPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import './App.css';

function Layout({ children }) {
	return (
		<div>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}

function App() {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/main" element={<MainPage />} />
					<Route path="/main/:movieId" element={<DetailPage />} />
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</Layout>
		</Router>
	);
}

export default App;
