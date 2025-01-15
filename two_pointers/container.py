height = [1,2]

def container(height):
  max_area = 0
  i = 0
  j = len(height) - 1
  while i < j:
    if height[j] > height[i]:
      product = height[i] * (j - i)
      i += 1
    else:
      product = height[j] * (j - i)
      j -= 1
    max_area = max(max_area, product)
  return max_area
  

result = container(height)
print(result)
