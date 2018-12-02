const { obterTodosOsCidadoes } = require('../acoes/cidadaoAcoes')

const rotasCidadao = (servidor) => {
    servidor.get('/cidadoes', obterTodosOsCidadoes);

    servidor.get('/cidadao/:cpf', () => {});

    servidor.post('/cidadao', () => {});
}

module.exports = rotasCidadao;
