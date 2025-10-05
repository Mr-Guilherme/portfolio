import './home.style.css';

import {
	Skills,
	SocialNav,
	Terminal,
	TitleJob,
	TitleName,
} from '../components';

export function Home() {
	return (
		<main className="container">
			<section className="hero">
				<div className="hero-content">
					<header>
						<TitleName />
						<TitleJob />
						<p className="subtitle">
							Transforming ideas into digital reality through innovative
							solutions
						</p>
					</header>
					<Skills />
					<Terminal />
					<SocialNav />
				</div>
			</section>
		</main>
	);
}
