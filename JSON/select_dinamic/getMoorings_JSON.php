<?php

    header("Content-Type: application; application/json");

    require_once "../conn.php";

    $owner = $_POST["dniOwner"];
    $query = "SELECT idAmarrament id, numeroAmarrament numero from amarrament WHERE dniPropietari = :dni";

    try {
        $statement = $conn->prepare($query);
        $statement->bindValue(":dni", $owner, PDO::PARAM_INT);
        $statement->execute();
        $moorings = $statement->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        print $e->getMessage();
    }
    echo json_encode($moorings);