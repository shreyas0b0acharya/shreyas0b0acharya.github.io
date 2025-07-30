import mysql from 'mysql2'; 

// using the database "userdb" in the mySQl software
// Create connection

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_name',
  password: 'your_password',
  database: 'userdb'
});

// Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected...');

});


