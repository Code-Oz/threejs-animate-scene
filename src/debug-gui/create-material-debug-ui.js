export const createAoMapIntensityDebugGUI = (gui, mesh) => {
  const folder = gui.addFolder("material");

  folder
    .add(mesh.material, "aoMapIntensity")
    .name("aoMapIntensity")
    .min(0)
    .max(1)
    .step(0.01);
};
