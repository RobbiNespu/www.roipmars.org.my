<?php
if(empty($_POST['name']) || 
   empty($_POST['email']) || 
   empty($_POST['phone']) || 
   empty($_POST['message']) || 
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
     echo 'Error: all fields are required';
     return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));

$from = 'noreply@roipmars.org.my';
$to = 'hafizi.ruslan@roipmars.org.my';
$email_subject = 'ROIPMARS Website Contact Form';
$email_body = 'Someone reached contact form via Website\n\n Below is the details:\n Name: $name \n Email: $email_address \n Phone Number: $phone \n Message: \n $message';   

//$headers = array (
//	'From' => $from,
//	'To' => $to,
//	'Reply-To' => $email_address,
//	'Subject' => $email_subject);
//$host = 'smtp-relay.sendinblue.com';
//$port = '587';
//$username = 'roipmars.org.my@gmail.com';
//$password = 'xsmtpsib-477c4ba95edc6969ef14e2d6a2b1362b176fe22782aa10b958e2d169cbe8cc24-FsLbJT0jB8Iz9vrG';
//$smtp = Mail::factory('smtp',
//array ('host' => $host,
//	'port' => $port,
//	'auth' => true,
//	'username' => $username,
//	'password' => $password));
//$mail = $smtp->send($to, $headers, $email_body);
//return true; 
//if (PEAR::isError($mail)) {
//	echo('<p>' . $mail->getMessage() . '</p>');
//} else {
//	echo('<p>Your message is successfully sent!</p>');
//}
require_once(__DIR__ . '/vendor/autoload.php');

// Configure API key authorization: api-key
$config = SendinBlue\Client\Configuration::getDefaultConfiguration()->setApiKey('api-key', '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');

// Uncomment below line to configure authorization using: partner-key
// $config = SendinBlue\Client\Configuration::getDefaultConfiguration()->setApiKey('partner-key', 'YOUR_API_KEY');

$apiInstance = new SendinBlue\Client\Api\TransactionalEmailsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$sendSmtpEmail = new \SendinBlue\Client\Model\SendSmtpEmail(); // \SendinBlue\Client\Model\SendSmtpEmail | Values to send a transactional email
$sendSmtpEmail['to'] = array(array('email'=>'testmail@example.com', 'name'=>'John Doe'));
$sendSmtpEmail['templateId'] = 59;
$sendSmtpEmail['params'] = array('name'=>'John', 'surname'=>'Doe');
$sendSmtpEmail['headers'] = array('X-Mailin-custom'=>'custom_header_1:custom_value_1|custom_header_2:custom_value_2');

try {
    $result = $apiInstance->sendTransacEmail($sendSmtpEmail);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TransactionalEmailsApi->sendTransacEmail: ', $e->getMessage(), PHP_EOL;
}
/**
Successful send message will be returned in this format:
{'result' => true, 'message' => 'Email sent'}
*/