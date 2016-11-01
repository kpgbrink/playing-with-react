const express = require('express');
const fs = require('fs');
const app = express();

module.exports = app;

//const mainAssets = require('./public/bin/assetsByChunkName.json').main;




app.get('/', function (req, res) {
    fs.readFile('./public/bin/assetsByChunkName.json', 'utf-8', (err, data) => {
        if (err) { throw err};
        const assets = JSON.parse(data).main.map(assetFileName => {
            assetFileName = `bin/${assetFileName}`;
            if (/\.js$/.test(assetFileName)) {
                return `<script src="${assetFileName}" async></script>`;
            }
            if (/\.css$/.test(assetFileName)) {
                return `<link rel="stylesheet" type="text/css" href="${assetFileName}" />`
            }
            throw new Error(`Unsure how to handle asset ${assetFileName}`);
        });
        res.send(`<!DOCTYPE html>
<html>
<head> 
    <!--Google sign in -->
    <meta name="google-signin-scope" content="profile email"> <!-- Google sign in -->
    <meta name="google-signin-client_id" content="678093714798-1cj0ndne98lifqt7uvjql64bks0jbv0p.apps.googleusercontent.com">
    <!-- jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <!-- My react -->
    ${assets.join('\n    ')}
    <link rel="icon" href="images/icon/icon.png"/>
    <title>dunno</title>
</head>
<body>
<div id="container"></div> 
</body>
</html>`);
    });
});

app.use(express.static('public'));
