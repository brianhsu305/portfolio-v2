import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';

function App() {
	const root = document.querySelector(':root');
	root.addEventListener('mousemove', (e) => {
		const { x, y } = root.getBoundingClientRect();
		console.log(e);
		console.log(`left edge: ${parseInt(x)} top edge: ${parseInt(y)}`);
		root.style.setProperty('--x', e.clientX - parseInt(x));
		root.style.setProperty('--y', e.clientY - parseInt(y));
	});

	return (
		<div className='shiny-pointer container mx-auto grid grid-cols-5 gap-10 p-32'>
			<Hero />
			<div className='flex flex-col gap-10 col-span-3 col-start-3'>
				<About />
				<Projects />
				<Skills />
			</div>
		</div>
	);
}

export default App;
