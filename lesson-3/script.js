var money,
    name,
    time,
    price

function start () {
  money = prompt("Ваш бюджет?", "");

  while (isNaN(money) || money == "" || money == null) {
    money = prompt("Ваш бюджет?", "");
  }

  name = prompt("Название магазина?", "").toUpperCase();
  time = 19;
}

start();

var mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
  employers: {},
  open: false,
  discount: false
};

function chooseGoods() {

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
}

// chooseGoods();


function chooseEmployers() {

    for (let i = 0; i < 4; i++) {

      let a = prompt("Введите имя сотрудника", "");
      
      if ((typeof(a)) === 'string' && a != null && a != '' && a.length < 50) {
        console.log('Все верно!');
        mainList.employers[i] = i +1 + " - " + a;
      } else {
        alert('Необходимо ввести корректное название товара. Попробуйте еще раз.');
        i--;
      }
    }
}

chooseEmployers();


function workTime(time) {
  if (time < 0) {
    console.log('Такого просто не может быть');
  } else if (time > 8 && time < 20) {
    console.log('Время работать!');
    } else if (time < 24) {
      console.log('Уже слишком поздно');
      } else if (time > 24) {
        console.log('В сутках только 24 часа');
      };
}

// workTime(19);

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



console.log(mainList);

function countDayBudget() {
    alert('Дневной бюджет: ' + mainList.budget / 30);
    document.write('Дневной бюджет: ' + mainList.budget / 30);
}

// countDayBudget();
