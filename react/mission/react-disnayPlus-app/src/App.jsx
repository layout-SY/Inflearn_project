import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/footer';
import { MainPage } from './pages/MainPage/MainPage';
import { DetailPage } from './pages/DetailPage/DetailPage';

function App() {
	const Layout = () => {
		return (
			<div>
				<Nav />

				<Outlet />

				<Footer />
			</div>
		);
	};

	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<MainPage />} />
					<Route path=":moveId" element={<DetailPage />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
