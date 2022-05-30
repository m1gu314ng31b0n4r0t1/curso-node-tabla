
const argv = require('yargs')
    //Para poner un alias a los parametros de entrada
    .option('b',{
        alias: 'base',
        type:'number',
        demandOption: true,
        describe:'Es la base dal tabla de multiplicar'
    }).check( (argv, options) =>{
        //Para hacer validaciones a los parametros de entrada
        console.log(argv) 
        if(isNaN(argv.b)) {
            throw 'La base debe ser un numero'
        } 
        return true;
    })
    .option('l',{
        alias: 'listar',
        type:'boolean',
        demandOption: false,
        default: false,
        describe:'Es para saber si se imprime el log'
    }).check( (argv, options) =>{
        //Para hacer validaciones a los parametros de entrada
        console.log(argv) 
        if(isNaN(argv.b)) {
            throw 'La base debe ser un numero'
        } 
        return true;
    })
    .argv;

    module.exports = argv;