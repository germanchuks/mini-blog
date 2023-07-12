import mysql from 'mysql';


const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"German12345",
    database:'blog',
})

export default db;