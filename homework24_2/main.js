let a = +prompt("введіть перше число", "");
let b = +prompt("введіть друге число", "");

while (a != 0 && b != 0) {
  if (a > b) {
    a = a % b;
  } else b = b % a;
}
alert(a + b);
