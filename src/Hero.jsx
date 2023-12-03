import React, { useState, useEffect, useRef } from 'react';
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import { FaEnvelope } from 'react-icons/fa6';

function Hero() {
	return (
		<div className='lg:h-screen lg:flex lg:flex-col lg:place-content-between lg:sticky lg:self-start lg:justify-between lg:top-0 lg:py-32'>
			<div className='flex flex-col gap-10'>
				<div>
					<h1 className='text-7xl font-bold text-pink-300'>Brian Hsu</h1>
					<h2 className='text-3xl font-medium pt-2'>Software Developer</h2>
					<p className='text-xl text-gray-400'>I build websites, apps, and games.</p>
				</div>
				<nav>
					<a className='transition-spacing text-xl block hover:font-bold hover:text-black hover:bg-pink-300 hover:pl-80' href='#about'>
						<span>About</span>
					</a>

					<a className='transition-spacing text-xl block hover:font-bold hover:text-black hover:bg-pink-300 hover:pl-80' href='#projects'>
						Projects
					</a>

					<a className='transition-spacing text-xl block hover:font-bold hover:text-black hover:bg-pink-300 hover:pl-80' href='#skills'>
						Skills
					</a>
				</nav>
			</div>
			<div className='flex flex-row gap-8 text-2xl'>
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
