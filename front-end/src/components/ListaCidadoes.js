import React, { Component, Fragment } from 'react';

import Header from './Header';

class ListaCidadoes extends Component {
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

    renderCidadao(cidadao, key) {
        return (
            <tr key={key}>
                <td>{cidadao.CPF}</td>
                <td>{cidadao.Nome_Cidadao}</td>
                <td>{cidadao.Nome_Social}</td>
                <td>{cidadao.Nome_Mae}</td>
                <td>{cidadao.Data_Nascimento}</td>
            </tr>
        );
    }

    renderCidadoes() {
        if (this.state.carregando) {
            return (<p className="has-text-centered">Carregando Cidadões...</p>);
        }
        return (
            <table className="table">
                <thead>
                    <th>CPF</th>
                    <th>Nome Completo</th>
                    <th>Nome Social</th>
                    <th>Nome da Mãe</th>
                    <th>Data de Nascimento</th>
                </thead>

                <tbody>
                    {
                        this.state.cidadoes.map((cidadao, indice) => (this.renderCidadao(cidadao, indice)))
                    }
                </tbody>
            </table>
        );
    }

    render() {
        return (
            <Fragment>
                <Header titulo="Cadastro Cidadao" subtitulo="Lista completa de todos os cidadões cadastrados no Banco de dados" />

                <section className="conteudo cidadoes container">
                    {this.renderCidadoes()}
                </section>

                <a className="icon-rota hvr-pulse-grow" href="/cadastro">
                    <span className="icon is-large has-text-success">
                        <i className="fa fa-plus-circle fa-3x" aria-hidden="true"></i>
                    </span>
                </a>
            </Fragment >
        );
    }
}

export default ListaCidadoes;
