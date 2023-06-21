var mysql = require('mysql');
const prompt = require('prompt-sync')();
var timestamp = new Date();
let jsonfile = require('jsonfile');
const fs = require('fs');

const name = prompt('siapa namamu bang?');
const category = prompt('Kategori apa?');
const complaintDesc = prompt('Apa complainmu?');
console.log(name);
console.log(category);
console.log(complaintDesc);

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
    var sql = "INSERT INTO `complaint`(`channelName`, `categoryid`, `descComplaint`) VALUES (name, category, complaintDesc)";
    connection.query(sql, function (err, result, fields) {
        console.log('database berhasil terhubung');
        if (err) throw err;
        console.log(result);
        var error = result.warningCount;
        if (err){
            console.log(err);
        }
        else {
            console.log("Data berhasil ditambahkan");
            connection.query("SELECT * FROM complaint", function (err, result1){
                if (err) throw err;
                console.log(result1);
                jsonfile.writeFile('data2.json', result1);
            });
            fs.writeFile("log.txt", err + " | Status : success : " + timestamp, function (err) {
                if (err) {
                  return console.log(err);
                }            
                console.log("log tersimpan");
            });
        }
    });
});
module.exports = connection;

