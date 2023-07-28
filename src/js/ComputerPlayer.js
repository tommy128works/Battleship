const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const ComputerPlayer = () => {
  let previousAttacks = [];

  const makeAttack = () => {
    let x = 0;
    let y = 0;
    let string = "";
    do {
      x = getRandomInt(10);
      y = getRandomInt(10);
      string = x + "," + y;
    } while (previousAttacks.includes(string));

    previousAttacks.push(string);

    console.log(previousAttacks);

    return [x, y];
  };

  return {
    makeAttack,
  };
};

export default ComputerPlayer;
