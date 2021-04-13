let a = prompt("введіть початок діапазону", "");
let n = prompt("введіть кінець діапазону", "");
let sum = 0;

while (a < n) {
  a++;
  sum += a;
}

alert(sum);
