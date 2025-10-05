import { useEffect } from 'react';
import type { IPixelNumberParams } from './pixel-number.type';
import './pixel-number.style.css';

export function PixelArtNumber({
	value,
	x,
	y,
	onAnimationEnd,
}: IPixelNumberParams) {
	const pixelPatterns = {
		'0': [
			[1, 1, 1],
			[1, 0, 1],
			[1, 0, 1],
			[1, 0, 1],
			[1, 1, 1],
		],
		'1': [
			[0, 1, 0],
			[1, 1, 0],
			[0, 1, 0],
			[0, 1, 0],
			[1, 1, 1],
		],
	};

	const pattern = pixelPatterns[value];
	const pixelSize = 6;

	useEffect(() => {
		const timer = setTimeout(onAnimationEnd, 2000);
		return () => clearTimeout(timer);
	}, [onAnimationEnd]);

	return (
		<div
			style={{
				position: 'fixed',
				left: x - 9,
				top: y - 15,
				pointerEvents: 'none',
				zIndex: 1000,
				animation: 'pixelFade 2s ease-out forwards',
			}}
		>
			<svg
				width="30"
				height="30"
				viewBox="0 0 30 30"
				role="graphics-symbol img"
			>
				{pattern.map((row, rowIndex) =>
					row.map(
						(pixel, colIndex) =>
							pixel && (
								<rect
									key={`${crypto.getRandomValues(new Uint32Array(1))}`}
									x={colIndex * pixelSize}
									y={rowIndex * pixelSize}
									width={pixelSize}
									height={pixelSize}
									fill="#1d4ed8"
								/>
							),
					),
				)}
			</svg>
		</div>
	);
}
