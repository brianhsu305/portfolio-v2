import recipescreenshot from './assets/recipe-dictionary.png';
import libraryscreenshot from './assets/Brians-library.png';
import snakescreenshot from './assets/snake-game.png';

import ProjectCard from './ProjectCard';

function Projects() {
	return (
		<section className='flex flex-col gap-10' id='projects'>
			<ProjectCard 
				title='Recipe Dictionary' 
				description='A recipe look up project using React, and EDAMAM API.' 
				link='https://recipe-dictionary.netlify.app/' 
				screenshot={recipescreenshot} 
			/>
			<ProjectCard
				title="Brian's Library"
				description='A library that can add, delete, mark and view all books added by user.'
				link='https://brians-library.netlify.app/'
				screenshot={libraryscreenshot}
			/>
			<ProjectCard
				title='Snake Game'
				description='A recreation of the classic snake game using JavaScript, HTML and CSS.'
				link='/'
				screenshot={snakescreenshot}
			/>
			<a href='https://github.com/brianhsu305?tab=repositories' className='underline font-bold hover:text-pink-300'>
				View other projects on GitHub
			</a>
		</section>
	);
}

export default Projects;
