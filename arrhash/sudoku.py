board = [["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","1",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]

def isValidRowsColumns(board):
  hm_columns = {i: [] for i in range(0, 9)}
  for row in board:
    row_items = []
    for i, n in enumerate(row):
      if n == ".":
        continue
      if n in row_items:
        return False
      row_items.append(n)
      if n in hm_columns[i]:
        return False
      hm_columns[i].append(n)
  return True

def isValidSquare(board):
  hm_squares = {i: [] for i in range(0, 9)}
  for i, row in enumerate(board):
    for j, n in enumerate(row):
      if n == ".":
        continue
      if n in hm_squares[i // 3 * 3 + j // 3]:
        return False
      hm_squares[i // 3 * 3 + j // 3].append(n)
  return True

result = isValidRowsColumns(board) and isValidSquare(board)
print(result)