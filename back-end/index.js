const servidor = require('./src/servidor');

servidor.listen(3000, () => {
    console.info('servidor: localhost\t porta: 3000');
})
