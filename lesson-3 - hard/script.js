var str = 'урок-3-был слишком легким';

str = str[0].toUpperCase() + str.slice(1);

var pos = -1;
while ((pos = str.indexOf('-', pos + 1)) != -1) {

  str = str.slice(0, pos) + " " + str.slice(pos + 1);
  
}

console.log(str);

document.write(str.slice(-6, -2) + "о");

var arr = [20, 33, 1, "Человек", 2, 3],
    result = 0;

for (let i = 0; i < 6; i++) {
  result = result + Math.pow(arr[i], 3);
  console.log(result);
}

result = Math.sqrt(result);
console.log(result);
