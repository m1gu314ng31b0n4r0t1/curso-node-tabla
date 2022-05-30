

const { crearArchivo } = require('./helpers/mulpiplicar');

const argv = require('./config/yargs');



console.clear();




/*
const fs = require('fs');



let base = 3; 
let salida = '';
console.clear();
console.log('============================================')
console.log('Tabla de multiplicar del', base)
console.log('============================================')
const multiply = ( numbre ) =>{
    

    for(let i = 1;  i <= numbre; i++){
        salida += ` ${base} * ${i} = ${base * i}\n `;
    }
}

multiply(10);

fs.writeFile( `tabla-${ base }.txt`, salida, (err) =>{
    if(err) throw err;
    console.log('El archivo se escribio correctamente')
});

console.log(salida);

*/

//const base = 9;

console.log(process.argv);

console.log(argv);

console.log('yargs', argv.base);


//Recibir argunmentos desde la consola => node  app.js --bases=3

/*
const[,,arg3 = 'base=5'] = process.argv;

const[, base = 5] = arg3.split( '=' );



console.log(base);
*/
crearArchivo( argv.b, argv.l ).then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));



// Para ejectar scripts directamente desde la terminal hay que configurarlos en el archivo package.json seccion scripts ejemplo: npm ru base3


//Para instalar la depecncia de colores npm i colors 

//Para desintalar la depecncia de colores npm unistall colors 

//Para desintalar la depecncia de colores npm update para saver si hay nuevas versiones