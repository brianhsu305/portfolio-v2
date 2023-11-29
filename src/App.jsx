import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';

function App() {
	return (
		<div className='container mx-auto grid grid-cols-2 gap-10 p-32'>
			<Hero />
			<div className='flex flex-col gap-10'>
				<About />
				<Projects />
				<Skills />
			</div>
		</div>
	);
}

export default App;