"strict";
/*
Ваша задача создать генератор случайных строк. Каждое значение должно состоять из 5 символов. 
Настройте генерацию и отображение значений через каждые 3 секунды. 

При отображения отображении значения пользователю  выполните следующие условия:
1) если созданное значение является палиндромом отобразите его красным цветом;
2) если созданное значение состоит только из цифр отобразите его синим цветом;
3) если созданное содержит 0 не отображайте его вовсе.
*/

////////////////////////////////////////
// Functions

const changeColor = (value, str) =>
  (document.getElementById("soulQ").innerHTML = str.fontcolor(value));

const changeText = (str) =>
  (document.getElementById("soulQ").textContent = str);

const Soulq = function () {
  // Generating a random number
  let string = Math.random().toString(36).slice(2, 7);
  // Logging to console
  console.log(string);
  // If not #3 then continue
  if (!string.includes(0)) {
    changeText(string);
    // Now check #2 and #1
    // Checking if string consists of all digits
    if (/^\d+$/.test(string)) return changeColor("blue", string);
    // Checking if it is palindome
    if (string.slice(0, 2) === string.slice(-2).split("").reverse().join(""))
      changeColor("red", string);
  } else changeText("There was zero");
};

setInterval(Soulq, 3000);
