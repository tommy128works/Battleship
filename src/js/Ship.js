const Ship = (length) => {
  let numHit = 0;
  const hit = () => {
    numHit++;
  };

  const isSunk = () => {
    if (length - numHit === 0) {
      return true;
    } else {
      return false;
    }
  };

  const getLength = () => length;

  return { hit, isSunk, getLength };
};

export default Ship;
