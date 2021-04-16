// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который
// расположен на этой клавише (1–!, 2–@, 3–# и т. д).

let value = window.prompt(`Введіть число від 0 до 9`);
switch (value) {
  case "0":
    alert(" клавіша '0' це - )");
    break;
  case "1":
    alert("клавіша '1' це -!");
    break;
  case "2":
    alert("клавіша '2' це -@");
    break;
  case "3":
    alert("клавіша '3' це -#");
    break;
  case "4":
    alert("клавіша '4' це -$");
    break;
  case "5":
    alert("клавіша '5' це -%");
    break;
  case "6":
    alert("клавіша '6' це -^");
    break;
  case "7":
    alert("клавіша '7' це -&");
    break;
  case "8":
    alert("клавіша '8' це -*");
    break;
  case "9":
    alert("клавіша '9' це -(");
    break;
}
