<?
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

$mail->setFrom('jeniock@mail.ru');
$mail->addAddress('jeniock@mail.ru'); 
$mail->Subject = 'Заявка на консультацию';
        $body = '<html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
						  		<p>Имя: '.$_POST['name'].'</p>
								<p>Фамилия: '.$_POST['surname'].'</p>
								<p>Телефон: '.$_POST['tel'].'</p>
                    </body>
                </html>'; 
        $mail->Body = $body;
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены';
	}
	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>
