import { useEffect, useState } from 'react';
import './title-job.style.css';

export function TitleJob() {
	const titles: string[] = ['Full Stack', 'SR Backend', 'SR Software'];
	const [animationKey, setAnimationKey] = useState<number>(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setAnimationKey((prev) => prev + 1);
		}, 6000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="title-container">
			<div className="title-carousel">
				<div className="title-scroll" key={animationKey}>
					{titles.concat(titles).map((title) => (
						<span
							key={`${title}-${crypto.getRandomValues(new Uint32Array(1))}`}
							className="title-part"
						>
							{title}
						</span>
					))}
				</div>
			</div>
			<span className="title-fixed">Engineer</span>
		</div>
	);
}
