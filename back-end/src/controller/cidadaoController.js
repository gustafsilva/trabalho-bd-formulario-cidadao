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

const novoCidadao = (conexao, cidadao) => {
    const QUERY_NOVO_CIDADAO = `INSERT INTO Cidadao (
        CPF,
        Nome_Cidadao,
        Nome_Social,
        Nome_Mae,
        Data_Nascimento,
        Sexo_Nascimento,
        Renda_Individual,
        Renda_Familiar,
        Cod_Raca_Cor,
        Cod_UF,
        Cod_Estado_Civil,
        Cod_Genero_Declarado,
        Cod_Escolaridade,
        Cod_Vinculo_Empregaticio,
        Cod_Ocupacao
    )
    VALUES (
        '${cidadao.CPF}',
        '${cidadao.Nome_Cidadao}',
        '${cidadao.Nome_Social}',
        '${cidadao.Nome_Mae}',
        '2018-12-12',
        '${cidadao.Sexo_Nascimento}',
        ${cidadao.Renda_Individual},
        ${cidadao.Renda_Familiar},
        ${cidadao.Cod_Raca_Cor},
        ${cidadao.Cod_UF},
        ${cidadao.Cod_Estado_Civil},
        ${cidadao.Cod_Genero_Declarado},
        ${cidadao.Cod_Escolaridade},
        ${cidadao.Cod_Vinculo_Empregaticio},
        ${cidadao.Cod_Ocupacao}
    );`;

    return executarQuery(conexao, QUERY_NOVO_CIDADAO)
        .catch(erro => console.error('Ao cadastrar novo Cidadão', erro));
}

module.exports = {
    obterCidadoes,
    obterCidadoesPorCPF,
    verificarNovoCPF,
    novoCidadao
}
