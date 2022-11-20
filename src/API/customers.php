<?php
    require('initDB.php');
    
    # credentials of initPHP.php
    $db_server = $server;
    $db_user = $user;
    $db_password = $pwd;
    $db_name = $name;

    #variables
    $data = array();

    #connection setup
    $mysqli = new mysqli($db_server, $db_user, $db_password, $db_name);    
    #catch connection errors
    if($mysqli->connect_errno > 0) {
        die('Error while connecting: '.$mysqli->connect_error);
    } else {    
        $query = "SELECT * from customers";
        $result = $mysqli->query($query);
        while($row = $result->fetch_assoc()){
            array_push($data, $row);
        }
        $dataObj = json_encode($data, JSON_PRETTY_PRINT);?>
        <pre>
        <?php echo $dataObj;
    }
?>