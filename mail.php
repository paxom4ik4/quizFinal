<?php
$number= $_POST['number-of-cows'];
$email = $_POST['amount-of-milk"'];
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$fio = urldecode($fio);
$email = urldecode($email);
$fio = trim($fio);
$email = trim($email);
if (mail("dev.pavel.zelenko@gmail.com", "Заявка с сайта", "ФИО:".$number.". E-mail: ".$email ,"From: dev.pavel.zelenko@mail.ru"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>