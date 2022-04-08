require(`colors`);
const inquirer = require(`inquirer`);

const preguntas = [
    {
        type: `list`,
        name: `opcion`,
        message: `Seleccione una opción: `,
        choices: [
            {
                value: `1`,
                name: `${`1`.green}. Crear una nueva tarea`
            },
            {
                value: `2`,
                name: `${`2`.green}. Listar tareas`
            },
            {
                value: `3`,
                name: `${`3`.green}. Listar tareas completadas`
            },
            {
                value: `4`,
                name: `${`4`.green}. Listar tareas pendientes`
            },
            {
                value: `5`,
                name: `${`5`.green}. Completar tarea(s)`
            },
            {
                value: `6`,
                name: `${`6`.green}. Borrar tarea`
            },
            {
                value: `0`,
                name: `${`0`.green}. Salir`
            }
       ]
    }
];

const inquirerMenu = async() => {

    console.log(`====================================`.green);
    console.log(`Bienvenido a la aplicación`.white);
    console.log(`==================================== \n`.green);

    const {opcion} = await inquirer.prompt(preguntas);

    return opcion;
}

const pausa = async() => {

    const question = [
        {
            type: `input`,
            name: `enter`,
            message: `Presione ${`ENTER`.green} para continuar...`
        }
    ];

console.log(`\n`);
await inquirer.prompt(question);
}

const leerInput = async(message) => {

    const question = [
        {
            type: `input`,
            name: `desc`,
            message,
            validate: function(value) {
                if (value.length) {
                    return true;
                } else {
                    return `Debe ingresar una descripción`;
                }
            }
        }
    ];

    const {desc} = await inquirer.prompt(question);
    return desc;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}