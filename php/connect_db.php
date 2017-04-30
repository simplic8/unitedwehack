<?php

//db connection
$servername = "koinonikos.org";
require "login.auth";

// Create connection
$link = mysql_connect($servername, $username, $password);
if (!$link) {
    die('Not connected : ' . mysql_error());
}

// make unwh the current db
$db_selected = mysql_select_db('koinonik_unitedwehack', $link);
if (!$db_selected) {
    die ('Can\'t use foo : ' . mysql_error());
}

$result = mysql_query("select * from test");  
echo "<h2>Here is a list of the result:</h2>";  

while ($row = mysql_fetch_array($result)) {
    echo $row['test']."<br />";
}

?>