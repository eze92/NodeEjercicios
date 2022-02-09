/*function sumar (a,b){
    resultado = a + b;
    return resultado;
}
*/

//paso a funcion flecha

/*const sumar = (a,b) => {
    resultado = a + b;
    return resultado;
}*/

//Cuando tengo una sola linea en el cuerpo de la funcion
//flecha expresarla sin el return y las llaves

const sumar = (a,b) =>  a + b;

//no necesito agregar argumentos 
const saludar = () => 'Hola Mundo';

/*de la vieja forma seria

function saludar(){
    texto = 'Hola mundo';
    return texto;
}
*/

console.log(sumar(1,2));

console.log(saludar());

