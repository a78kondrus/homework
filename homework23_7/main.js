let value = window.prompt(`Введіть суму`);

let skidka3 = value * 3 / 100;
let skidka5 = value * 5 / 100;
let skidka7 = value * 7 / 100;

if (value >=200 && value <300) {
window.alert((value - skidka3) *100 / 100);
} else if (value >=300 && value <=500) {
    window.alert((value - skidka5) *100 / 100);
    } else if (value >500) {
        window.alert((value - skidka7) * 100 /  100);
        }
