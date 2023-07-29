import mysql from 'mysql2';


const blog_db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"German12345",
    database:'blog',
})

export default blog_db;