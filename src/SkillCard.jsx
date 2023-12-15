function SkillCard(prop) {
	return (
		<a href={prop.link} className='group flex flex-row gap-5 py-4 items-center group hover:bg-primary rounded'>
			<div className='transition-spacing text-3xl group-hover:pl-2 group-hover:text-black'>{prop.icon}</div>
			<p className='transition-spacing text-xl group-hover:pl-2 group-hover:text-black'>{prop.skill}</p>
		</a>
	);
}

export default SkillCard;
