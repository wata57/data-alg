let strs = ["act", "pots", "tops", "cat", "stop", "hat"];

function groupAnagram(strs) {
  let hm = {};
  for (let i = 0; i < strs.length; i++) {
    const sorted = strs[i].split("").sort().join();
    if (sorted in hm) {
      hm[sorted].push(strs[i]);
    } else {
      hm[sorted] = [strs[i]];
    }
  }
  return Object.values(hm);
}

const result = groupAnagram(strs);
console.log(result);

document.getElementById("result").textContent = "Resultado: " + result;
