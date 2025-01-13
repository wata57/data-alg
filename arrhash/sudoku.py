nums = [1, 2, 3,2]

def hasDuplicate(nums):
  array = []
  for n in nums:
    if n in array:
      return True
    else:
      array.append(n)
  return False

result = hasDuplicate(nums)
print(result)