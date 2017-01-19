import { getTicTacToeWinner } from '../ticTacToeWinner';

describe("Tic Tac Toe Winner", () => {
  it("finds winner in row", function() {
    expect(getTicTacToeWinner([ 0, 0, 0, 1, 1, 1, 2, 2, 0 ], 0)).toBe(1);
  });
  it("finds winner in column", () => {
    expect(getTicTacToeWinner([ 1, 0, 0, 1, 0, 0, 1, 0, 0 ], 0)).toBe(1);
  });
  it("finds winner in diagonals", () => {
    expect(getTicTacToeWinner([ 1, 0, 0, 0, 1, 0, 0, 0, 1 ], 0)).toBe(1);
    expect(getTicTacToeWinner([ 0, 0, 1, 0, 1, 0, 1, 0, 0 ], 0)).toBe(1);
  });
  it("recognizes if there is not winner", function() {
    expect(getTicTacToeWinner([ 0, 0, 0, 0, 0, 0, 0, 0, 0 ], 0)).toBeUndefined();
  });
});