<?php
$name = $_POST['name'];
$email = $_POST['email'];
$contact = $_POST['phone'];
$cmpName = $_POST['company_name'];
$product = $_POST['product_name'];
$message = $_POST['message'];

//$con = mysqli_connect("localhost","root","","camweara_db") or die(mysqli_error($con));
//$user_query = "insert into contact_us(name,email,contact,message) values ('$Name','$Email','$Contact','$Message')";
//$result = mysqli_query($con,$user_query) or die(mysqli_error($con));

//send verification email
// $to      = 'info@modakatech.com'; // Send email to our user
// $subject = 'Contact_us'; // Give the email a subject
// $message = 'Message from '.$Email.' , Phone: '.$Contact.' , Message: '.$Message; // Our message above including the link

// $headers = 'From:info@modakatech.com' . "\r\n"; // Set from headers
// mail($to, $subject, $message, $headers); // Send our email


require 'Mail/class.phpmailer.php';

//using PHP mailer
$mail = new PHPMailer(); // create a new object
$mail->IsSMTP(); // enable SMTP
$mail->SMTPDebug = 0; // debugging: 1 = errors and messages, 2 = messages only
$mail->SMTPAuth = true; // authentication enabled
$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
$mail->Host = "smtp.gmail.com";
$mail->Port = 465; // or 587
$mail->IsHTML(true);
$mail->Username = "harshit.modakatech@gmail.com";
$mail->Password = "harshit@modaka";
$mail->SetFrom("harshit.modakatech@gmail.com");
$mail->Subject = "Contact us";
$mail->Body = 'Message from '.$email.' , Name: '.$name.', Phone: '.$contact.' , Company Name: '.$cmpName.' , Product: '.$product.' ,
	Message: '.$message;
$mail->AddAddress("modakatech@gmail.com");

if(!$mail->Send()) {
//echo "Mailer Error: " . $mail->ErrorInfo;
	echo "0";
}else {
//echo "Message has been sent";
	echo "1";
}


?>
