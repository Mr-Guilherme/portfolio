import { useEffect, useState } from 'react';
import './terminal.style.css';

export function Terminal() {
	const [availabilityText, setAvailabilityText] = useState<string>('');
	const [showAvailabilityCursor, setShowAvailabilityCursor] =
		useState<boolean>(true);

	const availabilityFullText: string =
		'Ready to elevate your next project with cutting-edge solutions';

	useEffect(() => {
		let currentIndex = 0;
		let timeoutId: ReturnType<typeof setTimeout>;
		let cursorInterval: ReturnType<typeof setInterval>;

		const typingSpeed = (): number => Math.random() * 50 + 30;

		const typeAvailabilityText = (): void => {
			if (currentIndex < availabilityFullText.length) {
				setAvailabilityText(availabilityFullText.slice(0, currentIndex + 1));
				currentIndex++;
				timeoutId = setTimeout(typeAvailabilityText, typingSpeed());
			}
		};

		timeoutId = setTimeout(typeAvailabilityText, 1000);

		cursorInterval = setInterval(() => {
			setShowAvailabilityCursor((prev) => !prev);
		}, 500);

		return () => {
			clearTimeout(timeoutId);
			clearInterval(cursorInterval);
		};
	}, []);

	return (
		<section
			className="availability terminal-style"
			aria-label="Project availability status"
		>
			<h3 className="visually-hidden">Project Availability</h3>
			<span className="terminal-prompt">/home/gui &gt; </span>
			<span className="terminal-text">{availabilityText}</span>
			{showAvailabilityCursor && <span className="terminal-cursor">|</span>}
		</section>
	);
}
