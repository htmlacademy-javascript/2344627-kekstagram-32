// Функция для проверки длины строки.
function lengthChecks (string, maxLength){
  return string.length <= maxLength;
}
lengthChecks('проверяемая строка', 20);

// Функция для проверки, является ли строка палиндромом.
function palindrome(string){
  const normalLine = string.toLowerCase().replaceAll(' ','');
  let reverseLine = '';
  for (let i = normalLine.length - 1; i >= 0; i--){
    reverseLine += normalLine[i];
  }
  return reverseLine === string;
}
palindrome('топот');

//Дополнительная задача
function checkString (string){
  let result = '';
  string = string.toString().replaceAll(' ', '');
  for (let i = 0; i < string.length; i++) {
    if (string[i] > 0) {
      result += string[i];
    }
  }
  if (result === '') {
    result = NaN;
  }
  return Number(result);
}
checkString(-4);
