var money = prompt("Ваш бюджет?", ""),
    name = prompt("Название магазина?", ""),
    mainList = {},
    time = 19;


mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
 employers: {},
 open: false
};

for (let i = 0; i < 5; i++) {

  let a = prompt("Какой тип товаров будем продавать?", "");
  
  if ((typeof(a)) === 'string' && a != null && a != '' && a.length < 50) {
  	console.log('Все верно!');
  	mainList.shopGoods[i] = a;
  } else {
  	alert('Необходимо ввести корректное название товара. Попробуйте еще раз.');
  	i--;
  }

}


//Второй способ решения цикла
/*let i =0;
while (i < 5) {
	let a = prompt("Какой тип товаров будем продавать?", "");
  
  if ((typeof(a)) === 'string' && a != null && a != '' && a.length < 50) {
  	console.log('Все верно!');
  	mainList.shopGoods[i] = a;
  } else {
  	alert('Необходимо ввести корректное название товара. Попробуйте еще раз.');
  	i--;
  }
  i++;
};*/

//Третий способ решения цикла
/*let i =0;
do {
		let a = prompt("Какой тип товаров будем продавать?", "");
		  
		  if ((typeof(a)) === 'string' && a != null && a != '' && a.length < 50) {
		  	console.log('Все верно!');
		  	mainList.shopGoods[i] = a;
		  } else {
		  	alert('Необходимо ввести корректное название товара. Попробуйте еще раз.');
		  	i--;
		  }
		  i++;
}
while (i < 5);*/

if (time < 0) {
	console.log('Такого просто не может быть');
} else if (time > 8 && time < 20) {
  console.log('Время работать!');
  } else if (time < 24) {
  	console.log('Уже слишком поздно');
    } else if (time > 24) {
    	console.log('В сутках только 24 часа');
    };

console.log(mainList);
alert('Дневной бюджет: ' + mainList.budget / 30);
document.write('Дневной бюджет: ' + mainList.budget / 30);