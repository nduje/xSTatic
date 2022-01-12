<?php
require_once("DatabaseAccess.php");

function loginUser($username, $password) {
    return getDatabaseAccess()->executeQuery(
        "SELECT userID FROM accounts WHERE userID = '$username' AND  userPassword = '$password'"
    );
}