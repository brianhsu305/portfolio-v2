import { FaArrowRight } from 'react-icons/fa';

function ProjectCard({ title, description, link, screenshot }) {
	return (
		<div className='flex flex-col mb-12'>
			<img src={screenshot} alt={`${title} screenshot`} width='200' height='48' className='rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 mt-3' />
			<a href={link} className='text-secondary flex flex-col order-first pt-3'>
				<h2 className='font-bold text-lg flex gap-2 items-center'>
					{title}
					<span className='inline-block'>
						<FaArrowRight />
					</span>
				</h2>
				<p className='text-description'>{description}</p>
			</a>
		</div>
	);
}

export default ProjectCard;
