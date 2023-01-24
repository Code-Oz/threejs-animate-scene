const queryString = window.location.search;
const href = window.location.hash;

export const isHrefExist = (key) => {
  return href === `#${key}`;
};
