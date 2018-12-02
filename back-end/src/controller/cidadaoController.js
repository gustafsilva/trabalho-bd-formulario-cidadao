const { novaConexao, executarQuery, fecharConexaoEObterResultado } = require('../bd/driver'); 

const obterCidadoes = async () => {
    const QUERY_GET_CIDADOES = 'SELECT * FROM Cidadao';

    return novaConexao()
        .then(conexao => executarQuery(conexao, QUERY_GET_CIDADOES))
        .then(flags => fecharConexaoEObterResultado(flags))
        .catch(erro => console.error(erro));
}

module.exports = {
    obterCidadoes
}
