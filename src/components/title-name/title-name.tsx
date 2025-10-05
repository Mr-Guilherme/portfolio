import { useState } from 'react';
import './title-name.style.css';
import { PixelArtNumber } from '../pixel-number/pixel-number';
import type { PixelNumber } from './title-name.type';

export function TitleName() {
	const [pixelNumbers, setPixelNumbers] = useState<PixelNumber[]>([]);
	const [nextId, setNextId] = useState<number>(0);

	const handleNameClick = (
		event?: React.MouseEvent<HTMLHeadingElement>,
	): void => {
		if (!event) return;

		const randomValue: '0' | '1' = Math.random() < 0.5 ? '0' : '1';
		const newPixelNumber: PixelNumber = {
			id: nextId,
			value: randomValue,
			x: event.clientX + Math.random() * 20 - 10,
			y: event.clientY + Math.random() * 20 - 10,
		};

		setPixelNumbers((prev) => [...prev, newPixelNumber]);
		setNextId((prev) => prev + 1);
	};

	const removePixelNumber = (id: number): void => {
		setPixelNumbers((prev) => prev.filter((pixel) => pixel.id !== id));
	};

	return (
		<>
			<h1
				className="name"
				onClick={handleNameClick}
				onKeyDown={() => handleNameClick()}
			>
				Guilherme Rodrigues
			</h1>
			{pixelNumbers.map((pixel) => (
				<PixelArtNumber
					key={pixel.id}
					value={pixel.value}
					x={pixel.x}
					y={pixel.y}
					onAnimationEnd={() => removePixelNumber(pixel.id)}
				/>
			))}
		</>
	);
}
