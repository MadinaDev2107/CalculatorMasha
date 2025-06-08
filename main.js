const input = document.getElementById("input");

function isOperator(char) {
  switch (char) {
    case "+":
    case "-":
    case "*":
    case "/":
      return true;
    default:
      return false;
  }
}
function getText(param) {
  if (input.value.length !== 0) {
    const lastChar = input.value.slice(-1);

    if (isOperator(lastChar) && isOperator(param)) {
      input.value = input.value.slice(0, -1) + param;
    } else {
      input.value += param;
    }
  }
}
function lastNumberHasDot(str) {
  let i = str.length - 1;
  let numberStr = "";

  while (i >= 0) {
    const ch = str[i];
    if ((ch >= "0" && ch <= "9") || ch === ".") {
      numberStr = ch + numberStr;
      i--;
    } else {
      break;
    }
  }

  return numberStr.includes(".");
}
function getTexts(param) {
  const lastChar = input.value.slice(-1);

  if (param === ".") {
    if (input.value === "" || isOperator(lastChar)) {
      input.value += "0.";
      return;
    }

    if (lastNumberHasDot(input.value)) {
      return;
    }

    input.value += param;
  } else if (param >= "0" && param <= "9") {
    input.value += param;
  }
}
function calculate() {
  let result = eval(input.value);
  input.value = result;
}
function clearValue() {
  input.value = "";
}
function backspace() {
  input.value = input.value.slice(0, -1);
}
