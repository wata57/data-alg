arr = ["neet","code","love","you"]

def encode(arr):
    res = ""
    for s in arr: 
        res += str(len(s)) + "#" + s
    return res


def decode(arr):
    res = []
    i = 0
    while i < len(arr):
        j = i
        while arr[j] != "#":
            j += 1
        length = int(arr[i:j])
        res.append(arr[j+1:j + 1 + length])
        i = j + 1 + length
    return res


  
arr_encoded = encode(arr)
decode(arr_encoded)

result = decode(arr_encoded)
print(result)

# s = "4#neet3#cod"

# print(s[0:1])