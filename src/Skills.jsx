import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa6';
import SkillCard from './SkillCard.jsx';

function Skills() {
	return (
		<section className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 py-5' id='skills'>
			<h1 className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 text-secondary font-bold'>
				SKILLS
			</h1>
			<div className="grid grid-cols-2 text-secondary">
			<div>
				<h2 className='sm:text-xl md:text-2xl font-bold pb-5'>Languages</h2>
				<SkillCard skill='JavaSript' link='https://www.javascript.com/' icon={<SiIcons.SiJavascript />} />
				<SkillCard skill='Python' link='https://www.python.org/' icon={<SiIcons.SiPython />} />
				<SkillCard skill='C' link='https://www.cprogramming.com/' icon={<SiIcons.SiC />} />
				<SkillCard skill='C++' link='https://cplusplus.com/doc/tutorial/' icon={<SiIcons.SiCplusplus />} />
				<SkillCard skill='Java' link='https://dev.java/' icon={<FaIcons.FaJava />} />
				<SkillCard skill='Scala' link='https://www.scala-lang.org/' icon={<SiIcons.SiScala />} />
				<SkillCard skill='MySQL' link='https://www.mysql.com/' icon={<SiIcons.SiMysql />} />
				<SkillCard skill='HTML' link='https://developer.mozilla.org/en-US/docs/Web/HTML' icon={<SiIcons.SiHtml5 />} />
				<SkillCard skill='CSS' link='https://developer.mozilla.org/en-US/docs/Web/CSS' icon={<SiIcons.SiCss3 />} />
				<SkillCard skill='SASS' link='https://sass-lang.com/' icon={<SiIcons.SiSass />} />
				<SkillCard skill='Tailwind' link='https://tailwindcss.com/' icon={<SiIcons.SiTailwindcss />} />
				<SkillCard skill='Json' link='https://www.json.org/json-en.html' icon={<SiIcons.SiJson />} />
			</div>
			<div>
				<h2 className='sm:text-xl md:text-2xl font-bold pb-5'>Technologies</h2>
				<SkillCard skill='Node.js' link='https://nodejs.org/en/' icon={<SiIcons.SiNodedotjs />} />
				<SkillCard skill='React' link='https://react.dev/' icon={<SiIcons.SiReact />} />
				<SkillCard skill='Bootstrap' link='https://getbootstrap.com/' icon={<SiIcons.SiBootstrap />} />
				<SkillCard skill='Netlify' link='https://app.netlify.com/' icon={<SiIcons.SiNetlify />} />
				<SkillCard skill='Figma' link='https://www.figma.com/' icon={<SiIcons.SiFigma />} />
				<SkillCard skill='Adafruit Ardruino Board' link='https://www.adafruit.com/' icon={<SiIcons.SiAdafruit />} />
				<SkillCard skill='Visual Studio Code' link='https://code.visualstudio.com/' icon={<SiIcons.SiVisualstudiocode />} />
				<SkillCard skill='Ubuntu' link='https://ubuntu.com/' icon={<SiIcons.SiUbuntu />} />
				<SkillCard skill='Android Studio' link='https://developer.android.com/' icon={<FaIcons.FaAndroid />} />
				<SkillCard skill='git' link='https://git-scm.com/' icon={<SiIcons.SiGit />} />
				<SkillCard skill='GitHub' link='https://github.com/' icon={<SiIcons.SiGithub />} />
				<SkillCard skill='GitLab' link='https://about.gitlab.com/' icon={<FaIcons.FaGitlab />} />
			</div>
			</div>
		</section>
	);
}

export default Skills;
