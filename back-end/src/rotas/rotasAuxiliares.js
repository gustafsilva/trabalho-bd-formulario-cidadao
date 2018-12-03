const { obterTabelasAuxiliares } = require('../acoes/auxiliaresAcoes');


const rotasAuxiliares = (servidor) => {
    servidor.get('/auxiliares/cidadao', obterTabelasAuxiliares );
}

module.exports = rotasAuxiliares;
