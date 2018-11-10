<?php
    header("Content-Type: application/json; charset=UTF-8");
    $conn = new mysqli("192.168.1.20", "root", "mrm1998", "act_json_1");
    $statement = $conn->prepare("SELECT * FROM amarrament");
    $statement->execute();
    $result = $statement->get_result();
    $output = $result->fetch_all(MYSQL_ASSOC);

    echo json_encode($output);