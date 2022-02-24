// Import Express.js
const express = require('express');
const app = express();

const args = require("minimist")(process.argv.slice(2))
args['port']
const HTTP_PORT = args.port ? args.port : 5000;

const server = app.listen(HTTP_PORT, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%', HTTP_PORT))
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

app.get('/app/flips/:number', (req, res) => {
    const flips = coinFlips(req.params.number);
    const summary = countFlips(flips);

    res.statusCode = 200;
    res.json({ "raw": flips, "summary": summary })
});

app.use(function (req, res) {
    res.status(404).send('404 NOT FOUND')
});





/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

function coinFlip() {
    let num = Math.random() * 2;
    return num >= 1 ? "heads" : "tails";
}

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

function coinFlips(flips) {
    let result = [];
    for (let i = 0; i < flips; i++) {
        result[i] = coinFlip();
    }
    return result;
}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

function countFlips(array) {
    let heads = 0;
    let tails = 0;
    for (let i = 0; i < array.length; i++) {
        array[i] == "heads" ? heads++ : tails++
    }
    if (heads == 0) {
        return { tails: tails };
    } else if (tails == 0) {
        return { heads: heads };
    } else {
        return { heads: heads, tails: tails };
    }
}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

function flipACoin(call) {
    let output = { call: call, flip: "", result: "" };
    output.flip = coinFlip();
    output.result = output.flip === call ? "win" : "lose";
    return output;
}


/** Export
 * 
 * Export all of your named functions
*/
