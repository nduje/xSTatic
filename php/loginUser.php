<?php
require_once("DatabaseAccess.php");

function loginUser($username, $password) {
    return getDatabaseAccess()->executeQuery(
        "SELECT userID FROM accounts WHERE userID = '$username' AND  userPassword = '$password'"
    );
}

function setLoginTime($username, $password) {
    return getDatabaseAccess()->executeInsertQuery(
        "UPDATE accounts SET lastLogin = CURRENT_TIMESTAMP WHERE userID = '$username' AND  userPassword = '$password'"
    );
}