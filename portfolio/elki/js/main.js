$(function() {


	$(".popup").magnificPopup();
	$("a[href='#callback']").click(function() {
		var dataForm = $(this).data("form");
		var dataText = $(this).data("text");
		$(".form-callback h4").text(dataText);
		$(".form-callback [name=admin-data]").val(dataForm);
	});


$(".popup"),click(function(){
	var dataForm = $(this).data("form");
	$(".contact-form [name=admin-data]").val(dataForm);
});
})
//		$('.iphone').mask('+7(999) 999-9999');
		
		$('form').ajaxForm({ 
			success: function() {
				$('#overlay').fadeIn(400, 
					function(){ 
						$('#modal_success') 
							.css('display', 'block') 
							.animate({opacity: 1, top: '50%'}, 200);
				});
				$('#modal_form').fadeOut(300);
			} 
		});

		$('.fancybox').fancybox();

        $(document).ready(function() { // вся магия после загрузки страницы		
			
			$('#btn-elka90').click(function(){
				$('#treesize').val('Ель 90 см');
			});
			$('#btn-elka120').click(function(){
				$('#treesize').val('Ель 120 см');
			});
			$('#btn-elka150').click(function(){
				$('#treesize').val('Ель 150см');
			});
			$('#btn-elka210').click(function(){
				$('#treesize').val('Ель 210 см');
			});
			$('#btn-elka240').click(function(){
				$('#treesize').val('Ель 240 см');
			});
			
			$('.selectbutton').click(function(){
				$('#treesize').val($('#treeselect').val());
			})
			
//			$('.ordersubmit, .ordersubmit2').click(function(){
//				
//				var $form =  $(this).closest('form'),
//					$phone = $form.find('input[name="phone"]');
//				
//				if(!$phone.val()){
//					$phone.addClass('error-validate');
//				} else{
//					$phone.removeClass('error-validate');
//				}
//				
//				$phone.focusout(function(){
//					$phone.removeClass('error-validate');
//				});
//			
//			});
			
			$('.privacy').click(function(event){
				event.preventDefault();
				$('#overlay_privacy').fadeIn(400,function(){
					$('#modal_privacy').css('display', 'block').animate({opacity: 1, top: '50%'}, 200); 
				});
			});
			
			$('#modal_close_privacy,#overlay_privacy').click( function(){ // ловим клик по крестику или подложке
				$('#modal_privacy')
					.animate({opacity: 0, top: '45%'}, 200,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
						function(){ // после анимации
							$(this).css('display', 'none'); // делаем ему display: none;
							$('#overlay_privacy').fadeOut(400); // скрываем подложку
						}
					);
			});			
			
			$('#modal_close_success,#overlay').click( function(){ // ловим клик по крестику или подложке
				$('#modal_success')
					.animate({opacity: 0, top: '45%'}, 200,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
						function(){ // после анимации
							$(this).css('display', 'none'); // делаем ему display: none;
							$('#overlay').fadeOut(400); // скрываем подложку
						}
					);
			});
			
			$('.go').click( function(event){ // ловим клик по ссылки с id="go"
				event.preventDefault(); // выключаем стандартную роль элемента
				$('#overlay').fadeIn(400, // сначала плавно показываем темную подложку
					function(){ // после выполнения предъидущей анимации
						$('#modal_form') 
							.css('display', 'block') // убираем у модального окна display: none;
							.animate({opacity: 1, top: '50%'}, 200); // плавно прибавляем прозрачность одновременно со съезжанием вниз
				});
			});
			/* Закрытие модального окна, тут делаем то же самое но в обратном порядке */
			$('#modal_close, #overlay').click( function(){ // ловим клик по крестику или подложке
				$('#treesize').val('');
				$('#modal_form')
					.animate({opacity: 0, top: '45%'}, 200,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
						function(){ // после анимации
							$(this).css('display', 'none'); // делаем ему display: none;
							$('#overlay').fadeOut(400); // скрываем подложку
						}
					);
			});
		});

var go = document.getElementsByClassName('go');
var key;

go[0].onclick = function() {
	key = 0; window.location.href = '#'+key;
}

go[1].onclick = function() {
	key = 1; window.location.href = '#'+key;
}

go[2].onclick = function() {
	key = 2; window.location.href = '#'+key;
}

go[3].onclick = function() {
	key = 3; window.location.href = '#'+key;
}

go[4].onclick = function() {
	key = 4; window.location.href = '#'+key;
}

go[5].onclick = function() {
	key = 5; window.location.href = '#'+key;
}

go[6].onclick = function() {
	key = 6; window.location.href = '#'+key;
}

go[7].onclick = function() {
	key = 7; window.location.href = '#'+key;
}

go[8].onclick = function() {
	key = 8; window.location.href = '#'+key;
}

go[9].onclick = function() {
	key = 9; window.location.href = '#'+key;
}

var ordersubmit = document.getElementsByClassName('goit');
ordersubmit[0].onclick = function() {
	key = 10; window.location.href = '#'+key;
}

ordersubmit[1].onclick = function() {
	key = 11; window.location.href = '#'+key;
}

$(document).ready(function() {
    $("#form").submit(function() { //We set the event to send the form with id = form
            event.preventDefault();
            var form_data = $(this).serialize(); //We collect all the data from the form
            $.ajax({
            type: "POST", //The dispatch method
            url: "mail.php", //the path to the php file
            data: form_data,
            /*success: function() {
                   //code in this section is performed when a message is sent successfully
                   alert("Your message has been sent");
            }*/
    });
    });
    });        