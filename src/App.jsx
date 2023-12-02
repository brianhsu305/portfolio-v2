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
		<div className='container mx-auto px-32 antialiased text-white'>
			<div className='cursor' style={{ top: `${mousePos.y}px`, left: `${mousePos.x}px` }}></div>
			<div className='grid grid-cols-2 gap-10 '>
				<Hero />
				<div className='flex flex-col gap-40 py-32'>
					<About />
					<Projects />
					<Skills />
				</div>
			</div>
		</div>
	);
}

export default App;
