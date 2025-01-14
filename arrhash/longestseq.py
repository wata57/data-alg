def longestseq(nums):
    first_array = []
    nums_set = set(nums)
    for n in nums:
        if (n-1 not in nums_set):
            first_array.append(n)
    max_length = 0
 

    for first in first_array:
        c = 1
        i = 1
        while first + i in nums_set:
            c += 1
            i += 1
        max_length = max(max_length, c)
            
    return max_length

nums = [9,1,4,7,3,-1,0,5,8,-1,6]
result = longestseq(nums)
print(result)