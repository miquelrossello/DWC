<?php
    header("Content-Type: application; application/json");

    require_once "../conn.php";

    $mooring = $_POST["idMooring"];
    $query = "SELECT idTarifa FROM tarifa_te_amarrament where idAmarrament = :idMooring";

    try {
        $statement = $conn->prepare($query);
        $statement->bindValue(":idMooring", $mooring, PDO::PARAM_INT);
        $statement->execute();
        $rates = $statement->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        print $e->getMessage();
    }

    echo json_encode($rates);