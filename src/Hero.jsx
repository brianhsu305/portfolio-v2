import React, { useState, useEffect, useRef } from 'react';
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import { FaEnvelope } from 'react-icons/fa6';

function Hero() {
	return (
		<div className='lg:h-screen flex flex-col place-content-between lg:sticky lg:self-start justify-between lg:top-0 py-5 lg:py-32'>
			<div>
				<div>
					<h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">Brian Hsu</h1>
					<h2 className="mt-3 text-lg font-medium tracking-tight text-secondary sm:text-xl">Software Developer</h2>
					<p className="mt-4 max-w-xs leading-normal text-gray-400">I build websites, apps, and games.</p>
				</div>
				<nav className="nav hidden lg:block">
					<a className='transition-spacing rounded text-xl block hover:font-bold hover:text-black hover:bg-pink-300 lg:hover:pl-80' href='#about'>
						About
					</a>
					<a className='transition-spacing rounded text-xl block hover:font-bold hover:text-black hover:bg-pink-300 lg:hover:pl-80' href='#projects'>
						Projects
					</a>

					<a className='transition-spacing rounded text-xl block hover:font-bold hover:text-black hover:bg-pink-300 lg:hover:pl-80' href='#skills'>
						Skills
					</a>
				</nav>
			</div>
			<div className='ml-1 mt-8 items-center text-secondary flex gap-5'>
				<a href='https://github.com/brianhsu305' className='hover:text-pink-300'>
					<SiGithub />
				</a>
				<a href='https://www.linkedin.com/in/brianhsu305/' className='hover:text-pink-300'>
					<SiLinkedin />
				</a>
				<a href='https://www.instagram.com/bhsu_fit/' className='hover:text-pink-300'>
					<SiInstagram />
				</a>
				<a href='mailto:brianhsu305@gmail.com' className='hover:text-pink-300'>
					<FaEnvelope />
				</a>
			</div>
		</div>
	);
}

export default Hero;
