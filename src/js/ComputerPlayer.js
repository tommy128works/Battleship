const BOARD_SIZE = 10;

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const ComputerPlayer = () => {
  let previousAttacks = [];

  const getRandomShipPlacement = () => {
    let x = getRandomInt(BOARD_SIZE);
    let y = getRandomInt(BOARD_SIZE);
    let axis = getRandomInt(2);

    if (axis === 1) {
      axis = "X";
    } else {
      axis = "Y";
    }

    return [x, y, axis];
  };

  const makeAttack = () => {
    let x = 0;
    let y = 0;
    let string = "";
    do {
      x = getRandomInt(BOARD_SIZE);
      y = getRandomInt(BOARD_SIZE);
      string = x + "," + y;
    } while (previousAttacks.includes(string));

    previousAttacks.push(string);

    console.log(previousAttacks);

    return [x, y];
  };

  return {
    getRandomShipPlacement,
    makeAttack,
  };
};

export default ComputerPlayer;
