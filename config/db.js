let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_laporan_14'
});

connection.connect(function(eror){
    if(!!eror){
        console.log(eror)
    }else{
        console.log('koneksi berhasil');
    }
})

module.exports = connection;