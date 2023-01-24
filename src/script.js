import "./style.css";
import * as THREE from "three";
import { sizes } from "./config";
import { createGUI } from "./debug-gui/create-gui";
import { OBJECT_COUNTS } from "./config";
import { createObjects } from "./objects/create-objects";
import { animateObject } from "./objects/animate-objects";
import {
  createCamera,
  updateCamera,
  updateCameraWhenResizeEvent,
} from "./camera/camera";
/**
 * Canvas
 */
const canvas = document.querySelector("canvas.webgl");

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
let mouseX = 0;
let mouseY = 0;

function onDocumentMouseMove(event) {
  mouseX = (event.clientX - windowHalfX) / 100;
  mouseY = (event.clientY - windowHalfY) / 100;
}
document.addEventListener("mousemove", onDocumentMouseMove);

/**
 * Scene
 */
const scene = new THREE.Scene();

/**
 * Objects
 */
const objects = createObjects(OBJECT_COUNTS);
scene.add(...objects);
/**
 * Camera
 */
const camera = createCamera(sizes);
scene.add(camera);

/**
 * GUI
 */
const gui = createGUI(scene);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  updateCameraWhenResizeEvent(camera, sizes);

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
});

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Render
  renderer.render(scene, camera);

  // Update Camera
  updateCamera(camera, { mouseX, mouseY }, scene.position);

  // Animate Objects
  animateObject(objects, elapsedTime);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};
tick();
