import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';

import React, { useEffect, useState } from 'react';

function App() {
	const [mousePos, setMousePos] = useState({});
	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePos({ x: e.pageX, y: e.pageY });
		};
		window.addEventListener('mousemove', handleMouseMove);
		return () => {
			window.removeEventListener('mouseMove', handleMouseMove);
		};
	}, []);

	return (
		<div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
			<div className='cursor' style={{ top: `${mousePos.y}px`, left: `${mousePos.x}px` }}></div>
			<div className='flex flex-col md:flex-row'>
				<Hero />
				<div className='lg:gap-40 lg:py-32'>
					<About />
					<Projects />
					<Skills />
				</div>
			</div>
		</div>
	);
}

export default App;
