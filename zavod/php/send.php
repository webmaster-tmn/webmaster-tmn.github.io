<?php
 
/* Задаем переменные */
$name = htmlspecialchars($_POST["name"]);
$email = htmlspecialchars($_POST["email"]);
$comments = htmlspecialchars($_POST["comments"]);
$bezspama = htmlspecialchars($_POST["bezspama"]);
 
/* Ваш адрес и тема сообщения */
$address = "stropa55@yandex.ru";
$sub = "Сообщение с сайта ХХХ";
 
/* Формат письма */
$mes = "Сообщение с сайта ХХХ.\n
Имя отправителя: $name 
Электронный адрес отправителя: $email
Текст сообщения:
$comments";
 
 
if (empty($bezspama)) /* Оценка поля bezspama - должно быть пустым*/
{
/* Отправляем сообщение, используя mail() функцию */
$from  = "From: $name <$email> \r\n Reply-To: $email \r\n";
if (mail($address, $sub, $mes, $from)) {
	header('Refresh: 5; URL=http://biznessystem.ru');
	echo '<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    <body>Письмо отправлено, через 5 секунд вы вернетесь на страницу XXX</body>';}
else {
	header('Refresh: 5; URL=http://xn----8sbgimkgihbmjbh7dwhpa.xn--p1ai');
	echo '<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    <body>Письмо не отправлено, через 5 секунд вы вернетесь на страницу YYY</body>';}
}
exit; /* Выход без сообщения, если поле bezspama заполнено спам ботами */
?>