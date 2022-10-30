<?php
if(empty($_POST['name']) || 
   empty($_POST['email']) || 
   empty($_POST['phone']) || 
   empty($_POST['message']) || 
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
     echo "Error: all fields are required";
     return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));

$from = "noreply@roipmars.org.my";
$to = "hafizi.ruslan@roipmars.org.my";
$email_subject = "ROIPMARS Website Contact Form";
$email_body = "Someone reached contact form via www.roipmars.org.my\n\n Below is the details:\n Name: $name \n Email: $email_address \n Phone Number: $phone \n Message: \n $message";   

$headers = array (
	'From' => $from,
	'To' => $to,
	'Reply-To' => $email_address,
	'Subject' => $email_subject);
$host = "smtp-relay.sendinblue.com";
$port = "587";
$username = "owner@mhrtech.my";
$password = "xsmtpsib-6b9f65ec99eca8932692ae797d47ebffe716d473b676671d438ab19572e4b319-W6G5j1V3Bhz0OAQq";
$smtp = Mail::factory('smtp',
array ('host' => $host,
	'port' => $port,
	'auth' => true,
	'username' => $username,
	'password' => $password));
$mail = $smtp->send($to, $headers, $email_body);
return true; 
if (PEAR::isError($mail)) {
	echo("<p>" . $mail->getMessage() . "</p>");
} else {
	echo("<p>Your message is successfully sent!</p>");
}

////Import PHPMailer classes into the global namespace
////These must be at the top of your script, not inside a function
//use PHPMailer\PHPMailer\PHPMailer;
//use PHPMailer\PHPMailer\SMTP;
//use PHPMailer\PHPMailer\Exception;
//
////Load Composer's autoloader
//require __DIR__ . '/vendor/mail/autoload.php';
//
////Create an instance; passing `true` enables exceptions
//$mail = new PHPMailer(true);
//
//try {
//    //Server settings
//    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
//    $mail->isSMTP();                                            //Send using SMTP
//    $mail->Host       = 'smtp-relay.sendinblue.com';                     //Set the SMTP server to send through
//    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
//    $mail->Username   = 'owner@mhrtech.my';                     //SMTP username
//    $mail->Password   = 'xsmtpsib-6b9f65ec99eca8932692ae797d47ebffe716d473b676671d438ab19572e4b319-W6G5j1V3Bhz0OAQq';                               //SMTP password
//    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
//    $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
//
//    //Recipients
//    $mail->setFrom('noreply@roipmars.org.my', 'WebContactForm');
//    $mail->addAddress('hafizi.ruslan@roipmars.org.my', 'ROIPMARS Member Secretariat');     //Add a recipient
////    $mail->addAddress('ellen@example.com');               //Name is optional
//    $mail->addReplyTo($email_address, $name);
////    $mail->addCC('cc@example.com');
////    $mail->addBCC('bcc@example.com');
//
//    //Attachments
////    $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
////    $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name
//
//    //Content
//    $mail->isHTML(true);                                  //Set email format to HTML
//    $mail->Subject = $email_subject;
//    $mail->Body    = $email_body;
//    $mail->AltBody = $email_body;
//
//    $mail->send();
//    echo '<p>Your message is successfully sent!</p>';
//} catch (Exception $e) {
//    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
//}