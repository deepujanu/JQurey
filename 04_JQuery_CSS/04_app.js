
var card_header = $('#form-card-header');
var card_header_text = $('.card-title');
var submit_button = $('#submit-button');

$('#login-button').click(function(){
	card_header.removeClass('bg-warning');
	card_header.removeClass('bg-teal').addClass(bg-success);
	card_header_text.text('Login Here');
	submit_button.removeClass('btn-warning');
	submit_button.removeClass('btn-teal').addClass('btn-success');
	submit_button.text('Login');
	});

$('#register-button').click(function(){
	card_header.removeClass('bg-warning');
	card_header.removeClass('bg-teal').addClass(bg-success);
	card_header_text.text('Login Here');
	submit_button.removeClass('btn-warning');
	submit_button.removeClass('btn-teal').addClass('btn-success');
	submit_button.text('Login');	
});

$('#signup-button').click(function(){
	card_header.removeClass('bg-success');
	card_header.removeClass('bg-teal').addClass(bg-success);
	card_header_text.text('Login Here');
	submit_button.removeClass('btn-warning');
	submit_button.removeClass('btn-teal').addClass('btn-success');
	submit_button.text('Login');
})
