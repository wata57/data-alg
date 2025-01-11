nums = [1,2,2,2,3,3,3,4,5,6,6]
k = 2

def solution(nums, k):
  hm = {}
  bucket = {}
  for n in nums:
    if n in hm:
      hm[n] += 1
    else:
      hm[n] = 1
  

result = solution(nums, k)
print(result)
