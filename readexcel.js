const excelfile = require('read-excel-file/node');
excelfile('./data_baru.xlsx').then((rows)=>
{
    console.log(rows);
    console.table(rows);
})