<?php
$url = "mysql:host=192.168.1.20;dbname=json_act_1";
$user = "root";
$pass = "mrm1998";

$result = array();

try {
    $db = new PDO($url, $user, $pass);
    $statement = $db->prepare("select amarrament.idAmarrament, zona.idZona, port.idPort from amarrament, port, zona
    where port.idPort = zona.idPort and amarrament.idZona = zona.idZona;");
    $statement->execute();
    while ($row = $statement->fetch()) {
        $result[] = $row;
    }
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}

echo json_encode($result);