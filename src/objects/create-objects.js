import * as THREE from "three";
import { RANGE_MAX, OFFSET_POSITION, getRandomInt } from "../config";

const getRandomPosition = () => {
  return Math.random() * RANGE_MAX - OFFSET_POSITION;
};

const getRandomRotation = () => {
  return Math.random() * Math.PI;
};

const getRandomScale = () => {
  return Math.random() * 0.5;
};

const geometries = [
  new THREE.TorusBufferGeometry(0.3, 0.2, 32, 64),
  new THREE.TorusBufferGeometry(0.3, 0.2, 32, 64),
  new THREE.IcosahedronGeometry(),
];

const getRandomGeometry = () => {
  const geometryRandom = getRandomInt(geometries.length);

  return geometries[geometryRandom];
};

export const createObjects = (objectsCounts) => {
  const objects = [];
  const material = new THREE.MeshNormalMaterial();

  for (let i = 0; i < objectsCounts; i++) {
    const objectGeometry = getRandomGeometry();
    const object = new THREE.Mesh(objectGeometry, material);

    const x = getRandomPosition();
    const y = getRandomPosition();
    const z = getRandomPosition();

    object.position.x = x;
    object.position.y = y;
    object.position.z = z;
    object.rotation.x = getRandomRotation();
    object.rotation.y = getRandomRotation();

    const scale = getRandomScale();
    object.scale.set(scale, scale, scale);

    objects.push(object);
  }

  return objects;
};
