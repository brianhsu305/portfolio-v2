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
	const [hoveredProject, setHoveredProject] = useState(null);

	const handleHover = (index, isHovered) => {
		if (isHovered) {
			setHoveredProject(index);
		} else {
			setHoveredProject(null);
		}
	};


	return (
		<section className='flex flex-col gap-10' id='projects'>
			<div className='project-container'>
				{projectData.map((project, index) => (
					<ProjectCard
						key={index}
						title={project.title}
						description={project.description}
						link={project.link}
						screenshot={project.screenshot}
						isHovered={index === hoveredProject}
						handleHover={(isHovered) => handleHover(index, isHovered)}
					/>
				))}
			</div>
			<a href='https://github.com/brianhsu305?tab=repositories' className='group flex flex-row gap-2 items-center'>
				<span className=' underline font-bold group-hover:text-pink-300'>View other projects on GitHub</span>
				<span className='transition-spacing invisible group-hover:visible group-hover:text-pink-300 group-hover:pl-3'>
					<FaArrowRight />
				</span>
			</a>
		</section>
	);
};

export default Projects;
