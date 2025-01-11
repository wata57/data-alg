let nums = [3, 4, 5, 6];
let target = 7;

function twoSum(nums, target) {
  hm = {};
  for (let i = 0; i < nums.length; i++) {
    complement = target - nums[i];
    if (complement in hm) {
      return [hm[complement], i];
    } else {
      hm[nums[i]] = i;
    }
  }
}

const result = twoSum(nums, target);

document.getElementById("result").textContent = "Resultado: " + result;
