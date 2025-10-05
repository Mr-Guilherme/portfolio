import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './main.css';

import { initAnalytics } from './helpers/analytics.ts';
import { Home } from './pages/home.tsx';

initAnalytics();

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
	<StrictMode>
		<Home />
	</StrictMode>,
);
