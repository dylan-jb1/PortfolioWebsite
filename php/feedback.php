<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "portfolio_site";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$name = $conn -> real_escape_string($_POST['name']);
$content = $conn -> real_escape_string($_POST['content']);

if ($content!="")
{
  if ($name != "")
  {
    $sql = "INSERT INTO feedback (username, feedback) VALUES ('$name', '$content')";
  }
  else
  {
    $sql = "INSERT INTO feedback (feedback) VALUES ('$content')";
  }
}

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>