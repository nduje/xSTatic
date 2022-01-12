<?php
function getDatabaseAccess(){
    return new DatabaseAccess("xstatic", "root", null);
}

class DatabaseAccess {
	private $_username;
	private $_password;
	private $_db;

	public function DatabaseAccess($db, $username, $password) {
		$this->_db = $db;
		$this->_username = $username;
		$this->_password = $password;
	}

	public function executeQuery($query) {
		$mysqli = new mysqli("localhost", "root", null, "xstatic");

		if ($mysqli) {
			$queryResponse = $mysqli->query($query);

			$resultItems = array();

		   	while ($item = $queryResponse->fetch_row()) {
		   			$resultItems[] = $item;
		   	}

			return  $resultItems;
		}

		else {
			die("Connection could not be established");
		}
	}
	public function executeInsertQuery($query){

		$mysqli = new mysqli("localhost", "root", null, "xstatic");

		if ($mysqli) {
			$mysqli->query($query);

			return $mysqli->insert_id;
		}

		else {
			die("Connection could not be established");
		}
	}
}