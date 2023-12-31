// Importando dependencias
const express = require('express');
const routes = express();
const jogadores = require('../controllers/jogadores');

// Rotas
routes.get('/jogadores', jogadores.listarJogadores);
routes.get('/jogadores/:id', jogadores.obterJogador);
routes.post('/jogadores', jogadores.cadastrarJogador);
routes.put('/jogadores/:id', jogadores.atualizarJogador);
routes.patch('/jogadores/:id/nick', jogadores.atualizarNick);
routes.delete('/jogadores/:id', jogadores.excluirJogador)

// Exportando rotas
module.exports = routes;