// Запросить у пользователя его возраст и определить,
//  кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

let value = window.prompt(`Введіть свій вік`);
if (value >= 0 && value < 12) {
  window.alert("Ви є дитина");
} else if (value >= 12 && value < 18) {
  window.alert("Ви є підліток");
} else if (value >= 18 && value < 60) {
  window.alert("Ви є дорослий");
} else if (value >= 60) {
  window.alert("Ви є пенсіонер");
}
