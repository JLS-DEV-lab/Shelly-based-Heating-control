<?php
    require('initDB.php');
    
    if($_SERVER["REQUEST_METHOD"] === "POST" && (isset($_POST["firstname"]) && isset($_POST["surname"]) && isset($_POST["email"]) && isset($_POST["mobile"]))) {
        //server validation
        $firstname = "";
        $surname = "";
        $email = "";
        $mobile = "";

        //check URL too?
        if(empty($_POST["firstname"])) {
            echo "Kein Vorname";
            exit("Kein Vorname");
        } else {
            //$firstname = test_input($_POST["firstname"]);
            if(strlen($_POST["firstname"]) > 1 && strlen($_POST["firstname"]) < 21) {
                if(preg_match("/^[a-zA-z]*$/", $firstname)) {
                    $firstname = $_POST["firstname"];
                } else {
                    echo "Ungültiger Vorname";
                    exit("Ungültiger Vorname");
                }
            } else {
                echo "Kein Vorname";
                exit("Ungültiger Vorname");
            }
        }

        if(empty($_POST["surname"])) {
            echo "Kein Nachname";
            exit("Kein Nachname");
        } else {
            //$surname = test_input($_POST["surname"]);
            if(strlen($_POST["surname"]) > 1 && strlen($_POST["surname"]) < 21) {
                if(preg_match("/^[a-zA-z]*$/", $surname)) {
                    $surname = $_POST["surname"];
                } else {
                    echo "Ungültiger Nachname";
                    exit("Ungültiger Nachname");
                }
            } else {
                echo "Kein Nachname";
                exit("Kein Nachname");
            }
        }

        if(empty($_POST["email"])) {
            echo "Keine Email";
            exit("Keine Email");
        } else {
            //$email = test_input($_POST["email"]);
            if(filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
                $email = $_POST["email"];
            } else {
                echo "Ungültiges Email Format";
                exit("Ungültiges Email Format");
            }
        }

        if(empty($_POST["mobile"])) {
            echo "Keine Telefonnummer";
            exit("Keine Telefonnummer");
        } else {
            //$mobile = test_input($_POST["mobile"]);
            if(strlen($_POST["mobile"]) > 9 && strlen($_POST["mobile"]) < 16) {
                if(preg_match("/^[0-9]*$/", $mobile)) {
                    $mobile = $_POST["mobile"];
                } else {
                    echo "Ungültige Telefonnummer";
                    exit("Ungültige Telefonnummer");
                }
            } else {
                echo "Keine Telefonnummer";
                exit("Keine Telefonnummer");
            }
        }
        
        function test_input($data) {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            
            return $data;
        }

        //add data to DB using mysli prepared statements
        $mysqli = new mysqli($server, $user, $pwd, $name);

        if($mysqli->connect_errno > 0) {
            die('Error while connecting: '.$mysqli->connect_error);
        } else {
            $stmt = $mysqli->prepare("INSERT INTO customers (firstname, surname, email, mobile) VALUES (?, ?, ?, ?)");
            $stmt->bind_param("ssss", $firstname, $surname, $email, $mobile);
            $stmt->execute();
            $stmt->close();
            $mysqli->close();
        }

    } else {
        echo "Daten können nicht gesendet werden";
    }
?>