//REPASO DEL Martes 26:
// Contiene: FUNCIONES, ARROW FUNCTIONS, MAP, FILTER, FOR OF y FOR IN.
// ¡Antes de leer todo, puedes importar este archivo en tu html y correrlo con el live server. Tiene sorpresa.

//1. FUNCIONES
//---------------------------------------------------------------------------------------------
//FUNCTION.
function sayThanks(name) {
  console.log(`Estoy muy orgulloso, ${name}. ¡El próximo día más y mejor!`);
}
//ARROW FUNCTION!
//Como es una variable debe estar declarada ANTES de que la llames en ningún otro sitio,
//o te lanzará un error de 'variable is not defined'
//Son ideales para sintaxis de una línea, y muy frecuentes dentro de métodos de array que iteran sobre él,
//como map y filter

//Forma BREVE (sintaxis de una línea, para operaciones simples)
// Si sólo tiene un argumento puedes obviar los paréntesis
// No necesita los "curly braces" {}
// El return es implícito.
const sum3 = a => a + 3;

//Forma Larga
const BOSificator = name => {
  return (name += "_BOS");
};

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

const compañeros = muchaGente
  .filter((valor, i, a) => valor.includes("_BOS") == false)
  .map(
    valor =>
      (valor = { name: valor, group: 2, isAlumni: true, isTheBest: true })
  );
//Recuerda: Si es más de una línea usar {} y el return. En la versión breve es implicito, lo que va
// después de la => es el nuevo valor que retorna.
//Ojo a la sintaxis! En versión larga es fácil que se cuele algún paréntesis mal colocado o el } final.

const isBoser = v => v.includes("_BOS"); //includes es un método de string! La función devolverá true/false si v incluye "_BOS"
const bosers = muchaGente.filter(isBoser);
//Recordamos: Opcionalmente, en vez de usar funcion anónima, puedes separar la función y llamarla
// desde dentro del filter o el map. (La llamará por cada iteración del array, con el v,i,a actual)
// Sólo asegúrate de que tu función tenga el orden de argumentos v,i,a para que no te cambie i por valor o cosas raras!

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
