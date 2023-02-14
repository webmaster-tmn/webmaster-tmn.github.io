<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

/*
	$mail->isSMTP();                                            //Send using SMTP
	$mail->Host       = 'smtp.example.com';                     //Set the SMTP server to send through
	$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
	$mail->Username   = 'user@example.com';                     //SMTP username
	$mail->Password   = 'secret';                               //SMTP password
	$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
	$mail->Port       = 465;                 
	*/

if (isset($_POST['name'])) {
	$name = htmlspecialchars(stripslashes($_POST['name']));
}
if (isset($_POST['phone'])) {
	$phone = htmlspecialchars(stripslashes($_POST['phone']));
}
if (isset($_POST['message'])) {
	$message = htmlspecialchars(stripslashes($_POST['message']));
}
if (isset($_POST['refrigerator_brand'])) {
	$refrigeratorBrand = htmlspecialchars(stripslashes($_POST['refrigerator_brand']));
}
if (isset($_POST['wm_brand'])) {
	$wmBrand = htmlspecialchars(stripslashes($_POST['wm_brand']));
}
if (isset($_POST['appearance'])) {
	$appearance = htmlspecialchars(stripslashes($_POST['appearance']));
}
if (isset($_POST['repaired'])) {
	$repaired = htmlspecialchars(stripslashes($_POST['repaired']));
}
if (isset($_POST['condition'])) {
	$condition = htmlspecialchars(stripslashes($_POST['condition']));
}
if (isset($_POST['age_technology'])) {
	$ageTechnology = htmlspecialchars(stripslashes($_POST['age_technology']));
}
if (isset($_POST['radio'])) {
	$radio = htmlspecialchars(stripslashes($_POST['radio']));
}
if (isset($_POST['choose_technique'])) {
	$chooseTechnique = htmlspecialchars(stripslashes($_POST['choose_technique']));
}
if (isset($_POST['choose_technique_2'])) {
	$chooseTechnique2 = htmlspecialchars(stripslashes($_POST['choose_technique_2']));
}

$file = $_FILES['image'];

//От кого письмо
$mail->setFrom('from@gmail.com', 'Имя отправителя'); // Указать нужный E-mail
//Кому отправить
$mail->addAddress('denis.derjabin@yandex.ru'); // Указать нужный E-mail
//Тема письма
$mail->Subject = 'Заявка с сайта Скупка';

//Тело письма


if (!empty($formname)) {
	$body .= "Форма: $formname <br>" . "\r\n";
}
if (!empty($name)) {
	$body .= "Имя: $name <br>" . "\r\n";
}
if (!empty($phone)) {
	$body .= "Телефон: $phone <br>" . "\r\n";
}
if (!empty($message)) {
	$body .= "Текст: $message <br>" . "\r\n";
}
if (!empty($refrigeratorBrand)) {
	$body .= "Марка холодильника: $refrigeratorBrand <br>" . "\r\n";
}
if (!empty($wmBrand)) {
	$body .= "Марка стиральной машины: $wmBrand <br>" . "\r\n";
}
if (!empty($appearance)) {
	$body .= "Внешний вид: $appearance <br>" . "\r\n";
}
if (!empty($repaired)) {
	$body .= "Подвергался ремонту: $repaired <br>" . "\r\n";
}
if (!empty($condition)) {
	$body .= "Техническое состояние: $condition <br>" . "\r\n";
}
if (!empty($ageTechnology)) {
	$body .= "Возраст техники: $ageTechnology <br>" . "\r\n";
}
if (!empty($radio)) {
	$body .= "Услуга: $radio <br>" . "\r\n";
}
if (!empty($chooseTechnique)) {
	$body .= "Техника: $chooseTechnique <br>" . "\r\n";
}
if (!empty($chooseTechnique2)) {
	$body .= "Техника: $chooseTechnique2 <br>" . "\r\n";
}



/*
	//Прикрепить файл
	*/


if (!empty($file['name'][0])) {
	for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
		$uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
		$filename = $file['name'][$ct];
		if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
			$mail->addAttachment($uploadfile, $filename);
			$rfile[] = "Файл $filename прикреплён";
		} else {
			$rfile[] = "Не удалось прикрепить файл $filename";
		}
	}
}

$mail->Body = $body;

//Отправляем
if (!$mail->send()) {
	$message = 'Ошибка';
} else {
	$message = 'Данные отправлены!';
}

$response = ['message' => $message];

header('Content-type: application/json');
// header ('Location: thanks.html');
echo json_encode($response);
