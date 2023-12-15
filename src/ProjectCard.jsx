import { FaArrowRight } from 'react-icons/fa';

function ProjectCard({ title, description, link, screenshot}) {
	return (
		<div className='flex flex-col'>
			{/* <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div> */}
			<a
				href={link}
				className='text-secondary mb-6 flex flex-col'
			>
				<img src={screenshot} alt={`${title} screenshot`} width="200" height="48" className='rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 mt-3' />
				<div className='sm:order-first sm:pt-3'>
					<h2 className='font-bold text-xl'>{title}</h2>
					<p className='text-description'>{description}</p>
				</div>
				<div className='hidden'>
					<FaArrowRight />
				</div>
			</a>

		</div>
	);
}

export default ProjectCard;
