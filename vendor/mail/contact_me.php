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

//$headers = array (
//	'From' => $from,
//	'To' => $to,
//	'Reply-To' => $email_address,
//	'Subject' => $email_subject);
//$host = "smtp-relay.sendinblue.com";
//$port = "587";
//$username = "owner@mhrtech.my";
//$password = "xsmtpsib-6b9f65ec99eca8932692ae797d47ebffe716d473b676671d438ab19572e4b319-ANCVBrqbKt8wfHQF";
//$smtp = Mail::factory('smtp',
//array ('host' => $host,
//	'port' => $port,
//	'auth' => true,
//	'username' => $username,
//	'password' => $password));
//$mail = $smtp->send($to, $headers, $email_body);
//return true; 
//if (PEAR::isError($mail)) {
//	echo("<p>" . $mail->getMessage() . "</p>");
//} else {
//	echo("<p>Your message is successfully sent!</p>");
//}

include 'path/to/mailin-api/Mailin.php';
$mailin = new Mailin('owner@mhrtech.my', 'N3EcQVmsXwrkKaI4');
$mailin->
  addTo('member@roipmars.org.my', 'Member.RoIPMARS')->
  setFrom('noreply@roipmars.org.my', 'NoReply.RoIPMARS')->
  setReplyTo($from,$name)->
  setSubject($email_subject)->
  setText('Someone reached contact form via www.roipmars.org.my')->
  setHtml($email_body);
$res = $mailin->send();
/**
Successful send message will be returned in this format:
{'result' => true, 'message' => 'Email sent'}
*/