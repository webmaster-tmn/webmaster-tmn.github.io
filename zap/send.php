<?php {
//    use PHPMailer\PHPMailer\PHPMailer;
//    use PHPMailer\PHPMailer\Exception;

    require 'src/Exception.php';
    require 'src/PHPMailer.php';

    date_default_timezone_set('Europe/Moscow');
    $dt = date("d F Y, H:i:s"); // дата и время
    $name = $_POST["fio"];
    $name = htmlspecialchars($name); // обрабатываем
    $phone = $_POST["phone"];
    $phone = htmlspecialchars($phone);
//    $file = $_POST["photo"];


    $mess = "<b>Дата и Время:</b> $dt <br>";
    if ($name) {
        $mess .= "<b>Имя:</b> $name<br>";
    }
    if ($phone) {
        $mess .= "<b>Телефон:</b> $phone<br>";
    }


    $mail = new PHPMailer\PHPMailer\PHPMailer;
    $mail->setFrom('from@example.com', 'Запчасти для стиральных машин в Брянске');
    $mail->addAddress('ilyabryansk@yandex.ru', 'Получатель');
    $mail->Subject = 'Заказ';
    $mail->IsHTML(true);
    $mail->msgHTML($mess);
    $mail->CharSet = "UTF-8";
    // Attach uploaded files
    
    foreach ($_FILES as $name => $file) {

        if (is_uploaded_file($file["tmp_name"])) {
            $mail->addAttachment($file["tmp_name"], $file['name']);
        }
    }

//    $mail->addAttachment("index.html");
    $r = $mail->send();

    if ($r) {
        print"
<script language='Javascript' type='text/javascript'>
location.href = '/thanks.html';
</script>";
    } else {
        print"
<script language='Javascript' type='text/javascript'>
history.back();
alert('Ошибка отправки! Попробуйте еще раз')
</script>";
    }
}
?>