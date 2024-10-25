import React, { useState, useEffect } from 'react';
import './Nav.css';
function Nav() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scroll > 50) {
				setShow(true);
			} else {
				setShow(false);
			}
		});
		return () => window.removeEventListener('scroll', () => {});
	});

	return (
		<nav className={`nav ${show && 'nav_black'}`}>
			<img
				alt="Netflix logo"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/300px-Netflix_2015_logo.svg.png"
				className="nav_logo"
				onClick={() => window.location.reload()}
			/>
			<img
				alt="User logged"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/225px-Wikipedia-logo-v2.svg.png"
				className="nav_avatar"
			/>
		</nav>
	);
}

export default Nav;
