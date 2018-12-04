import React, { Component, Fragment } from 'react';

import Header from './Header';

class CadastroCidadao extends Component {
    constructor(props) {
        super(props);

        this.state = {
            carregando: true,
            tabelasAuxiliares: {},
            cidadao: {
                Nome_Cidadao: '',
                Nome_Social: '',
                Nome_Mae: '',
                Data_Nascimento: '',
                Sexo_Nascimento: 'Masculino',
                Renda_Individual: 0,
                Renda_Familiar: 0,
                Cod_Raca_Cor: 1,
                Cod_UF: 1,
                Cod_Estado_Civil: 1,
                Cod_Genero_Declarado: 1,
                Cod_Escolaridade: 1,
                Cod_Vinculo_Empregaticio: 1,
                Cod_Ocupacao: 1,
                Renda_Governamental: {
                    Nome_Renda_Governamental: '',
                    Valor: 0
                }

            }
        }
    }

    componentDidMount() {
        const CAPTURAR_TABELAS_AUXILIARES = 'http://localhost:3000/auxiliares/cidadao';

        fetch(CAPTURAR_TABELAS_AUXILIARES)
            .then(resposta => resposta.json())
            .then(tabelasAuxiliares => {
                this.setState({
                    ...this.state,
                    carregando: false,
                    tabelasAuxiliares
                })
            })
            .catch(erro => console.error('Erro ao capturar tabelas auxiliares', erro));
    }

    mudarEstadoCidadao(novoValor) {
        this.setState({
            ...this.state,
            cidadao: {
                ...this.state.cidadao,
                ...novoValor
            }
        })
    }

    renderSexoNascimento() {
        return (
            <div class="field">
                <label class="label" for="sexo-nascimento">Sexo nascimento:</label>
                <div class="control">
                    <div class="select">
                        <select name="sexo-nascimento" value={this.state.cidadao.Sexo_Nascimento} onChange={(evento) => this.mudarEstadoCidadao({ Sexo_Nascimento: evento.target.value })}>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
    renderGeneroDeclarado() {
        return (
            <div class="field">
                <label class="label" for="genero-declarado">Gênero declarado:</label>
                <div class="control">
                    <div class="select">
                        <select name="genero-declarado" value={this.state.cidadao.Cod_Genero_Declarado} onChange={(evento) => this.mudarEstadoCidadao({ Cod_Genero_Declarado: evento.target.value })}>
                            {this.state.tabelasAuxiliares.generosDeclarados.map(genero => (
                                <option value={genero.Cod_Genero_Declarado}>{genero.Nome_Genero_Declarado}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        );
    }
    renderUF() {
        return (
            <div class="field">
                <label class="label" for="uf-nascimento">UF de nascimento:</label>
                <div class="control">
                    <div class="select">
                        <select name="uf-nascimento" value={this.state.cidadao.Cod_UF} onChange={(evento) => this.mudarEstadoCidadao({ Cod_UF: evento.target.value })}>
                            {this.state.tabelasAuxiliares.ufs.map(uf => (
                                <option value={uf.Cod_UF}>{uf.Nome_UF}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        );
    }
    renderRacaCor() {
        return (
            <div class="field">
                <label class="label" for="raca-cor">Raça/cor:</label>
                <div class="control">
                    <div class="select">
                        <select name="raca-cor" value={this.state.cidadao.Cod_Raca_Cor} onChange={(evento) => this.mudarEstadoCidadao({ Cod_Raca_Cor: evento.target.value })}>
                            {this.state.tabelasAuxiliares.racasCores.map(raca => (
                                <option value={raca.Cod_Raca_Cor}>{raca.Nome_Raca_Cor}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        );
    }
    renderEstadoCivil() {

    }
    renderEscolaridade() {

    }
    renderOcupacao() {

    }
    renderViculoEmpregaticio() {

    }
    renderRendaGovernamental() {

    }


    renderFormulario() {
        if (this.state.carregando) {
            return (<p className="has-text-centered">Carregando Informações...</p>);
        }
        return (
            <form>
                <div class="field">
                    <label class="label" for="nome">Nome do cidadão:</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Nome do Cidadão" name="nome" />
                    </div>
                </div>
                <div class="field">
                    <label class="label" for="nome-social">Nome social:</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Nome social" name="nome-social" />
                    </div>
                </div>
                <div class="field">
                    <label class="label" for="nome-mae">Nome da mãe:</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Nome do Cidadão" name="nome" />
                    </div>
                </div>
                <div class="field">
                    <label class="label" for="data-nascimento">Data de nascimento:</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="__/__/____" name="data-nascimento" />
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-body">
                        {this.renderSexoNascimento()}
                        {this.renderGeneroDeclarado()}
                        {this.renderUF()}
                        {this.renderRacaCor()}

                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-body">
                        <div class="field">
                            <label class="label" for="estado-civil">Estado civil:</label>
                            <div class="control">
                                <div class="select">
                                    <select name="estado-civil">
                                        <option>Masculino</option>
                                        <option>Feminino</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label" for="escolaridade">Escolaridade:</label>
                            <div class="control">
                                <div class="select">
                                    <select name="escolaridade">
                                        <option>Masculino</option>
                                        <option>Feminino</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label" for="ocupacao">Ocupação:</label>
                            <div class="control">
                                <div class="select">
                                    <select name="ocupacao">
                                        <option>Masculino</option>
                                        <option>Feminino</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label" for="vinculo-empregaticio">Qual tipo de vínculo empregatício?</label>
                            <div class="control">
                                <div class="select">
                                    <select name="vinculo-empregaticio">
                                        <option>Empregado com carteira de trabalho assinada</option>
                                        <option>Feminino</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label class="label" for="renda-individual">Renda individual:</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="R$00,00" name="renda-individual" />
                    </div>
                </div>
                <div class="field">
                    <label class="label" for="renda-familiar">Renda familiar:</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="R$00,00" name="renda-familiar" />
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-body">
                        <div class="field">
                            <label class="label" for="beneficio-renda-governamental">Recebe algum benefício de
                                transferência de
                                renda governamental?
                            </label>
                            <div class="control">
                                <div class="select">
                                    <select name="beneficio-renda-governamental">
                                        <option>Sim</option>
                                        <option>Não</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                        <div class="field">
                            <label class="label" for="valor-beneficio-renda-governamental">Valor:</label>
                            <div class="help">
                                <p>Se sim, qual?</p>
                            </div>
                            <div class="control">
                                <input class="input" type="text" placeholder="R$00,00" name="valor-beneficio-renda-governamental" />
                            </div>
                        </div>
                    </div>

                </div>
                <div class="field">
                    <label class="label" for="cartao-sus">Cartão Nacional do SUS:</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="700" name="cartao-sus" />
                    </div>
                </div>
                <div class="field is-grouped is-grouped-right">
                    <p class="control">
                        <a class="button is-success">
                            Cadastrar
                        </a>
                    </p>
                    <p class="control">
                        <a class="button is-danger">
                            Cancelar
                        </a>
                    </p>
                </div>
            </form>
        );
    }

    render() {
        return (
            <Fragment>
                <Header titulo="Novo Cidadão" subtitulo="Formulário para novo cidadão" />

                <section className="conteudo novo-cidadao container">
                    {this.renderFormulario()}
                </section>

                <a class="icon-rota hvr-pulse-grow" href="/">
                    <span class="icon is-large has-text-primary">
                        <i class="fa fa-user-circle fa-3x" aria-hidden="true"></i>
                    </span>
                </a>
            </Fragment>
        );
    }
}

export default CadastroCidadao;
