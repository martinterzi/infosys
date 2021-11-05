const mysql = require('mysql');

const con = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
})

con.getConnection((error, connection)=>{
    if(error){
        console.log('el error a conectar es'+error)
    } else{
        console.log('base conectada')
        connection.release();
    }
});

module.exports=con;