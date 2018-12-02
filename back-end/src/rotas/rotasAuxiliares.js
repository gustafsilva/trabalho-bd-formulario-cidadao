const { obterTabelasAuxiliares } = require('../acoes/auxiliaresAcoes');


const rotasAuxiliares = (servidor) => {
    servidor.get('/auxiliares/cidadao/', obterTabelasAuxiliares );

    servidor.post('/auxiliares/renda-governamental', () => {} );
}

module.exports = rotasAuxiliares;
