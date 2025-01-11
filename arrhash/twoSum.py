nums = [4, 5, 6]
target = 10

def twoSum(nums, target):
  hm = {}
  for i, n in enumerate(nums):
    complement = target - n
    if complement in hm:
      return [hm[complement], i]
    else:
      hm[n] = i

result = twoSum(nums, target)
print(result)
