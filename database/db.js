const mysql = require('mysql');
//createConnection
const con = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
})

con.connect((error)=>{
    if(error){
        console.log('el error a conectar es'+error)
    } else{
        console.log('base conectada')
    }
});

module.exports=con;