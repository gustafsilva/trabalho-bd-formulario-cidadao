const restify = require('restify');
const rotas = require('./rotas');
const corsMiddleware = require('restify-cors-middleware');


const servidor = restify.createServer();
const plugins = restify.plugins;

servidor.use(plugins.queryParser());
servidor.use(plugins.bodyParser());

const cors = corsMiddleware({
    origins: ['http://localhost:3000'],
});
servidor.pre(cors.preflight);
servidor.use(cors.actual);


const { rotasCidadao, rotasAuxiliares } = rotas;
rotasCidadao(servidor);
rotasAuxiliares(servidor);

module.exports = servidor;
