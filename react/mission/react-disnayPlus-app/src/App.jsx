import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import DetailPage from './pages/DetailPage/DetailPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
	const Layout = () => {
		return (
			<div>
				<Header />

				<Outlet />

				<Footer />
			</div>
		);
	};

	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="main" element={<MainPage />} />
					<Route path="main/:moveId" element={<DetailPage />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
