import recipescreenshot from './assets/recipe.png';
import libraryscreenshot from './assets/library.png';
import snakescreenshot from './assets/snake.png';
import React, { useState } from 'react';

import ProjectCard from './ProjectCard';
import { FaArrowRight } from 'react-icons/fa';

const projectData = [
	{ title: 'Recipe Dictionary', description: 'A recipe look up project using React, and EDAMAM API.', link: 'https://recipe-dictionary.netlify.app/', screenshot: recipescreenshot },
	{ title: "Brian's Library", description: 'A library that can add, delete, mark and view all books added by user.', link: 'https://brians-library.netlify.app/', screenshot: libraryscreenshot },
	{ title: 'Snake Game', description: 'A recreation of the classic snake game using JavaScript, HTML and CSS.', link: 'https://brianhsu305.github.io/snake_game/', screenshot: snakescreenshot },
];

const Projects = () => {


	return (
		<section className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 py-5' id='projects'>
			<h1 className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 text-secondary font-bold'>
				PROJECTS
			</h1>
			<div className='group/list'>
				{projectData.map((project, index) => (
					<ProjectCard
						key={index}
						title={project.title}
						description={project.description}
						link={project.link}
						screenshot={project.screenshot}
					/>
				))}
			</div>
			<a href='https://github.com/brianhsu305?tab=repositories' className='group flex flex-row gap-2 items-center text-description'>
				<span className=' underline font-bold group-hover:text-primary'>View other projects on GitHub</span>
				<span className='transition-spacing invisible group-hover:visible group-hover:text-primary group-hover:pl-3'>
					<FaArrowRight />
				</span>
			</a>
		</section>
	);
};

export default Projects;
