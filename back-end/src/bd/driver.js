const mysql = require('mysql');


const config = {
    host: 'localhost',
    user: 'root',
    password: 'vamospassar',
    database: 'trabalhoBancoDeDados'
};


const novaConexao = () => {
    return new Promise((resolve, reject) => {
        try {
            const conexao = mysql.createConnection(config);
            resolve(conexao);
        } catch (erro) {
            reject(erro);
        }
    });
}

const executarQuery = (conexao, query) => {
    let flags = {
        conexao,
        query
    }
    return new Promise((resolve, reject) => {
        conexao.query(query, (erro, resultado) => {
            if (erro) {
                reject(erro);
            } else {
                flags.resultado = resultado;
                resolve(flags);
            }
        })
    })
}

const fecharConexaoEObterResultado = (flags) => {
    const { conexao, resultado } = flags;

    return new Promise((resolve) => {
        if(conexao && conexao.state != 'disconnected') {
            conexao.end()
            resolve(resultado);
        } else {
            resolve(flags);
        }
    });
}

module.exports = {
    novaConexao,
    executarQuery,
    fecharConexaoEObterResultado
}
