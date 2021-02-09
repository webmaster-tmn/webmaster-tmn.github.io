<?php

$method = $_SERVER['REQUEST_METHOD'];

$form = $_POST['Заявка_с_формы:'];
$name = $_POST['Имя'];
$phone = $_POST['Телефон'];
$email = $_POST['Почта'];
$token = "734888431:AAGH1DDQ-1MNtEjVPpuivkxRUnN5mFouPgA";
$chat_id = "-366798294";
$arr = array(
    'Заявка с формы:' => $form,
    'Имя пользователя: ' => $name,
    'Телефон: ' => $phone,
    'Почта: ' => $email,

);

foreach ($arr as $key => $value) {
    $txt .= "<b>" . $key . "</b> " . $value . "%0A";
}
;

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

//Script Foreach
$c = true;
if ($method === 'POST') {

    $project_name = "Anima";
    $admin_email = "okanimaok@gmail.com";
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
