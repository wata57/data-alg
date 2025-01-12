nums = [1,2,2,2,3,3,3,4,5,6,6,9]
k = 2

def solution(nums, k):
  freq = {}
  for n in nums:
    freq[n] = freq.get(n, 0) + 1
  bucket = [[] for _ in range(len(nums) + 1)]
  for num, count in freq.items():
    bucket[count].append(num)

  res = []
  for i in range(len(bucket) - 1, 0, -1):
    for number in bucket[i]:
      res.append(number)
      if len(res) == k:
        return res

result = solution(nums, k)
print(result)