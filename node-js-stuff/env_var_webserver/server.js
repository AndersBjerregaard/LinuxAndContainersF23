'use strict';

// Express is a lightweight node.js web app framework
// See more at https://expressjs.com/
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '127.0.0.1'; // localhost

// App
const app = express();

// http get route
app.get('/', (req, res) => {
    res.send('Showcase of reading system environment variable dynamically through a webserver');
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});