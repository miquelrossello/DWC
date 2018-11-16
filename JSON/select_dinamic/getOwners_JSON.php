<?php
    header("Content-Type: application; application/json");

    require_once "../conn.php";
    $query = "select dni, nom, llinatge_1, llinatge_2 from persona INNER JOIN propietari p on persona.dni = p.dniPersona";

    try {
        $statement = $conn->prepare($query);
        $statement->execute();
        $owners = $statement->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        print $e->getMessage();
    }

    echo json_encode($owners);