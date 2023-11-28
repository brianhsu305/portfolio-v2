import React, { useState, useEffect, useRef } from 'react';
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import { FaEnvelope } from 'react-icons/fa6';
import './Hero.css';

function Hero() {
	// const [scroll, SetScroll] = useState(false);
	// useEffect(() => {
	// 	window.addEventListener('scroll', () => {
	// 		console.log(document.querySelector(".nav-about"));
	// 		// SetScroll(window.scrollY > 50);
	// 		if (window.scrollY > 50) {
	// 			document.querySelector('.nav-about').className = "nav-item nav-about on-section";
	// 		}
	// 		else {
	// 			document.querySelector('.nav-about').className = "nav-item nav-about";
	// 		}
			
	// 	});
	// }, []);

	return (
		<div className='hero'>
			<div className='info'>
				<h1 className='name accent'>Brian Hsu</h1>
				<h2 className='title'>Software Developer</h2>
				<p className='intro'>I build websites, apps, and games.</p>
			</div>
			<nav>
				<ul>
					<li>
						<a className='nav-item nav-about' href='#about'>
							About
						</a>
					</li>
					<li>
						<a className='nav-item nav-projects' href='#projects'>
							Projects
						</a>
					</li>
					<li>
						<a className='nav-item nav-skills' href='#skills'>
							Skills
						</a>
					</li>
				</ul>
			</nav>
			<div className='socials'>
				<a href='https://github.com/brianhsu305'>
					<SiGithub />
				</a>
				<a href='https://www.linkedin.com/in/brianhsu305/'>
					<SiLinkedin />
				</a>
				<a href='https://www.instagram.com/bhsu_fit/'>
					<SiInstagram />
				</a>
				<a href='mailto:brianhsu305@gmail.com'>
					<FaEnvelope />
				</a>
			</div>
		</div>
	);
}

export default Hero;
