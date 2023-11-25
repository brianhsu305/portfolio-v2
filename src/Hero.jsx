import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import { FaEnvelope } from 'react-icons/fa6';
import './Hero.css'

function Hero() {
	return (
		<div className='hero'>
			<div className='info'>
				<h1 className='name green'>Brian Hsu</h1>
				<h3 className='title'>Aspired Software Developer</h3>
				<p className='intro'>I build websites, apps, and games.</p>
			</div>
			<nav>
				<ul>
					<li className='nav-item'>About</li>
					<li className='nav-item'>Projects</li>
					<li className='nav-item'>Skills</li>
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
				<a href='/'>
					<FaEnvelope />
				</a>
			</div>
		</div>
	);
}

export default Hero;
