<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = filter_var($_POST['email_newsletter'], FILTER_SANITIZE_EMAIL);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Email inválido!";
        exit;
    }

    $to = 'davitdt206@gmail.com';  // Seu email
    $subject = 'Nova inscrição na Newsletter';
    $message = "Novo email inscrito: " . $email;
    $headers = "From: no-reply@seudominio.com\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Obrigado por se inscrever!";
    } else {
        echo "Erro ao enviar email.";
    }
} else {
    echo "Método inválido.";
}
?>
