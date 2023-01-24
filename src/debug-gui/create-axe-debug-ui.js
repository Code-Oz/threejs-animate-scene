import * as THREE from "three";

export const createAxeDebugGUI = (scene) => {
  const axesHelper = new THREE.AxesHelper(2);
  scene.add(axesHelper);
};
