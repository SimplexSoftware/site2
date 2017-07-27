<?php 
$email = $_POST['email'];
$email = htmlspecialchars($email);
$email = urldecode($email);
$email = trim($email);
if (mail("info@simplex-software.ru", "Подписка на рассылку", "E-mail: ".$email ,"From: info@simplex-software.ru \r\n"))
 {     echo "сообщение успешно отправлено"; 
} else { 
    echo "при отправке сообщения возникли ошибки";
 ?>