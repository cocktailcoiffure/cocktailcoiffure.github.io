function sendForm()
{
	$('#cc-error-msg').hide();
	$('#cc-error-msg').removeClass("alert-warning alert-info");
	
	var name = $('#cc_form_name').val();
	var tel = $('#cc_form_tel').val();
	var desc = $('#cc_form_desc').val();
	var captcha = grecaptcha.getResponse()
	
	var errors = "";
	
	if(name.length == 0)
		errors += "Veuillez renseigner votre nom.<br/>";
	
	if(tel.length == 0  || !$.isNumeric(tel))
		errors += "Veuillez renseigner votre numéro de téléphone.<br/>";

	if(captcha.length == 0)
		errors += "Veuillez cocher la case 'Je ne suis pas un robot'.<br/>";

	
	if(errors.length == 0)
	{
		$.ajax({
			method: "POST",
			url: "sendEmail.php",
			data: { 
				name: name, 
				tel: tel,
				desc: desc,
				captcha: captcha
			}
		})
		.done(function( data ) {
			grecaptcha.reset();
			if(data == "OK") 
			{
				$('#cc_form_name').val('');
				$('#cc_form_tel').val('');
				$('#cc_form_desc').val('Bonjour,\r\nVeuillez me rappeler pour prendre rendez vous.\r\nA bientôt');
				
				$('#cc-error-msg').addClass("alert-info");
				$('#cc-error-msg').html("Votre message est enregistré!");
				$('#cc-error-msg').show();
			}
			else 
			{
				$('#cc-error-msg').addClass("alert-warning");
				$('#cc-error-msg').html(data);
				$('#cc-error-msg').show();
			}
		});
	}
	else
	{
		$('#cc-error-msg').addClass("alert-warning");
		$('#cc-error-msg').html(errors);
		$('#cc-error-msg').show();
	}
	setTimeout(dismiss, 4000);
}

function dismiss() {
	$('#cc-error-msg').hide();
}