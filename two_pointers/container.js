let heights = [1, 2];

function container(heights) {
  let max_area = 0;
  let i = 0;
  let j = heights.length - 1;
  while (i < j) {
    let product = 1;
    if (heights[j] > heights[i]) {
      product = heights[i] * (j - i);
      i++;
    } else {
      product = heights[j] * (j - i);
      j--;
    }
    max_area = Math.max(max_area, product);
  }
  return max_area;
}

const result = container(heights);
console.log(result);

document.getElementById("result").textContent = "Resultado: " + result;
