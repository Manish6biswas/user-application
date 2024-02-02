var mysql = require('mysql');

exports.establishConnection = async ()=>{
    const con = mysql.createConnection({
        host: "sql6.freesqldatabase.com",
        user: "sql6681370",
        password: "8NSMVK1VjX",
        database: "sql6681370",
        port: 3306
    });

    return con;
    // db.connect((err)=>{
    //     if(err){
    //         console.log(err);
    //         process.exit();
    //     }
    //     else{
    //         console.log("Connected to database");
    //     }
    // })
}
