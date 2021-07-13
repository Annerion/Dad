<?php
session_start();
if(isset($_SESSION['name'])){
    $selection = $_POST['image'];
    file_put_contents("log.html", $selection, FILE_APPEND | LOCK_EX);
}
?>

<?php
  // The global $_POST variable allows you to access the data sent with the POST method by name
  // To access the data sent with the GET method, you can use $_GET
  $say = htmlspecialchars($_POST['say']);
  $to  = htmlspecialchars($_POST['to']);

  echo  $say, ' ', $to;
?>