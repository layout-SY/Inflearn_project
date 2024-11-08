import React from 'react';
import { CiLogin } from 'react-icons/ci';
import './header.css';
import app from '../../api/firebase';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
	const navigate = useNavigate();
	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();

	const handleLogin = () => {
		signInWithPopup(auth, provider).then((userCredential) => {
			console.log(userCredential);
			if (userCredential) {
				navigate('/main');
			}
		});
	};

	return (
		<nav className={`nav`}>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Disney%2B_2024.svg/220px-Disney%2B_2024.svg.png"
				alt="DisneyPlus logo"
				className="header_logo"
				onClick={() => window.location.reload()}
			/>

			{/* <input type="text" placeholder="검색어를 입력하세요" className="search_input" /> */}

			<CiLogin className="login_logo" onClick={handleLogin} />
		</nav>
	);
};

export default Nav;
