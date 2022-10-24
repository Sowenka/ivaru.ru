<?php

var_dump($_POST);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once 'PHPMailer/src/Exception.php';
require_once 'PHPMailer/src/PHPMailer.php';
require_once 'PHPMailer/src/SMTP.php';


$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';

// Настройки SMTP
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = 0;

$mail->Host = 'ssl://smtp.yandex.ru';
$mail->Port = 465;
$mail->Username = 'xxx';
$mail->Password = 'xxx';

// От кого
$mail->setFrom('xxx', 'Заявка с сайта');

// Кому
$mail->addAddress('xxx');
$mail->Subject = "[Заявка с формы обратной связи ivaru.ru]";

// Тема письма
$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$message = $_POST["message"];
$email_template = "template_mail.html";


// Тело письма
$body = file_get_contents($email_template);
$body = str_replace('%name%', $name, $body);
$body = str_replace('%email%', $email, $body);
$body = str_replace('%phone%', $phone, $body);
$body = str_replace('%message%', $message, $body);
$mail->msgHTML($body);




if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['recaptcha_response'])) {

	// Создаем POST запрос
	$recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
	$recaptcha_secret = 'xxx';
	$recaptcha_response = $_POST['recaptcha_response'];

	// Отправляем POST запрос и декодируем результаты ответа
	$recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
	$recaptcha = json_decode($recaptcha);

	// Принимаем меры в зависимости от полученного результата
	if ($recaptcha->score >= 0.5) {
		echo "<div class='notification is-info'>Проверка пройдена - отправляем сообщение <br>";
		echo "Успех: " . $recaptcha->success . "<br>";
		echo "Баллы: " . $recaptcha->score . "<br>";
		echo "Дата: " . $recaptcha->challenge_ts . "<br></div>";
	} else {
		die("Спам не пройдет");
		// echo "<div class='notification is-danger'>Проверка не пройдена. Показываем ошибку.</div>";
	}

}


if (!$mail->send()) {
	$message = "Ошибка отправки";
} else {
	$message = "Данные отправлены!";
}

$response = ["message" => $message];
header('Content-type: application/json');
echo json_encode($response);

