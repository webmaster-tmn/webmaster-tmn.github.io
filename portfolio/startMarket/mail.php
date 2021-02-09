<?php

$method = $_SERVER['REQUEST_METHOD'];


$name = $_POST['Имя'];
$surname = $_POST['Фамилия'];
$phone = $_POST['Телефон'];
$email = $_POST['Email'];
$role = $_POST['Роль'];
$newsletter = $_POST['Подписка_на_рассылку'];
$namestartap = $_POST['Название_стартапа/компании'];
$essenceproject = $_POST['Суть_проекта'];
$linkproject = $_POST['Ссылка_на_сайт/презентацию'];
$salesstage = $_POST['Стадия_продаж'];
$expenses = $_POST['Траты_на_компанию_в_месяц'];
$linksite= $_POST['Ссылка_на_сайт'];
$projectneed= $_POST['Потребность_проекта'];
$tools1= $_POST['Брендированный_блокчейн_кошелек'];
$tools2= $_POST['Собственный_токен'];
$tools3= $_POST['Поддержание_Ликвидности'];
$tools4= $_POST['Автоматизация_обмена_и_Торгов'];
$tools5= $_POST['Экспертная_Аналитика_или_Эдвайзеры'];
$tools6= $_POST['Упаковка_проекта_и_Маркетинг'];
$tools7= $_POST['Построение_экономики_проекта'];
$announce= $_POST['Согласие_на_получение_анонсов'];
$token = "951957829:AAFvIq8LLETlrNeLvGUImU7dmHvgiwqVFFY";
$chat_id = "-352626878";
$arr = array(
    
    'Имя пользователя: ' => $name,
    'Фамилия: ' => $surname,
    'Телефон: ' => $phone,
    'Почта: ' => $email,
    'Роль: ' => $role,
    'Подписка на еженедельную рассылку: ' => $newsletter,
    'Название стартапа/компании: ' => $namestartap,
    'Суть проекта: ' => $essenceproject,
    'Ссылка на сайт/презентацию: ' => $linkproject,
    'Стадия продаж: ' => $salesstage,
    'Траты на компанию в месяц: ' => $expenses,
    'Ссылка на сайт: ' => $linksite,
    'Потребность проекта: ' => $projectneed,
    'Брендированный блокчейн кошелек: ' => $tools1,
    'Собственный токен: ' => $tools2,
    'Поддержание Ликвидности: ' => $tools3,
    'Автоматизация обмена и Торгов: ' => $tools4,
    'Экспертная Аналитика или Эдвайзеры: ' => $tools5,
    'Упаковка проекта и Маркетинг: ' => $tools6,
    'Построение экономики проекта: ' => $tools7,
    'Согласие на получение анонсов: ' => $announce,

);
print_r($_POST);
foreach ($arr as $key => $value) {
    $txt .= "<b>" . $key . "</b> " . $value . "%0A";
}
;

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

//Script Foreach
$c = true;
if ($method === 'POST') {

    $project_name = "StartMarket";
    $admin_email = "denis.derjabin@yandex.ru";
    $form_subject = trim($_POST["form_subject"]);

    foreach ($_POST as $key => $value) {
        if ($value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject") {
            $message .= "
			" . (($c = !$c) ? '<tr>' : '<tr style="background-color: #f8f8f8;">') . "
			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		</tr>
		";
        }
    }
} else if ($method === 'GET') {

    $project_name = trim($_GET["project_name"]);
    $admin_email = trim($_GET["admin_email"]);
    $form_subject = trim($_GET["form_subject"]);

    foreach ($_GET as $key => $value) {
        if ($value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject") {
            $message .= "
			" . (($c = !$c) ? '<tr>' : '<tr style="background-color: #f8f8f8;">') . "
			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		</tr>
		";
        }
    }
}

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text)
{
    return '=?UTF-8?B?' . Base64_encode($text) . '?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: ' . adopt($project_name) . ' <' . $admin_email . '>' . PHP_EOL .
    'Reply-To: ' . $admin_email . '' . PHP_EOL;

mail($admin_email, adopt($form_subject), $message, $headers);
