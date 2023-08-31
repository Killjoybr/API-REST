const { playerBase } = require('../database/jogadores');
const jogadores  = playerBase.jogadores;
let { id } = require('../database/jogadores');

const listarJogadores = (request, response) => {
    response.status(200).json(jogadores);
};

const obterJogador = (request, response) => {
    const { id } = request.params;

    const jogador = jogadores.find( (jogador) => {
        return jogador.id === Number(id);
    });

    if(!jogador){
        return response.status(404).json({ mensagem: 'Jogador não encontrado.'})
    }

    response.status(200).json(jogador);
};

const cadastrarJogador = (request, response) =>{
    const { nome } = request.body;
    let { nick } = request.body;
    
    if(!nome){
        return response.status(404).json({message:'É obrigatório fornecer um nome'});
    };

    // como ensinado na aula esse operador é uma forma especial do operador logico OR "||" no javascript 
    nick ?? '' 

    const jogador = {
        id,
        nome,
        nick
    }
    
    jogadores.push(jogador);
    
    id++ ;
    return response.status(201).json({message:'Cadastro concluído com sucesso'});
};

module.exports = {
    listarJogadores,
    obterJogador,
    cadastrarJogador,
};