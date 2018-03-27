var budget = prompt("Ваш бюджет?", ""),
    shopName = prompt("Название магазина?", ""),
    mainList = {};


mainList = {
	budget: budget,
	shopName: shopName,
	shopGoods: [],
 employers: {},
 open: false
};

mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?");

console.log(mainList);
alert('Дневной бюджет: ' + mainList.budget / 30);
document.write('Дневной бюджет: ' + mainList.budget / 30);