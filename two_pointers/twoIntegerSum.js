let numbers = [1, 2, 3, 4];
let target = 7;

function twoIntegerSum(numbers, target) {
  let i = 0;
  let j = i + 1;
  while (j < numbers.length) {
    const sum = numbers[i] + numbers[j];
    if (sum === target) {
      return [i + 1, j + 1];
    }
    if (j === numbers.length - 1) {
      i += 1;
      j = i + 1;
      continue;
    }
    if (sum < target) {
      j += 1;
      continue;
    }
    if (sum > target) {
      i += 1;
      j = i + 1;
      continue;
    }
  }
}

const result = twoIntegerSum(numbers, target);
console.log(result);

document.getElementById("result").textContent = "Resultado: " + result;
