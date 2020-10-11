"use strict";
import "./snodrift.css";

const layers = [];

function makeLayer() {
	const el = document.createElement("div");
	el.className = "snodrift-snow";
	return el;
}

export function isSnowing() {
	return layers.length > 0;
}

export function start() {
	if (isSnowing()) return;

	layers.push(makeLayer());
	layers.forEach((layer) => document.body.appendChild(layer));
}

export function stop() {
	if (!isSnowing()) return;

	layers.forEach((layer) => layer.parentElement.removeChild(layer));
	layers.length = 0;
}
