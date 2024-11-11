import React from 'react';

const footer = () => {
	return (
		<footer className="footer">
			<div className="footer__company-info">
				<p>© 2024 디즈니플러스. All rights reserved.</p>
				<p>이용 약관 | 개인정보 처리 방침</p>
			</div>
			<div className="footer__social-links">
				<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
					페이스북
				</a>

				<a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
					트위터
				</a>
				<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
					인스타그램
				</a>
				<a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
					유튜브
				</a>
			</div>
		</footer>
	);
};

export default footer;
