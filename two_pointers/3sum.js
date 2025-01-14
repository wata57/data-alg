let nums = [-1, 0, 1, 2, -1, -4];

function threeSum(nums) {
  const res = [];
  const sorted_nums = nums.sort((a, b) => a - b);
  sorted_nums.forEach((n, index) => {
    if (index > 0 && sorted_nums[index - 1] === n) {
      return;
    }
    let i = index + 1;
    let j = sorted_nums.length - 1;
    while (i < j) {
      const sum = n + sorted_nums[i] + sorted_nums[j];
      if (sum === 0) {
        res.push([n, nums[i], nums[j]]);
        i += 1;
        j -= 1;
        while (i < j && nums[i] == nums[i - 1]) {
          i += 1;
        }
        while (i < j && nums[j] == nums[j + 1]) {
          j -= 1;
        }
      }
      if (sum > 0) {
        j -= 1;
      }
      if (sum < 0) {
        i += 1;
      }
    }
  });
  return res;
}

const result = threeSum(nums);
console.log(result);

document.getElementById("result").textContent = "Resultado: " + result;
