let nums = [1, 2, 3];

function hasDuplicate(nums) {
  let array = [];
  for (let i = 0; i < nums.length; i++) {
    if (array.includes(nums[i])) {
      return true;
    } else {
      array.push(nums[i]);
    }
  }
  return false;
}

const result = hasDuplicate(nums);
console.log(result);

document.getElementById("result").textContent = "Resultado: " + result;
