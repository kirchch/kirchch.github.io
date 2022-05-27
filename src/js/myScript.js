"use strict"


let website = prompt("Выберите тип сайта: 0 - сайт-визитка; 1 - интернет магазин; 2 - сайт услуг.");
 
let design  = prompt("Выберите дизайн сайта: 0 - шаблонный; 1 - уникальный; 2 - индивидуальный.");

let adaptability  = prompt("Выберите адаптивность сайта: 0 - не адаптивный; 1 - адаптивный не под всё; 2 - поностью адаптивный."); 


let result = 0;


if (website == "0") {
	result = result + 100;
} else if (website == "1") {
	result = result + 200;
} else if (website == "2") {
    result = result + 300;
}

if (design == "0") {
	result = result + 100;
} else if (design == "1") {
	result = result + 200;
} else if (design == "2") {
	result = result + 300;
}

if (adaptability == "0") {
	result = result + 100;
} else if (adaptability == "1") {
	result = result + 200;
} else if (adaptability == "2") {
	result = result + 300;
}




alert(result);
