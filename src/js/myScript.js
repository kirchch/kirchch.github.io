$(document).ready(function(){
	
 //Лоадер	
 $(".mask").css("display", "none");
	
	//Модальное окно акции по таймеру
setTimeout(function(){
	confirm("Оставайся и получи скидку 50% на первый заказ!");
}, 5000);


//Плавный скроллинг к якорным ссылкам
$('a[href^="#"]').click(function(){
	let valHref = $(this).attr("href");
	$('html, body').animate({scrollTop: $(valHref).offset().top - 55 + "px"});
});


//Калькулятор стоимости  
$("#list, #list1, #list2").on("change", function calculate(){
	var value = parseInt($('#list').val());
	var value1 = parseInt($('#list1').val());
	var value2 = parseInt($('#list2').val());
	$('#total').html(`Стоимость: ${value + value1 + value2}`);
});
$("#button").click(function(){
	$('#total').html("Стоимость: 0");
});


//Калькулятор сроков
$("#list, #list1, #list2").on("change", function calculate2(){
	
	var days = parseInt($("#list option:selected").attr("days"));
	var days1 = parseInt($("#list1 option:selected").attr("days"));
	var days2 =  parseInt($("#list2 option:selected").attr("days"));
	$('#deadlines').html(`Сроки: ${days + days1 + days2}`);
});
$("#button").click(function(){
	$('#deadlines').html("Сроки: 0");
});


//Анимация активных ссылок в меню 
  $(window).scroll(() => {
               let scrollDistance = $(window).scrollTop();


               $('.section').each((i, el) => {

                   if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
                       $('nav a').each((i, el) => {
                           if ($(el).hasClass('active')) {
                               $(el).removeClass('active');
                           }
                       });

                       $('nav li:eq(' + i + ')').find('a').addClass('active');
                   }

               });
           });

	
//Отложенная анимация
	
	let options = {threshold: [0.5]};
	let observer = new IntersectionObserver(onEntry, options);
	let elements = $('.personality__container');
	
	elements.each((i, el) => {
		observer.observe(el);
	});
	
	
	function onEntry(entry) {
		entry.forEach(change => {
			if (change.isIntersecting){
				change.target.classList.add('personality__animation');
			}
		});
	}
	
});


    //Модальные окна в кейсах
    $('.image-link').magnificPopup({
        type: 'image'
    });



