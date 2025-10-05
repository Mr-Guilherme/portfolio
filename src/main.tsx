import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initAnalytics } from './analytics.ts';
import App from './app.tsx';

initAnalytics();

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
