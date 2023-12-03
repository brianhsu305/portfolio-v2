import { FaArrowRight } from 'react-icons/fa';

function ProjectCard(prop) {
	return (
		<a href={prop.link} className='group flex flex-row gap-10 items-center p-3 rounded-md hover:bg-pink-300'>
			<img src={prop.screenshot} alt={`${prop.title} project screenshot`} className=' spect-video w-40 rounded-md' />
			<div className=''>
				<h2 className='font-bold text-xl group-hover:font-extrabold group-hover:text-slate-800'>{prop.title}</h2>
				<p className='group-hover:text-slate-800'>{prop.description}</p>
			</div>
			<div className='hidden'>
				<FaArrowRight />
			</div>
		</a>
	);
}

export default ProjectCard;
