<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$option1 = $_POST['option1'];
$option2 = $_POST['option2'];
$option3 = $_POST['option3'];


//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication 
$mail->Username = 'kirchchi98@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'BO3irDdOppnYNltu3G9V'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('kirchchi98@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('kirchchi@mail.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта 3';
$mail->Body    = '' .$option1 . "<br>" . $option2. "<br>" . $option3 . '<br> хочет такой сайт!';
$mail->AltBody = '';

if(!$mail->send()) {
    return 'Error';
} else {
    return 'success';
}
?>