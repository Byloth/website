<?php
    require_once(__DIR__ . "/environment.php");

    function json_response($responseCode = 204, $responseData = null)
    {
        http_response_code($responseCode);

        die(json_encode($responseData));
    }

    $recipient = __RECIPIENT__;
    if (!isSet($recipient))
    {
        json_response(500, [
            "type" => "env_error_recipient",
            "text" => "Sorry... An error has occurred. Please, try contact me in some other way."
        ]);
    }

    $sender = __SENDER__;
    if (!isSet($sender))
    {
        json_response(500, [
            "type" => "env_error_sender",
            "text" => "Sorry... An error has occurred. Please, try contact me in some other way."
        ]);
    }

    $input = json_decode(file_get_contents("php://input"), true);
    if (empty($input))
    {
        json_response(400, [
            "type" => "empty_request",
            "text" => "You request is empty. It must be in AJAX JSON POST format."
        ]);
    }

    $name = filter_var($input["name"], FILTER_SANITIZE_STRING);
    $email = filter_var($input["email"], FILTER_SANITIZE_EMAIL);
    $subject =  filter_var($input["subject"], FILTER_SANITIZE_STRING);
    $message = filter_var($input["message"], FILTER_SANITIZE_STRING);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL))
    {
        json_response(400, [
            "type" => "invalid_email",
            "text" => "The e-mail address you wrote is invalid. Please, enter a valid one."
        ]);
    }

    if (!trim($message))
    {
        json_response(400, [
            "type" => "empty_message",
            "text" => "The message you wrote is empty. Please, enter a message before sending it."
        ]);
    }

    $boundary = "=_NextPart_" . md5(uniqid(time()));

    $headers = null;
    $headers .= "From: \"Byloth's Website\" <website@byloth.net>\r\n";
    $headers .= "Reply-To: \"" . $name . "\" <" . $email . ">\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/alternative;\n\tboundary=\"" . $boundary . "\"\r\n";
    $headers .= "X-Mailer: PHP " . phpversion();

    $message_body = null;
    $message_body .= "This is a multi-part message in MIME format.\r\n\r\n";
    $message_body .= "--" . $boundary . "\r\n";
    $message_body .= "Content-Type: text/plain;\n\tcharset=\"utf-8\"\r\n";
    $message_body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
    $message_body .= $message . "\r\n\r\n";
    $message_body .= "\r\n--" . $boundary . "--\r\n";

    if (mail($recipient, $subject, $message_body, $headers))
    {
        json_response(200, [
            "type" => "success",
            "text" => "Thanks " . $name . " for your message! I'll get back to you as soon as possible."
        ]);
    }

    json_response(500, [
        "type" => "unknown_error",
        "text" => "Sorry... An unexpected and unknown error has occurred."
    ]);
