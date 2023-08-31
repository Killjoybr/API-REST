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
        return response.status(404).json({ mensagem: 'Player não encontrado.'})
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
    // nick ?? '' se houver um nick no body o jogador é cadastrado com o nick passado, caso contrario é uma string vazia

    const jogador = {
        id,
        nome,
        nick: nick ?? '' 
    }
    
    jogadores.push(jogador);
    
    id++ ;
    return response.status(201).json({message:'Cadastro concluído com sucesso'});
};

const atualizarJogador = (request,response)=> {
    const {id} = request.params;
    const {nome , nick} = request.body;
    const jogador = jogadores.find((jogador)=>{
        return jogador.id === Number(id);
    });

    if(!jogador){
        return response.status(404).json({message:'Player não encontrado'});
    }
    if(!nome){
        return response.status(400).json({message:'Fornecer um nome é obrigatório'});
    };
    if(!nick){
        return response.status(400).json({message:'Fornecer um nickname é obrigatório'});
    };

    

    jogador.nome = nome;
    jogador.nick = nick;

    response.status(201).json({message:'Player atualizado com sucesso'});
};

module.exports = {
    listarJogadores,
    obterJogador,
    cadastrarJogador,
    atualizarJogador,
};