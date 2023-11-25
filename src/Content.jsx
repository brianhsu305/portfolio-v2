import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa6';

function Content() {
	return (
		<div className='right'>
			<section className='about'>
				<p>
					I am a newly graduate with Bachelor of Computer Science degree from Simon Fraser University. I always have been interested in technology since I was a child, which lead to my
					previous job experience at Best Buy and Canada Computers so I could get in touch with more trending technologies.
				</p>
				<p>What inspires me to become a software developer is problem solving. Solving a coding problem it’s like solving a puzzle, except it is with alphabets and numbers. </p>
				<p>
					Currently, I looking to get my first software developer job so I can get in touch with other coding people and see their ways of using different methods or technologies to solve
					problems.
				</p>
				<a href='/'>View resume</a>
			</section>
			<section className='projects'>
				<div className='project-card'>
					<img src='' alt='' className='project-img' />
					<div className='project-words'>
						<h2 className='project-name'>Recipe Dictionary</h2>
						<p className='project-description'>A recipe look up project using React, and EDAMAM API.</p>
					</div>
				</div>
				<div className='project-card'>
					<img src='' alt='' className='project-img' />
					<div className='project-words'>
						<h2 className='project-name'>Brian's Library</h2>
						<p className='project-description'>A library that can add, delete, mark and view all books added by user..</p>
					</div>
				</div>
				<div className='project-card'>
					<img src='' alt='' className='project-img' />
					<div className='project-words'>
						<h2 className='project-name'>Snake Game</h2>
						<p className='project-description'>A recreation of the classic snake game using JavaScript, HTML and CSS.</p>
					</div>
				</div>
				<a href='https://github.com/brianhsu305?tab=repositories'>View other projects on GitHub</a>
			</section>
			<section className='skills'>
				<SiIcons.SiJavascript />
				<SiIcons.SiGit />
				<SiIcons.SiVisualstudiocode />
				<SiIcons.SiHtml5 />
				<SiIcons.SiCss3 />
				<SiIcons.SiSass />
				<SiIcons.SiPython />
				<SiIcons.SiC />
				<SiIcons.SiCplusplus />
				<SiIcons.SiNodedotjs />
				<SiIcons.SiMysql />
				<SiIcons.SiReact />
				<SiIcons.SiFigma />
				<SiIcons.SiBootstrap />
				<SiIcons.SiGithub />
				<SiIcons.SiNetlify />
				<SiIcons.SiJson />
				<SiIcons.SiScala />
				<FaIcons.FaJava />
			</section>
		</div>
	);
}

export default Content;
