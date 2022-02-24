// Import Express.js
const express = require('express');
const app = express();

const args = require("minimist")(process.argv.slice(2))
args['port']
const HTTP_PORT = args.port || 5000

const server = app.listen(HTTP_PORT, () => {
    console.log('App listening on port %PORT%'.replace('%PORT', HTTP_PORT))
});

app.use(function (req, res) {
    res.status(404).send('404 NOT FOUND')
});

app.get('/app/', (req, res) => {
    // Respond with status 200
    res.statusCode = 200;
    //Respond with status message "OK"
    res.statusMessage = "OK";
    res.writeHead(res.statusCode, { 'Content-Type': 'text/plain' });
    res.end(res.statusCode + ' ' + res.statusMessage);
});

app.get('/app/flips/:number', (req, res) => {
    const num = req.params.number;
});