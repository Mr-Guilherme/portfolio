import type { IWindow } from './analytics.type';

export function initAnalytics() {
	if (import.meta.env.VITE_ENV === 'prd') {
		const gtagId = import.meta.env.VITE_GA_ID;
		const gtagScript = document.createElement('script');
		gtagScript.async = true;
		gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`;
		document.head.appendChild(gtagScript);

		(window as IWindow).dataLayer = (window as IWindow).dataLayer || [];
		function gtag(...args: unknown[]) {
			(window as IWindow).dataLayer.push(args);
		}
		(window as IWindow).gtag = gtag;
		(window as IWindow).gtag('js', new Date());
		(window as IWindow).gtag('config', gtagId, { anonymize_ip: true });
	}
}
