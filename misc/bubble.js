let nums = [64, 34, 25, 12, 22, 11, 90];

function bubbleSort(nums) {
  let n = nums.length;
  let swapped = true;

  while (n > 1 && swapped) {
    swapped = false;
    let i = 0;
    while (i + 1 < n) {
      if (nums[i] > nums[i + 1]) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        swapped = true;
      }
      i++;
    }
    n--;
  }
  return nums;
}

const result = bubbleSort(nums);

document.getElementById("result").textContent =
  "Sorted array: " + result.join(", ");
