import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa6';
import SkillCard from './SkillCard.jsx';

function Skills() {
	return (
		<section className='grid grid-cols-2 gap-5' id='skills'>
			<div className=''>
				<h2 className='text-2xl font-bold pb-5'>Languages</h2>
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
				<SkillCard skill='Json' link='https://www.json.org/json-en.html' icon={<SiIcons.SiJson />} />
			</div>
			<div>
				<h2 className='text-2xl font-bold pb-5'>Technologies</h2>
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
		</section>
	);
}

export default Skills;
