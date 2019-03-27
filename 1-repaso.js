//ARRAY ORIGINAL
//---------------------------------------------------------------------------------------------
const muchaGente = [
  "Estefanía",
  "Brais_BOS",
  "Carlos",
  "Pablo_BOS",
  "Rafa",
  "María",
  "Rafa",
  "Jair_BOS",
  "Javier",
  "SonGoku_BOS",
  "Marcos_BOS"
];

//1. FUNCIONES
//---------------------------------------------------------------------------------------------
//Function.
function sayThanks(name) {
  console.log(`Estoy muy orgulloso, ${name}. ¡El próximo día más y mejor!`);
}
//Arrow function!
//Como es una variable debe estar declarada ANTES de que la llames en ningún otro sitio,
//o te lanzará un error de 'variable is not defined'
//Son ideales para sintaxis de una línea, y muy frecuentes dentro de métodos de array que iteran sobre él,
//como map y filter
const isBoser = v => v.includes("_BOS");
//Esta función coge un valor que es un string (nombre), y usa .includes (un método de string)
//includes devuelve true o false si el string contiene ese trocito.
//Así que la funcíon, sin más devolverá true o false.

//2. MAP & FILTER (métodos de array)
//---------------------------------------------------------------------------------------------
//CLAVES que recordar:
// Iteran sobre TODOS los valores del array. No tienen break.
// Los argumentos siempre deben ser en orden: (v,i,a) -> Valor, Indice, Array.
// Usa VIA ou todo VAI o carallo.
// Se pueden encadenar! (Porque devuelven otro array)

// .MAP y . filter hacen operaciones sobre los valores pero NO cambian el array original.
// por lo que hay que igualarlos a algo para guardar esos datos.
// map,filter y algunas otras que iteran sobre el array se pueden ENCADENAR,  porque te devolverán
// otro array.

const compañeros = muchaGente
  .filter((valor, i, a) => valor.includes("_BOS") == false)
  .map(valor => {
    //Si es más de una línea usar {} Y retornar el valor igualado a algo
    return (valor = { name: valor, group: 2, isAlumni: true, isTheBest: true });
  });

const bosers = muchaGente.filter(isBoser);
//Recordamos: Opcionalmente, en vez de usar funcion anónima, puedes separar la función y llamarla
// desde dentro del filter o el map. (La llamará por cada iteración del array, con el v,i,a actual)
// Sólo asegúrate de que tu función tenga el orden de argumentos v,i,a para que no pete!

//Que acabo de hacer...?
//1. Filtro los string que NO contengan "_BOS".
//2. Por cada uno de esos resultados, creo un objeto con vuestro nombre y algunas propiedades más.

//3. FOR OF, FOR IN
//----------------------------------------------------------------------------------------------
//for of --> itera sobre VALORES          ->  Equivalente a compañeros[i] en un for
//for in --> itera sobre INDICES/Claves   ->  Equivalente a i en un for

for (let compañero of compañeros) {
  //Ojo: Después del map, compañeros es un array con objetos dentro!
  //{name:'Estefania', isAlumni: true, isTheBest: true}
  sayThanks(compañero.name);
}
for (let i in compañeros) {
  //devolvería 0, 1, 2....
}
//----------------------------------------------------------------------------------------------
//Y para que asegurarnos  que el array original no ha cambiado.... check!
console.log("All the original people:", muchaGente);
console.log("Best alumni", compañeros);
console.log("Bosers", bosers);
