const mysql = require('mysql');


const config = {
    host: 'localhost',
    user: 'root',
    password: 'vamospassar',
    database: 'trabalhoBancoDeDados'
};


const novaConexao = () => {
    return mysql.createConnection(config);
}

const executarQuery = (conexao, query) => {
    return new Promise((resolve, reject) => {
        conexao.query(query, (erro, resultado) => {
            if (erro) {
                reject(erro);
            } else {
                resolve(resultado);
            }
        })
    })
}

const fecharConexao= (conexao) => {
    if (conexao && conexao.state != 'disconnected') {
        conexao.end()
    }
}

module.exports = {
    novaConexao,
    executarQuery,
    fecharConexao
}
