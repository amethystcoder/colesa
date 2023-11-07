<?php
use PHPMailer\PHPMailer\PHPMailer; 
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master\PHPMailer-master\src\Exception.php';
require 'PHPMailer-master\PHPMailer-master\src\PHPMailer.php';
require 'PHPMailer-master\PHPMailer-master\src\SMTP.php';

function send_to_self($details){
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
    $mail->Body    = "<b>From ".$details["salutation"]." ".$details["legal_name"]." ".$details["legal_surname"]."</b><br>"."
    <h2>Details</h2><br>"."birthdate".$details["birthdate"]."<br>"."sex".$details["sex"].
    "<br>"."requester_name".$details["requester_name"]."<br>"."mobileno".$details["mobileno"]."<br>"
    ."email".$details["email"]."<br>"."appointment_type".$details["appointment_type"]."<br>"
    ."appointment_reason".$details["appointment_reason"]."<br>"."followupmethod".$details["followupmethod"]."<br>";
    $mail->AltBody = "<b>From ".$details["salutation"]." ".$details["legal_name"]." ".$details["legal_surname"]."</b><br>"."
    <h2>Details</h2><br>"."birthdate".$details["birthdate"]."<br>"."sex".$details["sex"].
    "<br>"."requester_name".$details["requester_name"]."<br>"."mobileno".$details["mobileno"]."<br>"
    ."email".$details["email"]."<br>"."appointment_type".$details["appointment_type"]."<br>"
    ."appointment_reason".$details["appointment_reason"]."<br>"."followupmethod".$details["followupmethod"]."<br>";

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

function all_required_values_present($decoded_details){
    return 
    !empty($decoded_details["legal_name"]) && !empty($decoded_details["legal_surname"]) &&
    !empty($decoded_details["birthdate"]) && !empty($decoded_details["sex"]) &&
    !empty($decoded_details["mobileno"]) && !empty($decoded_details["email"]) &&
    !empty($decoded_details["appointment_type"]) && !empty($decoded_details["appointment_reason"]) &&
    !empty($decoded_details["followupmethod"]);
}

if(isset($_POST)){
    $details = file_get_contents("php://input");
    $decoded_details = json_decode($details,true);
        
    $salutation = $decoded_details["salutation"];
    $legal_name = $decoded_details["legal_name"];
    $legal_surname = $decoded_details["legal_surname"];
    $birthdate = $decoded_details["birthdate"];
    $sex = $decoded_details["sex"];
    $requester_name = $decoded_details["requester_name"];
    $mobileno = $decoded_details["mobileno"];
    $email = $decoded_details["email"];
    $appointment_type = $decoded_details["appointment_type"];
    $appointment_reason = $decoded_details["appointment_reason"];
    $followupmethod = $decoded_details["followupmethod"];

    if(all_required_values_present($decoded_details)){
        if(filter_var($email,FILTER_VALIDATE_EMAIL)){
            if(send_to_self($decoded_details) && send_to_recipent($name, $email)){
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