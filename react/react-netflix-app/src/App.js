import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Outlet, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';

const Layout = () => {
	return (
		<div>
			<Nav />

			<Outlet />

			<Footer />
		</div>
	);
};

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<MainPage />} />
					<Route path="movieId" element={<SearchPage />} />
					<Route path="search" element={<DetailPage />} />
				</Route>
			</Routes>
		</div>
	);
}
export default App;
