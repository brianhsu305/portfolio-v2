import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import './Content.css'

function Content() {
	return (
		<div className='content'>
			<About />
			<Projects />
			<Skills />
		</div>
	);
}

export default Content;
