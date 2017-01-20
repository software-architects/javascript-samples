/**
 * Gets the winner on a Tic Tac Toe board.
 * @param {number[]} board - Board data
 * @param {number} - Value representing an unset cell
 */
export function getTicTacToeWinner<T>(board: T[], empty: T): T {
    for (let col = 0; col < 3; col++) {
        if (board[col + 0 * 3] !== empty
            && board[col + 0 * 3] === board[col + 1 * 3]
            && board[col + 0 * 3] === board[col + 2 * 3]) {
            return board[col + 0 * 3];
        }
    }

    for (let row = 0; row < 3; row++) {
        if (board[0 + row * 3] !== empty
            && board[0 + row * 3] === board[1 + row * 3]
            && board[0 + row * 3] === board[2 + row * 3]) {
            return board[0 + row * 3];
        }
    }

    if (board[0 + 0 * 3] !== empty
        && board[0 + 0 * 3] === board[1 + 1 * 3]
        && board[0 + 0 * 3] === board[2 + 2 * 3]) {
        return board[0 + 0 * 3];
    }

    if (board[2 + 0 * 3] !== empty
        && board[2 + 0 * 3] === board[1 + 1 * 3]
        && board[2 + 0 * 3] === board[0 + 2 * 3]) {
        return board[2 + 0 * 3];
    }

    return undefined;
}
