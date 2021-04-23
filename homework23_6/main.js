// // Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести
// EUR, UAN или AZN, и получает в ответ соответствующую сумму.

let value = window.prompt(`Введіть суму в USD`);
let currency = window.prompt(`Виберіть валюту: EUR-1, UAN-2, AZN-3`);
const EUR = 0.83;
const UAN = 27.99;
const AZN = 1.7;

switch (currency) {
  case "1":
    alert(value * EUR);
    break;
  case "2":
    alert(value * UAN);
    break;
  case "3":
    alert(value * AZN);
    break;
}
