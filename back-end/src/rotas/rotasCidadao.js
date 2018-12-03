const { buscarTodosOsCidadoes, buscarCidadaoPorCPF } = require('../acoes/cidadaoAcoes')

const rotasCidadao = (servidor) => {
    servidor.get('/cidadoes', buscarTodosOsCidadoes);

    servidor.get('/cidadao/:cpf', buscarCidadaoPorCPF);

    servidor.post('/cidadao', () => {});
}

module.exports = rotasCidadao;
