const express = require('express');
const app = express();
const { spawn } = require("child_process");

app.get('/chatbot', invokePythonTranslator);

function invokePythonTranslator(req, res) {
    const process = spawn('python', [
        "./chatbot.py",
        req.query.text
    ]);
    let output = "";

    process.stdout.on('data', function(data) {
        output += data.toString();
    });

    process.stdout.on('end', function() {
        res.send(output);
    });
}

app.listen(3020, function() {
    console.log("Please wait..");
    console.log("Server running at http://localhost:3020");
});
