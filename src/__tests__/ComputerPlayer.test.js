import ComputerPlayer from "../js/ComputerPlayer";

// This test can be skipped because it returns a random coordinate
test.skip("Computer player makes random attack", () => {
  let computer = ComputerPlayer();

  expect(computer.makeAttack()).toBe(true);
});
