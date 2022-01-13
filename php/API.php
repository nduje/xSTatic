<?php
require_once("DatabaseAccess.php");
require_once("signupUser.php");
require_once("loginUser.php");

function getRequestParameter($key) {
    return isset($_REQUEST[$key]) ? $_REQUEST[$key] : "";
}

function processRequest() {
    $action = getRequestParameter("action");

    switch ($action) {
        case 'loginUser':
            processLoginUser();
            break;
        case 'signupUser':
            processSignupUser();
            break;
        default:
            echo(json_encode(array(
                "success" => false,
                "reason" => "Unknown action: $action"
            )));
            break;
    }
}

function processLoginUser() {
    $username = getRequestParameter("username");
    $password = getRequestParameter("password");

    $id = -1;
    $success = false;
    $reason = "";
    $setTime = -1;

    $incorrectAttribute = checkIncorrectAttribute($username, $password);


    if ((!empty($username) && !empty($password)) && !($incorrectAttribute)) {
        $id = loginUser($username, $password);
        $setTime = setLoginTime($username, $password);
        $success = true;
    }

    else {
        $success = false;

        if ($incorrectAttribute) {
            $reason = "Incorrect username or password";
        }

        else if (!empty($username) && !empty($password)) {
            $reason = "Some fields are empty";
        }

        else {
            $reason = "Unknown error";
        }
    }

    echo(
        json_encode(
           array(
              "id" => $id,
              "reason" => $reason,
              "success" => $success,
              "loginTime" => $setTime
           )
        )
     );
}

function processSignupUser() {
    $username = getRequestParameter("username");
    $password = getRequestParameter("password");
    $repeatedPassword = getRequestParameter("repeated_password");

    $id = -1;
    $success = false;
    $reason = "";

    $alreadyExists = checkAlreadyExists($username);

    if ((!empty($username) && !empty($password) && !empty($repeatedPassword)) && ($password == $repeatedPassword) && !($alreadyExists)) {
        $id = signupUser($username, $password);
        $success = true;
    }

    else {
        $success = false;

        if($password != $repeatedPassword) {
            $reason = "Passwords aren't matching";
        }

        else if($alreadyExists) {
            $reason = "User already exists";
        }

        else {
            $reason = "Unexpected error";
        }
    }

    
    echo(
        json_encode(
           array(
              "id" => $id,
              "reason" => $reason,
              "success" => $success
           )
        )
     );
}

function getAccountsFromDatabase() {
    $databaseAccess = getDatabaseAccess();

    return $databaseAccess->executeQuery("SELECT * FROM accounts");
}

function checkIncorrectAttribute($username, $password) {
    $accounts = getAccountsFromDatabase();

    foreach($accounts as $account) {
        $tempUsername = $account[0];
        $tempPassword = $account[1];
    
        if (($username == $tempUsername) && ($password == $tempPassword)) {
            return false;
        }
    }

    return true;
}

function checkAlreadyExists($username) {
    $accounts = getAccountsFromDatabase();
    
    foreach ($accounts as $account) {
        $tempUsername = $account[0];

        if ($tempUsername == $username) {
            return true;
        }
    }

    return false;
}

processRequest();