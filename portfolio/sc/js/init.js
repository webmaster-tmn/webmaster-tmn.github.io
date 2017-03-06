 $(function() {
$(".popup").magnificPopup();
$("a[href='#callback']").click(function() {
		var dataForm = $(this).data("form");
		var dataText = $(this).data("text");
		$(".form-callback h4").text(dataText);
		$(".form-callback [name=admin-data]").val(dataForm);
	});

//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
$(".popup"),click(function(){
	var dataForm = $(this).data("form");
	$(".contact-form [name=admin-data]").val(dataForm);
});
})