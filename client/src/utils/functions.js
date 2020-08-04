export const parsePath = url => {
  const pathArray = url.split('/');
  const path = pathArray[pathArray.length - 1];
  return path;
};

export default parsePath;
