<?php

// section assuming
/*$myObj->name = "John";
$myObj->age = 30;
$myObj->city = "New York";

$myJSON = json_encode($myObj);
*/

//

//retrieve data from database/service
//include "connect_db.php";

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

$acct=array();
while ($row = mysql_fetch_array($result)) {
    array_push($acct,$row['test']);
}

//
$readJSON = "";
$myfile = fopen("datafetch_3", "r") or die("Unable to open file!");
  $readJSON = fread($myfile,filesize("datafetch_3"));
fclose($myfile);

//$readJSON = "{\"Date\":\"1-Jan-17\",\"balance\":10,\"account ID\":345098}";

$acct = json_decode($readJSON);

//calc $ave index;
$balance = [];
foreach($acct as $acct_line) {
    array_push($balance, $acct_line->balance);
}

$base_days = 30;

$aggregate_balance = 0;
$base_balance = $balance[0];
$agg_delta_balance_change_pct = 0;
$agg_delta_balance_change_base_pct = 0;

//assumption - start of year 1
echo "<table border='1'>";
for($i=1;$i<$base_days+1;$i++) {
	$aggregate_balance = $aggregate_balance + $balance[$i];
	
	$delta_balance_change = $balance[$i] - $balance[$i-1];
	$delta_balance_change_pct = $delta_balance_change / $balance[$i-1] * 100;
	$agg_delta_balance_change_pct = $agg_delta_balance_change_pct +  $delta_balance_change_pct;
	
	$delta_balance_change_base = $balance[$i] - $base_balance;
	$delta_balance_change_base_pct = $delta_balance_change_base / $base_balance * 100;
	$agg_delta_balance_change_base_pct = $agg_delta_balance_change_base_pct + $delta_balance_change_base_pct;
	
	echo "<tr>";
	echo "<td>" . $i . "</td>";
	echo "<td>" . $balance[$i] . "</td>";
	echo "<td>" . $balance[$i-1] . "</td>";
	echo "<td>" . $delta_balance_change . "</td>";
	echo "<td>" . $delta_balance_change_pct . "</td>";
	echo "<td>" . $delta_balance_change_base . "</td>";
	echo "<td>" . $delta_balance_change_base_pct . "</td>";
/*	
	echo $i . "&nbsp;&nbsp;&nbsp;&nbsp;" . $balance[$i] . "&nbsp;&nbsp;&nbsp;&nbsp;" . $balance[$i-1] . "&nbsp;&nbsp;&nbsp;&nbsp;" . 
		$delta_balance_change . "&nbsp;&nbsp;&nbsp;&nbsp;" . $delta_balance_change_pct .  "&nbsp;&nbsp;&nbsp;&nbsp;" . $delta_balance_change_base . 
		"&nbsp;&nbsp;&nbsp;&nbsp;" . $delta_balance_change_base_pct . "<br>";
	echo "</tr>";
*/

}
echo "</table>";

echo "\$ave index (pct chg delta balance: " . ($agg_delta_balance_change_pct / $base_days) . "<br>";
echo "\$ave index (pct chg base balance: " . ($agg_delta_balance_change_base_pct / $base_days) . "<br>";

?>