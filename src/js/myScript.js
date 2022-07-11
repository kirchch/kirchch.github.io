$(document).ready(function(){
	
 //Лоадер	
 $(".mask").css("display", "none");
	
//Модальное окно акции по таймеру
  setTimeout(function () {
     const myModal = new bootstrap.Modal('#myModal', {
     	  keyboard: false
     });
     modalToggle = document.getElementById('toggleMyModal'); 
      myModal.show(modalToggle);

   }, 1000);


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
	
	
//Модальные окна в кейсах
    $('.image-link').magnificPopup({
        type: 'image'
    });
	
	
	new WOW().init();
	
	// Картинка с уменьшеным качеством
	
	       let optionsImg = {
            threshold: [0.5]
        };
        let observerImg = new IntersectionObserver(onEntryImg, optionsImg);
        let elementsImg = $('#reviews__img, #boy2');

        elementsImg.each((i, el) => {
            observerImg.observe(el);
        });


        function onEntryImg(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    change.target.src = change.target.dataset.src;
                }
            });
        }
	
	    //Бегающие цифры статистики
     let optionsStat = {
            threshold: [0.5]
        };
        let observerStat = new IntersectionObserver(onEntryStat, optionsStat);
        let elementsStat = $('.statAnimation');

        elementsStat.each((i, el) => {
            observerStat.observe(el);
        });


        function onEntryStat(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    if(!$('.statAnimation').hasClass("done")){
                        $('.statAnimation').addClass("done");
                        $('.statAnimation').spincrement({
                         thousandSeparator: "",
                         duration: 3000
                    });
                  }
                }
            });
        }
	//Валидация формы модального окна
	$("#inputPassword3").mask("+7(999) 999-9999");
});


   



