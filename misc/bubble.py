nums = [64, 34, 25, 12, 22, 11, 90]

def bubbleSort(nums):
  k = len(nums)
  swapped = True

  while k > 1 and swapped:
    swapped = False
    i = 0
    while i + 1 < k:
      if nums[i] > nums[i+1]:
        nums[i], nums[i+1] = nums[i+1], nums[i]
        swapped = True
      i += 1
    k -= 1
  
  return nums

result = bubbleSort(nums)
print(result)