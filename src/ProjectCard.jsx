import { FaArrowRight } from 'react-icons/fa';

function ProjectCard({ title, description, link, screenshot }) {
	return (
		<div className='flex flex-col mb-12 md:flex-row md:gap-10 lg:gap-4'>
			<img src={screenshot} 
			alt={`${title} screenshot`} width='200' height='48' className='rounded border-2 h-full lg:w-40 aspect-video border-background/10 transition inline-block mt-3' />
			<a href={link} className='text-secondary flex flex-col order-first md:order-last pt-3 group '>
				<h2 className='font-bold flex gap-2 items-center group-hover:text-primary'>
					{title}
					<span className='inline-block group-hover:text-primary'>
						<FaArrowRight />
					</span>
				</h2>
				<p className='text-description md:mt-2 group-hover:text-primary'>{description}</p>
			</a>
		</div>
	);
}

export default ProjectCard;
