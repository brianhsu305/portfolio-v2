import pdf from './assets/resume.pdf';
import { FaArrowRight } from 'react-icons/fa';

function About() {
	return (
		<section className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 py-5 text-description' id='about'>
			<h1 className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 text-secondary font-bold'>
				ABOUT
			</h1>
			<p className='mb-4'>
				I am a newly graduate with <span className='font-bold text-secondary'>Bachelor of Computer Science</span> degree from <span className="text-secondary"> Simon Fraser University</span>. I always have been interested in technology
				since I was a kid, which lead to my previous job experience at Best Buy and Canada Computers so I could get in touch with more trending technologies.
			</p>
			<p className='mb-4'>
				<span className='font-bold text-secondary'>Problem solving</span> is what inspires me to become a software developer. Solving a coding problem it’s like solving a puzzle, except it is
				with alphabets and numbers.{' '}
			</p>
			<p className='mb-4'>
				Currently, I am looking to start my professional software developer career to apply my skills in real world and to make an impact. Feel free to contact me if you like my portfolio!
			</p>
			<a href={pdf} className='group flex flex-row gap-2 items-center pt-4 text-secondary'>
				<span className=' underline font-bold group-hover:text-primary'>View resume</span>
				<span className='transition-spacing invisible group-hover:visible group-hover:text-primary group-hover:pl-3'>
					<FaArrowRight />
				</span>
			</a>
		</section>
	);
}

export default About;
