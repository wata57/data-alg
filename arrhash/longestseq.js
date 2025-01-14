let nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];

function longestseq(nums) {
  const firsts_array = [];
  const nums_set = new Set(nums);

  for (let n of nums) {
    if (!nums_set.has(n - 1)) {
      firsts_array.push(n);
    }
  }
  let max_length = 0;
  for (let first of firsts_array) {
    let c = 1;
    let i = 1;
    while (nums_set.has(first + i)) {
      c++;
      i++;
    }
    max_length = Math.max(max_length, c);
  }
  return max_length;
}

const result = longestseq(nums);
console.log(result);

document.getElementById("result").textContent = "Longest seq: " + result;
