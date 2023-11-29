import pdf from './assets/resume.pdf';
function About() {
	return (
		<section className='leading-relaxed' id='about'>
			<p className=''>
				I am a newly graduate with Bachelor of Computer Science degree from Simon Fraser University. I always have been interested in technology since I was a child, which lead to my previous
				job experience at Best Buy and Canada Computers so I could get in touch with more trending technologies.
			</p>
			<br />
			<p>What inspires me to become a software developer is problem solving. Solving a coding problem it’s like solving a puzzle, except it is with alphabets and numbers. </p>
			<br />
			<p>
				Currently, I looking to get my first software developer job so I can get in touch with other coding people and see their ways of using different methods or technologies to solve
				problems.
			</p>
			<a href={pdf} className='underline font-bold hover:text-pink-300'>
				View resume
			</a>
		</section>
	);
}

export default About;
