export function randomFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function debounceInterval(callback: () => void, min: number, max: number): void {
  setTimeout(() => callback(), randomFromInterval(min, max));
}
