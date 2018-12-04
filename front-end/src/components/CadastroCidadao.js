import React, { Component, Fragment } from 'react';

import Header from './Header';

class CadastroCidadao extends Component {
    constructor(props) {
        super(props);

        this.state = {
            carregando: true,
            cidadoes: []
        }
    }

    componentDidMount() {
        const CAPTURAR_TODOS_CIDADOES = 'http://localhost:3000/cidadoes';

        fetch(CAPTURAR_TODOS_CIDADOES)
            .then(resposta => resposta.json())
            .then(cidadoes => {
                this.setState({
                    carregando: false,
                    cidadoes
                })
            })
            .catch(erro => console.error('Erro ao capturar todos os Cidadões', erro));
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
                        <div class="field">
                            <label class="label" for="sexo-nascimento">Sexo nascimento:</label>
                            <div class="control">
                                <div class="select">
                                    <select name="sexo-nascimento">
                                        <option>Masculino</option>
                                        <option>Feminino</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label" for="genero-declarado">Gênero declarado:</label>
                            <div class="control">
                                <div class="select">
                                    <select name="genero-declarado">
                                        <option>Masculino</option>
                                        <option>Feminino</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label" for="uf-nascimento">UF de nascimento:</label>
                            <div class="control">
                                <div class="select">
                                    <select name="uf-nascimento">
                                        <option>Masculino</option>
                                        <option>Feminino</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label" for="raca-cor">Raça/cor:</label>
                            <div class="control">
                                <div class="select">
                                    <select name="raca-cor">
                                        <option>Masculino</option>
                                        <option>Feminino</option>
                                    </select>
                                </div>
                            </div>
                        </div>
    
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
