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
