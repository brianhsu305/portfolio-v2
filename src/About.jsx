import pdf from './assets/resume.pdf'
import './About.css'
function About() {
	return (
		<section className='about' id="about">
			<p>
				I am a newly graduate with Bachelor of Computer Science degree from Simon Fraser University. I always have been interested in technology since I was a child, which lead to my previous
				job experience at Best Buy and Canada Computers so I could get in touch with more trending technologies.
			</p>
			<p>What inspires me to become a software developer is problem solving. Solving a coding problem it’s like solving a puzzle, except it is with alphabets and numbers. </p>
			<p>
				Currently, I looking to get my first software developer job so I can get in touch with other coding people and see their ways of using different methods or technologies to solve
				problems.
			</p>
			<a href={pdf} className='resume'>View resume</a>
		</section>
	);
}

export default About;
