const { executarQuery } = require('../bd/driver'); 
const { gerarCPF } = require('../utils');

const obterCidadoes = (conexao) => {
    const QUERY_OBTER_CIDADOES = 'SELECT * FROM Cidadao';

    return executarQuery(conexao, QUERY_OBTER_CIDADOES)
        .catch(erro => console.error('Ao obter todos os Cidadões', erro));
}

const obterCidadoesPorCPF = (conexao, cpf) => {
    const QUERY_OBTER_CIDADAO_POR_CPF = `SELECT * FROM Cidadao WHERE CPF LIKE '%${cpf}%';`;

    return executarQuery(conexao, QUERY_OBTER_CIDADAO_POR_CPF)
        .catch(erro => console.error('Ao obter Cidadão por CPF', erro));
}

const verificarNovoCPF = (conexao, novoCPF) => {
    const QUERY_VERIFICAR_NOVO_CPF = `SELECT * FROM Cidadao WHERE CPF = ${novoCPF}`;

    return executarQuery(conexao, QUERY_VERIFICAR_NOVO_CPF)
        .then(resultado => resultado.length <= 0)
        .catch(erro => console.error('Ao verificar novo CPF Cidadão', erro));
}

module.exports = {
    obterCidadoes,
    obterCidadoesPorCPF,
    verificarNovoCPF
}
