import { inquirerMenu, leerInput, pausa } from "./helpers/inquirer.mjs";


const main = async() => {
    let opcion;

    do {
        opcion = await inquirerMenu();
        console.log(`La opción seleccionada es la opción ${ opcion }`);

       if(opcion !== 0) await pausa();
       
    } while (opcion !== 0);
};

main();