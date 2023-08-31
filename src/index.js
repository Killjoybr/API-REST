const express = require('express');
const app = express();
const routes = require('./routers/routes');
const port = 8000;
const appMessage = console.log(`App running on port: ${port}`);

// Middleware nativo do modulo express, serve para aceitar requisições no formato JSON
app.use(express.json());

app.use(routes);

app.listen(port, appMessage);