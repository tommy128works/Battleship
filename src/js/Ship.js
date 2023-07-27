const Ship = (length) => {
  let hitCounter = 0;

  const hit = () => {
    hitCounter++;
  };

  const isSunk = () => {
    if (length - hitCounter === 0) {
      return true;
    } else {
      return false;
    }
  };

  const getLength = () => length;

  return { hit, isSunk, getLength };
};

export default Ship;
