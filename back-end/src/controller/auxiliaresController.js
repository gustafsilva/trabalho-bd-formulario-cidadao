const { executarQuery } = require('../bd/driver'); 

const obterEscolaridades = (conexao) => {
    const QUERY_OBTER_ESCOLARIDADES = 'SELECT * FROM Escolaridade;';

    return executarQuery(conexao, QUERY_OBTER_ESCOLARIDADES)
        .catch(erro => console.error('Ao obter todas as Escolaridades', erro))
}
const obterEstadosCivis = (conexao) => {
    const QUERY_OBTER_ESTADOS_CIVIS = 'SELECT * FROM Estado_Civil;'

    return executarQuery(conexao, QUERY_OBTER_ESTADOS_CIVIS)
        .catch(erro => console.error('Ao obter todos os Estados Civis', erro));
}
const obterGenerosDeclarados = (conexao) => {
    const QUERY_OBTER_GENEROS_DECLARADOS = 'SELECT * FROM Genero_Declarado;';

    return executarQuery(conexao, QUERY_OBTER_GENEROS_DECLARADOS)
        .catch(erro => console.error('Ao obter todos os Gêneros Declarados', erro));
}
const obterOcupacoes = (conexao) => {
    const QUERY_OBTER_OCUPACOES = 'SELECT * FROM Ocupacao;';

    return executarQuery(conexao, QUERY_OBTER_OCUPACOES)
        .catch(erro => console.error('Ao obter todos as Ocupações', erro));
}
const obterRacasCores = (conexao) => {
    const QUERY_OBTER_RACAS_CORES = 'SELECT * FROM Raca_Cor;'

    return executarQuery(conexao, QUERY_OBTER_RACAS_CORES)
        .catch(erro => console.error('Ao obter todas Raças/Cores', erro));
}
const obterUFs = (conexao) => {
    const QUERY_OBTER_UFS = 'SELECT * FROM UF;';

    return executarQuery(conexao, QUERY_OBTER_UFS)
        .catch(erro => console.error('Ao obter todas UFs', erro));
}
const obterVinculosEmpregaticios = (conexao) => {
    const QUERY_OBTER_VINCULOS_EMPREGATICIOS = 'SELECT * FROM Vinculo_Empregaticio';

    return executarQuery(conexao, QUERY_OBTER_VINCULOS_EMPREGATICIOS)
        .catch(erro => console.erro('Ao obter todos Vínculos Empregatícios', erro));
}

module.exports = {
    obterEscolaridades,
    obterEstadosCivis,
    obterGenerosDeclarados,
    obterOcupacoes,
    obterRacasCores,
    obterUFs,
    obterVinculosEmpregaticios
}
