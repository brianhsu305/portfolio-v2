import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';

function App() {
	const root = document.querySelector(':root');
	let mouseX, mouseY;
	root.addEventListener('mousemove', (e) => {
		const { x, y } = root.getBoundingClientRect();
		mouseX = e.clientX - parseInt(x);
		mouseY = e.clientY - parseInt(y);
		root.style.setProperty('--x', e.clientX - parseInt(x));
		root.style.setProperty('--y', e.clientY - parseInt(y));
	});

	return (
		<div
			className=' antialiased text-white container mx-auto grid grid-cols-2 gap-10 scroll-smooth px-32'>
			<Hero />
			<div className='flex flex-col gap-10 py-32'>
				<About />
				<Projects />
				<Skills />
			</div>
		</div>
	);
}

export default App;
