import pdf from './assets/resume.pdf';
import { FaArrowRight } from 'react-icons/fa';

function About() {
	return (
		<section className='leading-relaxed' id='about'>
			<p className=''>
				I am a newly graduate with <span className="font-bold text-pink-300">Bachelor of Computer Science degree from Simon Fraser University</span>. I always have been interested in technology since I was a kid, which lead to my previous
				job experience at Best Buy and Canada Computers so I could get in touch with more trending technologies.
			</p>
			<br />
			<p><span className="font-bold text-pink-300">Problem solving</span> is what inspires me to become a software developer. Solving a coding problem it’s like solving a puzzle, except it is with alphabets and numbers. </p>
			<br />
			<p>
				Currently, I am looking to start my professional software developer career to apply my skills in real world and to make an impact. Feel free to contact me if you like my portfolio! 
			</p>
			<a href={pdf} className='group flex flex-row gap-2 items-center pt-4'>
				<span className=' underline font-bold group-hover:text-pink-300 '>View resume</span>
				<span className='transition-spacing invisible group-hover:visible group-hover:text-pink-300 group-hover:pl-3'><FaArrowRight /></span>
			</a>
		</section>
	);
}

export default About;
