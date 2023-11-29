import React, { useState, useEffect, useRef } from 'react';
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import { FaEnvelope } from 'react-icons/fa6';

function Hero() {
	return (
		<div className='flex flex-col gap-10 sticky top-32 self-start col-span-2'>
			<div>
				<h1 className='text-5xl font-bold text-pink-300'>Brian Hsu</h1>
				<h2 className='text-2xl font-medium'>Software Developer</h2>
				<p className='text-xl text-gray-400'>I build websites, apps, and games.</p>
			</div>
			<nav>
				<a className='text-xl block hover:font-bold hover:text-black hover:bg-pink-300 hover:pl-40' href='#about'>
					About
				</a>

				<a className='text-xl block hover:font-bold hover:text-black hover:bg-pink-300 hover:pl-40' href='#projects'>
					Projects
				</a>

				<a className='text-xl block hover:font-bold hover:text-black hover:bg-pink-300 hover:pl-40' href='#skills'>
					Skills
				</a>
			</nav>
			<div className='flex flex-row gap-3 text-xl'>
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
