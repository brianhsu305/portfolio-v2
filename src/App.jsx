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
		<div className='antialiased text-white lg:container lg:mx-auto lg:px-32 '>
			<div className='cursor' style={{ top: `${mousePos.y}px`, left: `${mousePos.x}px` }}></div>
			<div className='lg:grid lg:grid-cols-2 lg:gap-5 flex flex-col'>
				<Hero />
				<div className='flex flex-col lg:gap-40 lg:py-32'>
					<About />
					<Projects />
					<Skills />
				</div>
			</div>
		</div>
	);
}

export default App;
