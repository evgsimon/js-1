var budget = prompt("Ваш бюджет?", ""),
    shopName = prompt("Название магазина?", ""),
    shopGoods = [],
    mainList = {},
    employers = {};

shopGoods = [prompt("Какой тип товаров будем продавать?", ""),
                 prompt("Какой тип товаров будем продавать?", ""),
                 prompt("Какой тип товаров будем продавать?", "")];

//console.log(budget);
//console.log(shopGoods);
mainList = {
	budget: budget,
	shopName: shopName,
	shopGoods: shopGoods,
 employers: employers,
 open: ''
};

console.log(mainList);
alert(+budget/30);