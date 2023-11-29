function SkillCard(prop) {
	return (
		<a href={prop.link} className='flex flex-row gap-5 py-4 items-center group hover:bg-pink-200'>
			<div className='text-3xl'>{prop.icon}</div>
			<p className='text-xl'>{prop.skill}</p>
		</a>
	);
}

export default SkillCard;
