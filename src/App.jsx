import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';

function App() {
	return (
		<div className='container mx-auto grid grid-cols-5 gap-10 p-32'>
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