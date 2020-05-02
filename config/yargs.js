const opciones = {
    base:{
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
            // listar --> Nombre del comando, imprime ... --> ayuda para el usuario , opciones ---> objeto que se envia
             .command('listar','imprime la tabla',opciones)
             .command('crear','Genera un archivo con tabla de multiplicar',opciones)
             .help()
             .argv

module.exports = {
    argv
}