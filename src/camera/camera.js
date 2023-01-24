import * as THREE from "three";

export const createCamera = (sizes) => {
  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.01,
    100
  );
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 2;
  camera.focalLength = 3;

  return camera;
};

export const updateCamera = (camera, mouse, position) => {
  camera.position.x += (mouse.mouseX - camera.position.x) * 0.05;
  camera.position.y += (-mouse.mouseY - camera.position.y) * 0.05;
  camera.lookAt(position);
};

export const updateCameraWhenResizeEvent = (camera, sizes) => {
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
};
