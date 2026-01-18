let s = "Seco de raiva, coloco no colo caviar e doces";

function isAlphaNumeric(char) {
  const code = char.toLowerCase().charCodeAt(0);

  return (
    (code >= 48 && code <= 57) ||   // 0-9
    (code >= 97 && code <= 122)     // a-z
  );
}

function validPalindrome(s) {
  let for_index = 0;
  let back_index = s.length - 1;

  while (for_index < back_index) {
    const frontChar = s[for_index];
    const backChar = s[back_index];

    if (!isAlphaNumeric(frontChar)) {
      for_index++;
      continue;
    }

    if (!isAlphaNumeric(backChar)) {
      back_index--;
      continue;
    }

    if (frontChar.toLowerCase() !== backChar.toLowerCase()) {
      return false;
    }

    for_index++;
    back_index--;
  }

  return true;
}

const result = validPalindrome(s);
console.log(result);
document.getElementById("result").textContent = "Is palindrome: " + result;
