let s = "racecar";
let t = "carrace";

function validAnagram(s, t) {
  if (s.length != t.length) {
    return false;
  }

  let hashmapS = {};
  let hashmapT = {};

  for (let i = 0; i < s.length; i++) {
    if (s[i] in hashmapS) {
      hashmapS[s[i]] += 1;
    } else {
      hashmapS[s[i]] = 1;
    }
    if (t[i] in hashmapT) {
      hashmapT[t[i]] += 1;
    } else {
      hashmapT[t[i]] = 1;
    }
  }

  for (let key in hashmapS) {
    if (hashmapS[key] != hashmapT[key]) {
      return false;
    }
  }

  return true;
}

const result = validAnagram(s, t);
console.log(result);

document.getElementById("result").textContent = "Resultado: " + result;
