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
