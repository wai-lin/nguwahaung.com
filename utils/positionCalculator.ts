export function calculateRadialPosition(
	degree: number,
	radius: number,
	centerX: number,
	centerY: number,
) {
	// Convert degree to radians
	const radian = degree * (Math.PI / 180);

	// Calculate x and y positions
	const x = centerX + radius * Math.cos(radian);
	const y = centerY + radius * Math.sin(radian);

	return { x, y };
}

export function getCenter(container: HTMLElement) {
	const rect = container.getBoundingClientRect();
	const centerX = rect.left + rect.width / 2;
	const centerY = rect.top + rect.height / 2;
	return { centerX, centerY };
}
