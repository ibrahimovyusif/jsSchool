<?php
connectToDB();

$host = "localhost";
$username = "root";
$password = "";
$database = "student";
$table = "student_database"

mysql_connect("$host", "$username", "$password") or die (mysql_error());
echo "connected";

mysql_select_db("$student") or die(mysql_error();
echo "database found";

mysql_query("INSERT INTO $table(name, email, address, id) VALUES ('yusif','yusifibrahimov@mail.ru', 'chernyakhovsi', '8548083')") or die(mysql_error());
mysql_query("INSERT INTO $table(name, email, address, id) VALUES ('yusdif','yusifiasdabrahimov@mail.ru', 'chernyakdashovsi', '8565083')") or die(mysql_error());

echo "data inserted";

mysql_close();

?>