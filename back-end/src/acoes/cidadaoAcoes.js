const { novaConexao, fecharConexao } = require('../bd/driver');
const { obterCidadoes, obterCidadoesPorCPF, novoCidadao } = require('../controller/cidadaoController');

const buscarTodosOsCidadoes = async (requisicao, resposta) => {
    const conexao = novaConexao();
    let erroAoObterTodosCidadoes = false;

    const cidadoes = await obterCidadoes(conexao).catch(erro => erroAoObterTodosCidadoes = true);
    
    if(!erroAoObterTodosCidadoes) {
        resposta.send(200, cidadoes);
    } else {
        resposta.send(500, []);
    }

    fecharConexao(conexao);
}

const buscarCidadaoPorCPF = async (requisicao, resposta) => {
    const conexao = novaConexao();
    let erroAoBuscarCidado = false;
    const { cpf } = requisicao.params;

    const cidadao = await obterCidadoesPorCPF(conexao, cpf).catch(erro => erroAoBuscarCidado = true);

    if(!erroAoBuscarCidado) {
        resposta.send(200, cidadao);
    } else {
        resposta.send(500, {});
    }

    fecharConexao(conexao);
}

const criarCidadao = async (requisicao, resposta) => {
    console.log('entrou');
    const conexao = novaConexao();
    let erroAoCriarNovoCidadao = false;
    let { cidadao } = requisicao.body;
    console.log(cidadao);

    cidadao = await novoCidadao(conexao, cidadao).catch(() => erroAoCriarNovoCidadao = true);

    if(!erroAoCriarNovoCidadao) {
        resposta.send(200, cidadao);
    } else {
        resposta.send(500, {});
    }

    fecharConexao(conexao);
}

module.exports = {
    buscarTodosOsCidadoes,
    buscarCidadaoPorCPF,
    criarCidadao
}