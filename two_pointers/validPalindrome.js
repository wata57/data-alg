let s = "Seco de raiva, coloco no colo caviar e doces";

function validPalindrome(s) {
  let for_index = 0;
  let back_index = s.length - 1;

  while (for_index < back_index) {
    if (!/^[a-z0-9]+$/i.test(s[for_index])) {
      for_index++;
      continue;
    }
    if (!/^[a-z0-9]+$/i.test(s[back_index])) {
      back_index--;
      continue;
    }
    if (s[for_index].toLowerCase() !== s[back_index].toLowerCase()) {
      return false;
    }
    for_index++;
    back_index--;
  }
  return true;
}

const result = validPalindrome(s);
console.log(result);

document.getElementById("result").textContent = "Sorted array: " + result;
