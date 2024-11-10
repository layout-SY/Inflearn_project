import React, { useState } from 'react';
import { CiLogin } from 'react-icons/ci';
import './header.css';
import app from '../../api/firebase';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
	const [User, setUser] = useState(null);

	const navigate = useNavigate();
	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();

	const googleLogin = async () => {
		const result = await signInWithPopup(auth, provider);
		const userCredentials = result.user;
		setUser(userCredentials);
		navigate('/main');
	};

	const handleLogin = () => {
		googleLogin();
	};

	const userDataList = () => {
		console.log(User);
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

			{User ? (
				<img src={User.photoURL} alt="user image" className="user_image" onClick={userDataList} />
			) : (
				<CiLogin className="login_logo" onClick={handleLogin} />
			)}
		</nav>
	);
};

export default Nav;
