const restify = require('restify');
const rotas = require('./rotas');

const servidor = restify.createServer();
const plugins = restify.plugins;

servidor.use(plugins.queryParser());
servidor.use(plugins.bodyParser());

const { rotasCidadao, rotasAuxiliares } = rotas;
rotasCidadao(servidor);
rotasAuxiliares(servidor);

module.exports = servidor;
