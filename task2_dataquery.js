var mysql = require('mysql');
let jsonfile = require('jsonfile');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'praktek_chatbot'
});
var categoriId, productName;

// cek koneksi ke database
connection.connect(function(err)
{
    if(err) throw err;
    //var sql = ;
    connection.query("SELECT * FROM infomedia123 WHERE  categoryId= 'Aksesoris' AND productName='case'", function (err, result) {
        if (err) throw err;
        console.log(result);
        jsonfile.writeFile('data.json', result);
        console.log('database berhasil terhubung');
    });
});
module.exports = connection;