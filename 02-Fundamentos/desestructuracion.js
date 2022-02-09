

const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder : 'Regeneracion',
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`;

    } 
    
}
//console.log(deadpool.getNombre());

//utilizo desectruturacion usando el objeto 
//const {nombre,apellido,poder, edad = 0} = deadpool;

function imprimerHeroe({nombre,apellido,poder, edad = 0 }){
    //const {nombre,apellido,poder, edad = 0} = heroe;
    console.log(nombre,apellido,poder,edad);
}


//console.log(nombre,apellido,poder,edad);

//imprimerHeroe(deadpool);

//desestructuracion de arreglo

const heroes = ['Deadpool','Superman','Batman'];

//const h1 = heroes[0];
//const h2 = heroes[1];
//const h3 = heroes[2];

//para tomar solo la tercer posicion
const [,,h3] = heroes;

console.log(h3);

