<?php
    header("Content-Type: application/json; charset=UTF-8");

    $url = "mysql:host=192.168.1.20;dbname=json_act_1";
    $user = "root";
    $pass = "mrm1998";

    $result = array();

    try {
        $db = new PDO($url, $user, $pass);
        $statement = $db->prepare("SELECT * FROM amarrament;");
        $statement->execute();
        while ($row = $statement->fetch()) {
            $result[] = $row;
        }
    } catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    }

    echo json_encode($result);
