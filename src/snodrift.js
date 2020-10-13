"use strict";
import "./snodrift.css";

const layers = [];

export function isSnowing() {
	return layers.length > 0;
}

function makeLayer() {
	const el = document.createElement("div");
	el.className = "snodrift-snow";
	return el;
}

function random(min, max) {
	return min + Math.random() * (max - min);
}

export function start(
	{ container, layerCount, maxSpeed, minSpeed } = {
		container: document.body,
		layerCount: 2,
		maxSpeed: 30,
		minSpeed: 10,
	}
) {
	if (isSnowing()) return;

	if (!Number.isInteger(layerCount) || layerCount < 1)
		throw new Error("Invalid number of layers; must be a positive number");

	for (let i = 0; i < layerCount; i++) {
		const layer = makeLayer();
		layer.style.animationDuration = `${Math.floor(random(minSpeed, maxSpeed) * 1000)}ms`;

		if (i % 2 === 0) {
			layer.className = "snodrift-snow snodrift-snow-1";
		} else {
			layer.className = "snodrift-snow snodrift-snow-2";
		}
		layer.style.opacity = 0.8 + 0.2 * Math.random();

		layers.push(layer);
		container.appendChild(layer);
	}
}

export function stop() {
	if (!isSnowing()) return;

	layers.forEach((layer) => layer.parentElement.removeChild(layer));
	layers.length = 0;
}
