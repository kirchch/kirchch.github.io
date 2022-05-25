"use strict"


let website = prompt("Выберите тип сайта: 0 - сайт-визитка; 1 - интернет магазин; 2 - сайт услуг.");
 
let design  = prompt("Выберите дизайн сайта: 0 - шаблонный; 1 - уникальный; 2 - индивидуальный.");

let adaptability  = prompt("Выберите адаптивность сайта: 0 - не адаптивный; 1 - адаптивный не под всё; 2 - поностью адаптивный."); 




if (website == "0") {
	let website = 100;
	console.log(website);
} else if (website == "1") {
	let website = 200;
	console.log(website);
} else if (website == "2") {
	let website = 300;
	console.log(website);
}

if (design == "0") {
	let design = 100;
	console.log(design);
} else if (design == "1") {
	let design = 200;
	console.log(design);
} else if (design == "2") {
	let design = 300;
	console.log(design);
}

if (adaptability == "0") {
	let adaptability = 100;
	console.log(adaptability);
} else if (adaptability == "1") {
	let adaptability = 200;
	console.log(adaptability);
} else if (adaptability == "2") {
	let adaptability = 300;
	console.log(adaptability);
}

let result = website + design + adaptability;
alert(result);