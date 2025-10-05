export type IWindow = Window &
	typeof globalThis & {
		dataLayer: unknown[];
		gtag: (...args: unknown[]) => void;
	};
