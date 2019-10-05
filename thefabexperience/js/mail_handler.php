<?php 

if(isset($_POST['submit'])){
 $to = "djkoatz@gmail.com"; //this is your Email address 
 $from = $_POST['email']; //this is the sender's Email addres 
 $name = $_POST['name'];
 $mobile = $_POST['mobile'];

//$last_name = $_POST['last_name'];
$subject = "Catering Inquiry";
$subject2 = "Copy of your form submission";
$message = $name . " ". $from . " wrote the following:" . "\n\n" . $_POST['message'];
$message2 = "Here is a copy of your message " . $name . "\n\n". $_POST['message'];

$headers = "From" .$from;
$headers2 = "From:" .$to;
mail($to,$subject,$message,$headers);
mail($from,$subject2,$message2,$headers2); //sends a copy of the message to the sender
echo "Mail sent. Thank you ". $name . ", we will contact you shortly";
//You can also use header(Location: thank you.php); to redirect to another page.
//You cannot use header and echo together. It's one or the other 
}
?>