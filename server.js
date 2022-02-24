// Import Express.js
const express = require('express');
const app = express();

const server = app.listen(HTTP_PORT, () => {
    console.log('App listening on port %PORT%'.replace('%PORT', HTTP_PORT))
});

app.use(function (req, res) {
    res.status(404).send('404 NOT FOUND')
});
