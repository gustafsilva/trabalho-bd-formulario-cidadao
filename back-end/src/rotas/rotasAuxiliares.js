
const rotasAuxiliares = (servidor) => {
    servidor.get('/auxiliares/cidadao/', () => {} );

    servidor.post('/auxiliares/renda-governamental', () => {} );
}

module.exports = rotasAuxiliares;
