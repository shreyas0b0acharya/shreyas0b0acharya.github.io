import mysql from 'mysql2';

// we using the database userdb in the mySQl
// Create connection
export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ShreyasB5#6914',
  database: 'userdb'
});

// Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log('✅ MySQL Connected...');
});


