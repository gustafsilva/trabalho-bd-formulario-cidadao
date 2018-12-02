const { executarQuery } = require('../bd/driver'); 

const obterCidadoes = async (conexao) => {
    const QUERY_GET_CIDADOES = 'SELECT * FROM Cidadao';

    return executarQuery(conexao, QUERY_GET_CIDADOES)
        .catch(erro => console.error(erro));
}

module.exports = {
    obterCidadoes
}
