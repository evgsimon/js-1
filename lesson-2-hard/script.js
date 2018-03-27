var week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

for (let i = 0; i < 7; i++) {

  if (i < 5) {
    document.write(week[i] + '<br>');
  } else {
    document.write('<b>' + week[i] + '</b><br>');
  }
};

var arr = [];

for (let i =0; i < 7; i++) {
  let a = prompt('Введите любое число', '');
  if (a[0] == '3' || a[0] == '7') {
    console.log(a);
  }
  arr[i] = a;
};

console.log('Весь массив arr: ' + arr);