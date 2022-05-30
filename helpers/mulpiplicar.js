const fs = require('fs');

const colors = require('colors/safe')


console.clear();

const crearArchivo = async( base = 5, l = false ) =>{

    try {
        
        console.log(l)
        if(l){
            console.log(colors.green('============================================'));
            console.log('Tabla de multiplicar del', base)
            console.log(colors.green('============================================'));
        }
        let salida = '';
        for(let i = 1;  i <= 10; i++){
            salida += ` ${base} * ${i} = ${base * i}\n `;
        }
        if(l){
         console.log(colors.rainbow(salida));
        }
        fs.writeFile( `./salida/tabla-${ base }.txt`, salida, (err) =>{
            if(err) throw err;
            console.log('El archivo se escribio correctamente')
        });
        
        console.log(colors.red(`tabla-${base}.txt creado`));

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
};

//Para exportar la funcion
module.exports  = {
    crearArchivo
}
