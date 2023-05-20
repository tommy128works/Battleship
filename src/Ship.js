const Ship = (length) => {
  // hit() counter function
  let numHit = 0;
  const hit = () => {
    numHit++;
  };

  // isSunk() function
  const isSunk = () => {
    if (length - numHit === 0) {
      return true;
    } else {
      return false;
    }
  };

  return { hit, isSunk };
};

export default Ship;
