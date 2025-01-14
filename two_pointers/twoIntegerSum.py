numbers = [1,2,3,4]
target = 7

def twoIntegerSum(numbers, target):
  i = 0
  j = i + 1
  while j < len(numbers):
    sum = numbers[i] + numbers[j]
    if sum == target:
      return [i + 1, j + 1]
    if j == len(numbers) - 1:
      i += 1
      j = i + 1
      continue
    if sum < target:
      j += 1
      continue
    if sum > target:
      i += 1
      j = i + 1
      continue
      

result = twoIntegerSum(numbers, target)
print(result)