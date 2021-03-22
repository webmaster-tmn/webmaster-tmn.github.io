$(function(){
	
	var note = $('#note'),
		ts = new Date(2012, 0, 1),
		newYear = true;
	
	if((new Date()) > ts){
		// Задаем точку отсчета для примера. Пусть будет очередной Новый год или дата через 10 дней.
		// Обратите внимание на *1000 в конце - время должно задаваться в миллисекундах
		ts = (new Date()).getTime() + 10*24*60*60*1000;
		newYear = false;
	}

	// var as = new Date();
	// as.setTime(as.getTime()+1000*60*60*24);


	//определяем день недели
	var now = new Date();
	now.setTime(now.getTime()+1000*60*60*24);
	var as = now;
	var dayNames = new Array("Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота");

	//определяем месяц
	var textout;
	var month = now.getMonth();
	var date = now.getDate();
	textout = date;
	if (month==0) textout+=" января";
	if (month==1) textout+=" февраля";
	if (month==2) textout+=" марта";
	if (month==3) textout+=" апреля";
	if (month==4) textout+=" мая";
	if (month==5) textout+=" июня";
	if (month==6) textout+=" июля";
	if (month==7) textout+=" августа";
	if (month==8) textout+=" сентября";
	if (month==9) textout+=" октября";
	if (month==10) textout+=" ноября";
	if (month==11) textout+=" декабря";

	var text = ""+textout+"";
	document.getElementById("sale-top").innerHTML = text;
	document.getElementById("sale-date").innerHTML = text;
	document.getElementById("sale-date2").innerHTML = text;
		
	$('#countdown').countdown({
		timestamp	: as,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += "Дней: " + days +", ";
			message += "часов: " + hours + ", ";
			message += "минут: " + minutes + " и ";
			message += "секунд: " + seconds + " <br />";
			
			if(newYear){
				message += "осталось до Нового года!";
			}
			else {
				message += "осталось до момента через 10 дней!";
			}
			
			note.html(message);
		}
	});

	$('#countdown2').countdown({
		timestamp	: as,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += "Дней: " + days +", ";
			message += "часов: " + hours + ", ";
			message += "минут: " + minutes + " и ";
			message += "секунд: " + seconds + " <br />";
			
			if(newYear){
				message += "осталось до Нового года!";
			}
			else {
				message += "осталось до момента через 10 дней!";
			}
			
			note.html(message);
		}
	});

	$("input.tel").click(function(){
		$(".tel").mask("+7 (999) 999-9999");
    	// $(this).val('+7');
    });

     $('.modal').on('hidden.bs.modal', function (e) {
	  $('input:not(.type)', $(this)).val('');
	});

	$('form').submit(function(e){
	    e.preventDefault();
		var form_data = {
			'name':$(".name", $(this)).val(),
			'tel':$(".tel", $(this)).val(),
			'type':$(".type", $(this)).val()
		};
		$.ajax({
		  type: "POST",
		  url: "mail.php",
		  data: form_data,
		  success: function(){
		    $('.modal').modal('hide');
		    setTimeout(function() {		    
		    	window.location.href = 'thanks.html';
		    }, 1000);
		  },
		  error: function() {
		  	alert("Произошла какая то ошибка!");
		  }
		}); 
	});

	new WOW().init();
	
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true, //Зацикливаем слайдер
    margin: 15, //Отступ от элемента справа в 50px
    nav: false, //Отключение навигации
    autoplay: true, //Автозапуск слайдера
    smartSpeed: 1000, //Время движения слайда
    autoplayTimeout: 2000, //Время смены слайда
    responsive: {
      //Адаптивность. Кол-во выводимых элементов при определенной ширине.
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 5,
      },
    },
  });
});