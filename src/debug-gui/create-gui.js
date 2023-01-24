import * as dat from "dat.gui";
import { createAxeDebugGUI } from "./create-axe-debug-ui";
import { isHrefExist } from "../url-parser";

const URL_FLAG_DEBUG = "debug";
const isDebug = isHrefExist(URL_FLAG_DEBUG);

export const createGUI = (scene) => {
  if (!isDebug) {
    return;
  }

  const gui = new dat.GUI({
    width: 300,
  });

  createAxeDebugGUI(scene);

  return gui;
};
