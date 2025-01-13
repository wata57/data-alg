let board = [
  ["1", "2", ".", ".", "3", ".", ".", ".", "."],
  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", ".", "3"],
  ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

function isValidRowsColumns(board) {
  const hm_columns = Array.from({ length: 9 }, () => []);
  for (let row of board) {
    const row_items = [];
    for (let i = 0; i < row.length; i++) {
      if (row[i] == ".") {
        continue;
      }
      if (row_items.includes(row[i])) {
        return false;
      }
      row_items.push(row[i]);
      if (hm_columns[i].includes(row[i])) {
        return false;
      }
      hm_columns[i].push(row[i]);
    }
  }
  return true;
}

function isValidSquare(board) {
  const hm_squares = Array.from({ length: 9 }, () => []);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const squareIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (board[i][j] == ".") {
        continue;
      }
      if (hm_squares[squareIndex].includes(board[i][j])) {
        return false;
      }
      hm_squares[squareIndex].push(board[i][j]);
    }
  }
  return true;
}

const result = isValidRowsColumns(board) && isValidSquare(board);
console.log(result);

document.getElementById("result").textContent = "Resultado: " + result;
