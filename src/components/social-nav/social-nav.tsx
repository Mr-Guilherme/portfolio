import './social-nav.style.css';
import downloadCV from '/CV.pdf';
import EmailIcon from '../../assets/email.svg?react';
import GitHubIcon from '../../assets/github.svg?react';
import LinkedInIcon from '../../assets/linkedin.svg?react';
import CVIcon from '../../assets/cv.svg?react';

import type { SocialLinkParams } from './social-nav.type';

export function SocialNav() {
	const handleDownloadCV = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		window.open(downloadCV, '_blank');
	};

	return (
		<nav className="contact-icons" aria-label="Contact links and social media">
			<h3 className="visually-hidden">Contact and Social Media</h3>
			<SocialLink
				href="https://www.linkedin.com/in/guilherme-m-rodrigues/"
				target="_blank"
				rel="noopener noreferrer"
				className="contact-icon"
				ariaLabel="Guilherme Rodrigues LinkedIn profile"
				title="LinkedIn"
				icon={<LinkedInIcon aria-hidden="true" />}
			/>

			<SocialLink
				href="https://github.com/mr-guilherme"
				target="_blank"
				rel="noopener noreferrer"
				className="contact-icon"
				ariaLabel="Guilherme Rodrigues GitHub repositories"
				title="GitHub"
				icon={<GitHubIcon aria-hidden="true" />}
			/>

			<SocialLink
				href="mailto:guilherme.m.rods@gmail.com"
				className="contact-icon"
				ariaLabel="Send email to guilherme.m.rods@gmail.com"
				title="Email"
				icon={<EmailIcon aria-hidden="true" />}
			/>

			<button
				type="button"
				onClick={handleDownloadCV}
				className="contact-icon download-cv"
				aria-label="Download resume in PDF format"
				title="Download CV"
			>
				<CVIcon aria-hidden="true" />
			</button>
		</nav>
	);
}

function SocialLink({
	href,
	className,
	ariaLabel,
	title,
	icon,
	rel,
	target,
}: SocialLinkParams) {
	return (
		<a
			href={href}
			className={className}
			aria-label={ariaLabel}
			title={title}
			rel={rel}
			target={target}
		>
			{icon}
		</a>
	);
}
