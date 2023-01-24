import { OFFSET_POSITION } from "../config";

const isEvenIndex = (index) => {
  return !!index % 2;
};

const rotateObject = (index, object, elapsedTime) => {
  if (isEvenIndex(index)) {
    object.rotation.y = Math.PI * elapsedTime;
  } else {
    object.rotation.y = -Math.PI * elapsedTime;
  }
};

export const animateObject = (objects, elapsedTime) => {
  if (!objects.length) {
    return;
  }

  const animationSpeedFromElapsedTime = elapsedTime * 0.25;

  objects.forEach((object, index) => {
    object.position.x =
      OFFSET_POSITION * Math.cos(animationSpeedFromElapsedTime + index);
    object.position.z =
      OFFSET_POSITION * Math.tan(animationSpeedFromElapsedTime + index * 1.1);

    rotateObject(index, object, elapsedTime);
  });
};
