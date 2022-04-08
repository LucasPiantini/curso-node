require('colors');

const pausa = () => {

    return new Promise( resolve => {

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`Presione ${'ENTER'.green} para continuar...`, (opcion) => {
            readline.close();
            resolve();
        });
    
    });
}

module.exports = {
    mostrarMenu,
    pausa
}