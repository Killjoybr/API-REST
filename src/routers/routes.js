// Importando dependencias
const express = require('express');
const routes = express();
const jogadores = require('../controllers/jogadores');

// Rotas
routes.get('/jogadores', jogadores.listarJogadores);
routes.get('/jogadores/:id', jogadores.obterJogador);
routes.post('/jogadores', jogadores.cadastrarJogador);

// Exportando rotas
module.exports = routes;