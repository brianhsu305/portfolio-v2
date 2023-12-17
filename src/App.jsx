import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import React from 'react';

function App() {
	return (
		<div className="bg-background">
		<div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans bg-background md:px-12 md:py-20 lg:px-20 lg:py-0'>
			<div className='flex flex-col lg:flex-row lg:gap-10'>
				<div className='lg:basis-1/2'>
					<Hero />
				</div>

				<div className='lg:gap-40 lg:py-32 lg:basis-1/2'>
					<About />
					<Projects />
					<Skills />
				</div>
			</div>
		</div>
		</div>
	);
}

export default App;
