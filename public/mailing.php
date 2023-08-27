<?php
use PHPMailer\PHPMailer\PHPMailer; 
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master\PHPMailer-master\src\Exception.php';
require 'PHPMailer-master\PHPMailer-master\src\PHPMailer.php';
require 'PHPMailer-master\PHPMailer-master\src\SMTP.php';

function send_to_self($name,$email,$message){
    $mail = new PHPMailer(true);                              
    $mail->isSMTP();                                     
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;           

    $mail->Username = 'colesamedcenter@gmail.com';             
    $mail->Password = 'colesamed112';                         
    $mail->SMTPSecure = 'tls';  
    $mail->Port = 587;    

    $mail->From = $email;
    $mail->FromName = $name;
    $mail->addAddress('colesamedcenter@gmail.com', 'Colesa');                 

    $mail->WordWrap = 50;                                 
    $mail->isHTML(true);                                  

    $mail->Subject = "New Message";
    $mail->Body    = "<b>From".$name."</b><br><br>".$message;
    $mail->AltBody = $message;

    return $mail->send();
}

function send_to_recipent($name, $email){
    $mail = new PHPMailer(true);                              
    $mail->isSMTP();                                     
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;                              
    $mail->Username = 'colesamedcenter@gmail.com';             
    $mail->Password = 'colesamed112';                         
    $mail->SMTPSecure = 'tls';  
    $mail->Port = 587;    

    $mail->From = 'colesamedcenter@gmail.com';
    $mail->FromName = 'Colesa Medical Center';
    $mail->addAddress($email, $name);

    $mail->WordWrap = 50;                                                           

    $mail->Subject = 'Thanks for Contacting us';
    $mail->Body    = '<h1>Hello'.$name.'</h1>
                      <p>We saw your message online and we are deligted to know that you are actively caring for
                      your health. We would get back to you as soon as we can but 
                      you can also reach us through our phone numbers</p>
                      <b>08058509928, 08110833331</b>
                      <p>Thanks again</p>';
    $mail->AltBody = 'Hello'.$name.'
                      We saw your message online and we are deligted to know that you are actively caring for
                      your health. We would get back to you as soon as we can but 
                      you can also reach us through our phone numbers
                      08058509928, 08110833331
                      Thanks again';

    return $mail->send();
}

if(isset($_POST)){
    $details = file_get_contents("php://input");
    $decoded_details = json_decode($details,true);
    $name = $decoded_details["name"];
    $email = $decoded_details["email"];
    $message = $decoded_details["message"];

    if(!empty($email) && !empty($name) && !empty($message)){
        if(filter_var($email,FILTER_VALIDATE_EMAIL)){
            if(send_to_self($name,$email,$message) && send_to_recipent($name, $email)){
                echo json_encode('sent successfully');
            }
            else{
                echo json_encode('could not send');
            }
        }
        else{
            echo json_encode("email not in correct format");
        }
    }
    else{
        echo json_encode("one or more empty values");
    }
}
?>