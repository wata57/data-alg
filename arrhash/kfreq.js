nums = [1, 2, 2, 2, 3, 3, 3, 4, 5, 6, 6, 9];
k = 2;

function topKFrequent(nums, k) {
  let freq = {};
  for (let n of nums) {
    freq[n] = (freq[n] || 0) + 1;
  }

  const bucket = Array.from({ length: nums.length + 1 }, () => []);
  for (const [number, count] of Object.entries(freq)) {
    bucket[count].push(Number(number));
  }

  let res = [];
  for (let i = bucket.length - 1; i > 0; i--) {
    for (let number of bucket[i]) {
      res.push(number);
      if (res.length === k) {
        return res;
      }
    }
  }
}

const result = topKFrequent(nums, k);
console.log(result);

document.getElementById("result").textContent = "Resultado: " + result;
