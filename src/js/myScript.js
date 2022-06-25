$(document).ready(function(){
	

 });
	

$('a[href^="#"]').click(function(){
	let valHref = $(this).attr("href");
	$('html, body').animate({scrollTop: $(valHref).offset().top - 70 + "px"});
});



$("#list, #list1, #list2").on("change", function(){
	var value = $('#list').val();
	var value1 = $('#list1').val();
	var value2 = $('#list2').val();
	value = Number(value);
	value1 = Number(value1);
	value2 = Number(value2);
	$('#total').html(`Стоимость: ${value + value1 + value2}`);
});

$("#button").click(function(){
	$('#total').html("Стоимость: 0");
});

/*$("#list, #list1, #list2").on("change", function(){
	var value = $('#list').val();
	var value1 = $('#list1').val();
	var value2 = $('#list2').val();
	value = Number(value);
	value1 = Number(value1);
	value2 = Number(value2);
	$('#deadlines').html(`Сроки: ${value + value1 + value2}`);
});*/



$("#list option:selected").attr("days", function(){
	var days = $('#list').days();
	days = Number(days);
	
	$('#deadlines').html(`Сроки: ${days}`);
});


$("#button").click(function(){
	$('#deadlines').html("Сроки: 0");
});

$(window).scroll(() => {
	let scrollDistance = $(window).scrollTop();
	
	$(".cost").each((i, el) => {
		
		if($(el).offset().top - $("nav").outerHeight() <= scrollDistance) {
			$("nav a").each((i, el) => {
				if($(el).hasClass("active")) {
				   $(el).removeClass("active");
				}
			});
			
			$('nav li:eq('+i +')').find('a').addClass('active')
		}
		
	});
});
/*
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

*/