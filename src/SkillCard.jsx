import React, {useState} from 'react';

function SkillCard(prop) {
	const [active, setActive] = useState(false);
	const handleMouseOver = () => {
		setActive(true);
	}
	const handleMouseOut = () => {
		setActive(false);
	}

	return (
		<a href={prop.link} className='skill-card'>
			<div className="icon">{prop.icon}</div>
			<p className='skill-name'>{prop.skill}</p>
		</a>
	);
}

export default SkillCard;
