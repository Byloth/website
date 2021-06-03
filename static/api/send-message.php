<?php
    define("BASE_URL", realpath(__DIR__ . "/../.."));

    require_once(BASE_URL . "/envs/smtp.php");
    require_once(BASE_URL . "/vendor/autoload.php");

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    function json_response($responseCode = 204, $responseData = null)
    {
        http_response_code($responseCode);

        die(json_encode($responseData));
    }

    $input = json_decode(file_get_contents("php://input"), true);
    if (empty($input))
    {
        json_response(400, [
            "type" => "empty_request",
            "text" => "You request is empty. It must be in 'application/json' format."
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
            "text" => "The message you wrote is empty. Please, enter a valid message before sending it."
        ]);
    }

    try
    {
        $mail = new PHPMailer(true);

        // Authentication
        //
        $mail -> isSMTP();
        $mail -> Host = SMTP_HOST;
        $mail -> SMTPAuth = true;
        $mail -> Username = SMTP_USER;
        $mail -> Password = SMTP_PASS;
        $mail -> SMTPSecure = PHPMailer :: ENCRYPTION_SMTPS;
        $mail -> Port = SMTP_PORT;

        // Addresses
        //
        $mail -> setFrom(SENDER_MAIL, SENDER_NAME);
        $mail -> addAddress(RECIPIENT_MAIL, RECIPIENT_NAME);
        $mail -> addReplyTo($email, $name);

        // Content
        //
        $mail -> Subject = $subject;
        $mail -> Body = $message;

        $mail -> send();

        json_response(200, [
            "type" => "success",
            "text" => "Thanks " . $name . " for your message! I'll get back to you as soon as possible."
        ]);
    }
    catch (Exception $e)
    {
        json_response(500, [
            "type" => "smtp_error",
            "text" => "Sorry... An error has occurred. Please, try contact me in some other way."
        ]);
    }

    json_response(500, [
        "type" => "unknown_error",
        "text" => "Sorry... An error has occurred. Please, try contact me in some other way."
    ]);
