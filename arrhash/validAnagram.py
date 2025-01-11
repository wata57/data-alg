s = "racecar"
t = "carraca"

def validAnagram(s,t):
  if len(s) != len(t):
    return False

  hashmapS = {}
  hashmapT = {}
  for i in range(0, len(s)):
    if (s[i] in hashmapS):
      hashmapS[s[i]] += 1
    else:
      hashmapS[s[i]] = 1
    if (t[i] in hashmapT):
      hashmapT[t[i]] += 1
    else:
      hashmapT[t[i]] = 1
  
  if hashmapS == hashmapT:
    return True
  else:
    return False

result = validAnagram(s,t)
print(result)
