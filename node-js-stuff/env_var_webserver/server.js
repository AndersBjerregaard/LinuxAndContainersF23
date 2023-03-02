'use strict';

// Express is a lightweight node.js web app framework
// See more at https://expressjs.com/
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0'; // All network addresses. Previous iteration used localhost,
// which means the server'll only be listening to the same unit's network.

// App
const app = express();

// http get route
app.get('/', (req, res) => {
    res.send('Showcase of reading system environment variable dynamically through a webserver\n' + 
    'Navigate to the route: \"/environment\" to read the PATH environment variable.');
});

app.get('/environment', (req, res) => {
    let env_var = process.env.PATH;
    res.send('PATH environment variable was loaded as: ' + env_var + 
    '\n\nThis is loaded at request. Meaning, should the environment variable change, this page should simply be refreshed to see.')
});

app.listen(PORT, HOST, () => {
    console.log(`Listening on http://${HOST}:${PORT}`);
});