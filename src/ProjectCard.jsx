import { FaArrowRight } from 'react-icons/fa';

function ProjectCard({title, description, link, screenshot, isHovered, handleHover}) {
	return (
		<a href={link} className={`project-card cgroup flex flex-row gap-10 items-center p-3 rounded-md ${isHovered ? 'hovered':''}`} 
		onMouseEnter={() => handleHover(true)} 
		onMouseLeave={() => handleHover(false)}
		>
			<img src={screenshot} alt={`${title} screenshot`} className='aspect-video w-40 rounded-md' />
			<div className=''>
				<h2 className='font-bold text-xl'>{title}</h2>
				<p className=''>{description}</p>
			</div>
			<div className='hidden'>
				<FaArrowRight />
			</div>
		</a>
	);
}

export default ProjectCard;
