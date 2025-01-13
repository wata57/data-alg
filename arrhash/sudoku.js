let arr = ["neet", "code", "love", "you"];

function encode(arr) {
  let res = "";
  for (let word of arr) {
    res += word.length.toString() + "#" + word;
  }
  return res;
}

function decode(s) {
  let res = [];
  let i = 0;
  while (i < s.length) {
    let j = i;
    while (s[j] !== "#") {
      j += 1;
    }
    const length = parseInt(s.slice(i, j));
    res.push(s.slice(j + 1, j + 1 + length));
    i = j + 1 + length;
  }
  return res;
}

const arr_encoded = encode(arr);
const result = decode(arr_encoded);
console.log(result);

document.getElementById("result").textContent = "Resultado: " + result;
