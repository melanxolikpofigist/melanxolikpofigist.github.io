/*  Скопируйте код ниже в ваш js файл. (JavaScript). */

$(document).ready(function(e) {
	$("input[placeholder]").placeholder();
	$("#search-block-form .form-item input").focus(function(){
		$("#search-block-form").addClass("focus-active");
			})
	.blur(function(){
		$("#search-block-form").removeClass("focus-active");
	});
});

/* Конец */