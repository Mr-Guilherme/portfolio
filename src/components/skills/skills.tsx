import './skills.style.css';
import type { IButtonSkill } from './skills.type';

export function Skills() {
	const skills = [
		'TypeScript',
		'JavaScript',
		'Node',
		'React',
		'PostgreSQL',
		'Docker',
		'Infra as Code',
		'CI/CD',
		'AI',
		'AWS',
	];

	return (
		<section className="skills" aria-label="Technologies and skills">
			<h2 className="visually-hidden">Core Technologies</h2>
			<div className="skills-list">
				{skills.map((skill) => (
					<ButtonSkill key={skill} skill={skill} />
				))}
			</div>
		</section>
	);
}

export function ButtonSkill({ skill }: IButtonSkill) {
	return (
		<button className="skill" type="button" tabIndex={0}>
			{skill}
		</button>
	);
}
