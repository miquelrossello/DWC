<?php
    header("Content-Type", "application/json");

    require_once '../conn.php';

    $query = 'SELECT * FROM amarrament';

    try {
        $statement = $conn->prepare($query);
        $statement->execute();
        $moorings = $statement->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        print $e->getMessage();
    }

    echo json_encode($moorings);