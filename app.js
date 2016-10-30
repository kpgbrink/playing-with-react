const express = require('express');
const app = express();

module.exports = app;

const mainAssetName = require('./public/bin/assetsByChunkName.json').main;

app.get('/', function (req, res) {
    res.send(`<!DOCTYPE html>
    <html>
    <head> <script src="bin/${mainAssetName}"></script>
    </head>
    <body>
    <div id="container"></div> 
    </body>
    </html>`);
});

app.use(express.static('public'));
