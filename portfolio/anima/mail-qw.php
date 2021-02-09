<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$holiday = $_POST['holiday'];
$gender = $_POST['gender'];
$age = $_POST['age'];
$number_guets = $_POST['number_guets'];
$location = $_POST['location'];
$character = $_POST['character'];

$token = "734888431:AAGH1DDQ-1MNtEjVPpuivkxRUnN5mFouPgA";
$chat_id = "-366798294";
$arr = array(
    'Ответы квиз:',
    'Имя пользователя: ' => $name,
    'Телефон: ' => $phone,
    'Какой праздник вы хотите организовать:' => $holiday,
    'Пол ребенка: ' => $gender,
    'Возраст: ' => $age,
    'Количество гостей на мероприятии: ' => $number_guets,
    'Предпочтения по месту проводения: ' => $location,
    'Какого персонажа хотел бы видеть ваш ребёнок?' => $character,

);

foreach ($arr as $key => $value) {
    $txt .= "<b>" . $key . "</b> " . $value . "%0A";
}
;

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

if ($sendToTelegram) {
    header('Location: thanks-v2.html');
} else {
    echo "Error";
}
