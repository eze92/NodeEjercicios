const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer")

const main = async() => {

    let opt = 0;

    do{
        opt = await inquirerMenu();
        console.log({opt})

        if (opt !==0)
        await pausa();

        /*switch (opt) {
            case 1:
                
                break;

            case 2:
                
                break;

            case 0:
                
                 break;
        }*/
    }
    while ( opt != 0);
}

main();