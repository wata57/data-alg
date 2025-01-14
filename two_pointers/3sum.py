nums = [-2,0,0,2,2]

def threeSum(nums):
  res = []
  nums.sort()
  print(nums)
  for index, n in enumerate(nums):
    if index > 0 and n == nums[index-1]:
      continue
    i = index + 1
    j = len(nums) - 1
    while i < j:
      sum = n + nums[i] + nums[j]
      if sum == 0:
        res.append([n, nums[i], nums[j]])
        i += 1
        j -= 1
        while i < j and nums[i] == nums[i - 1]:
          i += 1
        while i < j and nums[j] == nums[j + 1]:
          j -= 1
      if sum < 0:
        i += 1
      if sum > 0:
        j -= 1

  return res


    

    
      

result = threeSum(nums)
print(result)
