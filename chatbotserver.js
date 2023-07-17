const exspress = require('express');
const app = exspress();

app.get('./chatbot', invokePythonTranslator)

function invokePythonTranslator(req, res)
{
    var spawn = require("child_process").spawn;
    var process = spawn('python', [
        "./chatbot.py"
        req.query.text
    ]);
    process.stdout.on('data', function(data){
        res.send(data.tostring());
    })
}.listen(8080);

console.log("Please wait..");
console.log("Server running di http://localhost:8080");