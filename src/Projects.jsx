import recipescreenshot from './assets/recipe-dictionary.png';
import libraryscreenshot from './assets/Brians-library.png';
import snakescreenshot from './assets/snake-game.png';
import { FaArrowRight } from 'react-icons/fa';

import './Projects.css';

function Projects() {
	return (
		<section className='projects' id='projects'>
			<a href='https://recipe-dictionary.netlify.app/' className='project-card'>
				<img src={recipescreenshot} alt='recipe dictionary project screenshot' className='project-img' />
				<div className='project-words'>
					<h2 className='project-name'>Recipe Dictionary</h2>
					<p className='project-description'>A recipe look up project using React, and EDAMAM API.</p>
				</div>
				<div className='right-icon'>
					<FaArrowRight />
				</div>
			</a>
			<a href='https://brians-library.netlify.app/' className='project-card'>
				<img src={libraryscreenshot} alt='' className='project-img' />
				<div className='project-words'>
					<h2 className='project-name'>Brian's Library</h2>
					<p className='project-description'>A library that can add, delete, mark and view all books added by user..</p>
				</div>
				<div className='right-icon'>
					<FaArrowRight />
				</div>
			</a>
			<a href='/' className='project-card'>
				<img src={snakescreenshot} alt='' className='project-img' />
				<div className='project-words'>
					<h2 className='project-name'>Snake Game</h2>
					<p className='project-description'>A recreation of the classic snake game using JavaScript, HTML and CSS.</p>
				</div>
				<div className='right-icon'>
					<FaArrowRight />
				</div>
			</a>
			<a href='https://github.com/brianhsu305?tab=repositories' className='projects-link'>
				View other projects on GitHub
			</a>
		</section>
	);
}

export default Projects;
