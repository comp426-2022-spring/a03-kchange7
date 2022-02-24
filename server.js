// Import Express.js
const express = require('express');
const { coinFlips, countFlips, coinFlip } = require('./modules/coin.mjs');
const app = express();

const args = require("minimist")(process.argv.slice(2))
args['port']
const HTTP_PORT = args.port || 5000

const server = app.listen(HTTP_PORT, () => {
    console.log('App listening on port %PORT%'.replace('%PORT', HTTP_PORT))
});

app.get('/app/', (req, res) => {
    // Respond with status 200
    res.statusCode = 200;
    //Respond with status message "OK"
    res.statusMessage = "OK";
    res.writeHead(res.statusCode, { 'Content-Type': 'text/plain' });
    res.end(res.statusCode + ' ' + res.statusMessage);
});

app.get('/app/flip/', (req, res) => {
    const flip = coinFlip();
    res.statusCode = 200;
    res.json({ "flip": flip });
});

app.use(function (req, res) {
    res.status(404).send('404 NOT FOUND')
});