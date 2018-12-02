const { novaConexao, fecharConexao } = require('../bd/driver');
const {
    obterEscolaridades,
    obterEstadosCivis,
    obterGenerosDeclarados,
    obterOcupacoes,
    obterRacasCores,
    obterUFs,
    obterVinculosEmpregaticios
} = require('../controller/auxiliaresController');

const obterTabelasAuxiliares = async (requisicao, resposta) => {
    const conexao = novaConexao();
    let erroAoCapturarTabela = false;

    const escolaridades = await obterEscolaridades(conexao).catch(erro => erroAoCapturarTabela = true);
    const estadosCivis = await obterEstadosCivis(conexao).catch(erro => erroAoCapturarTabela = true);
    const generosDeclarados  = await obterGenerosDeclarados(conexao).catch(erro => erroAoCapturarTabela = true);
    const ocupacoes = await obterOcupacoes(conexao).catch(erro => erroAoCapturarTabela = true);
    const racasCores = await obterRacasCores(conexao).catch(erro => erroAoCapturarTabela = true);
    const ufs = await obterUFs(conexao).catch(erro => erroAoCapturarTabela = true);
    const vinculosEmpregaticios = await obterVinculosEmpregaticios(conexao).catch(erro => erroAoCapturarTabela = true);

    const tabelasAuxilares = {
        escolaridades,
        estadosCivis,
        generosDeclarados,
        ocupacoes,
        racasCores,
        ufs,
        vinculosEmpregaticios
    }
    if (!erroAoCapturarTabela) {
        resposta.send(200, tabelasAuxilares);
    } else {
        resposta.send(500, tabelasAuxilares);
    }

    fecharConexao(conexao);
}

module.exports = {
    obterTabelasAuxiliares
}