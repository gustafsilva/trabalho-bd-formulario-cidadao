const restify = require('restify');
const rotas = require('./rotas');
const corsMiddleware = require('restify-cors-middleware');


const servidor = restify.createServer();
const plugins = restify.plugins;

servidor.use(plugins.queryParser());
servidor.use(plugins.bodyParser());

servidor.use((requisicao, resposta, proximo) => {
      resposta.header("Access-Control-Allow-Origin", "*");
      resposta.header("Access-Control-Allow-Headers", "X-Requested-With");
      return proximo();
    }
);


const { rotasCidadao, rotasAuxiliares } = rotas;
rotasCidadao(servidor);
rotasAuxiliares(servidor);

module.exports = servidor;
