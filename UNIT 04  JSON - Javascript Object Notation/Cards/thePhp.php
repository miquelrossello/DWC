<?php

require_once "../conn.php";

$query = 'SELECT * FROM port';

try {
    $statement = $conn->prepare($query);
    $statement->execute();
    $result = $statement->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    print $e->getMessage();
}

echo json_encode($result);
