<?php

	$secret = "6Ldz4BkUAAAAAFNjD51ri_8YhcJ0G96_eeR86WbW";
	$captcha = "";
	$errors = "";
	
	$email = "cocktailcoiffure.esthetique@gmail.com";
	$password = "1cocktail";
	$name = "Contact site web";
	
	if (!isset($_POST["captcha"]))
		$errors .= "Veuillez cocher la case 'Je ne suis pas un robot'.<br/>";

	if (!isset($_POST["tel"]) || !is_numeric($_POST["tel"]))
		$errors .= "Veuillez renseigner votre numéro de téléphone.<br/>";
		
	if (!isset($_POST["name"]))
		$errors .= "Veuillez renseigner votre nom.<br/>";

	
	if(strlen($errors) > 0)
	{
		echo $errors;
	}
	else
	{
		$url = "https://www.google.com/recaptcha/api/siteverify?secret=".$secret."&response=".$_POST["captcha"]."&remoteip=".$_SERVER["REMOTE_ADDR"];
		//$content = file_get_contents($url, true);
		
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
		$content = curl_exec($ch);
		curl_close($ch);
		
		$response = json_decode($content);


		if ($response->success) 
		{
			require './phpMailer/PHPMailerAutoload.php';

			$mail = new PHPMailer;
			$mail->isSMTP();
			$mail->SMTPDebug = 0;
			$mail->Debugoutput = 'html';
			$mail->Host = 'smtp.gmail.com';
			$mail->Port = 587;
			$mail->SMTPSecure = 'tls';
			$mail->SMTPAuth = true;

			$mail->Username = $email;
			$mail->Password = $password;

			$mail->setFrom($email, $name);
			$mail->addAddress($email, $name);
			$mail->Subject = $_POST["name"] .' : '. $_POST["tel"];
			$mail->Body = 'Nom: '. $_POST["name"] .'
			
Téléphone: '. $_POST["tel"] .'

Message: '. $_POST["desc"];

			if (!$mail->send()) {
				echo "Une erreur est survenue durant l'envoi du formulaire, veuillez contacter cocktail coiffure directement par téléphone au 03 88 82 93 90";
			} else {
				echo "OK";
			}
		} 
		else 
		{
			echo $content;
			echo "Erreur durant la vérification du formulaire, veuillez reconfirmer.";
		}
	}

?>
