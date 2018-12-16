<?php
    header("Content-Type: application/json; charset=UTF-8");

    $url = "mysql:host=nautic;dbname=nautic";
    $user = "root";
    $pass = "nautic";

    try {
        $db = new PDO($url, $user, $pass);
        $statement = $db->prepare("SELECT * FROM amarrament");
        $statement->execute();
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    }

    print_r($result);
