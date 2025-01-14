s = "Seco de raiva, coloco no colo caviar e doces"

def validPalindrome(s):
  for_index = 0
  back_index = len(s) - 1
  while for_index < back_index:
    if not s[for_index].isalnum():
      for_index += 1
      continue
    if not s[back_index].isalnum():
      back_index -= 1
      continue
    if s[for_index].lower() != s[back_index].lower():
      return False
    for_index += 1
    back_index -= 1
  return True

result = validPalindrome(s)
print(result)