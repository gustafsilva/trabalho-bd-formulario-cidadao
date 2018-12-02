const { novaConexao, fecharConexao } = require('../bd/driver');
const { obterCidadoes } = require('../controller/cidadaoController');

const obterTodosOsCidadoes = async (requisicao, resposta) => {
    const conexao = novaConexao();

    const cidadoes = await obterCidadoes(conexao);
    
    if(cidadoes) {
        resposta.send(200, cidadoes);
    } else {
        resposta.send(500, cidadoes);
    }

    fecharConexao(conexao);
}

module.exports = {
    obterTodosOsCidadoes
}
