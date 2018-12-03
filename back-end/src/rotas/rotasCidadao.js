const { buscarTodosOsCidadoes, buscarCidadaoPorCPF, criarCidadao } = require('../acoes/cidadaoAcoes');

const rotasCidadao = (servidor) => {
    servidor.get('/cidadoes', buscarTodosOsCidadoes);

    servidor.get('/cidadao/:cpf', buscarCidadaoPorCPF);

    servidor.post('/cidadao', () => () => { console.log('grita') });
}

module.exports = rotasCidadao;
