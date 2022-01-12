<?php
require_once("DatabaseAccess.php");

function signupUser($username, $password) {
    return getDatabaseAccess()->executeInsertQuery(
        "INSERT INTO accounts(userID, userPassword) VALUES('$username', '$password')"
    );
}