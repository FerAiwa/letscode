//REPASO DEL Martes 26:
// Contiene: FUNCIONES, ARROW FUNCTIONS, MAP, FILTER, FOR OF y FOR IN.
// ¡Antes de leer  puedes importar este archivo en tu html y correrlo con el live server. Tiene sorpresa.

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
const BOSificator = (name) => {
  return name + "_BOS";
};

//2. MAP & FILTER (métodos de array)
//---------------------------------------------------------------------------------------------
//CLAVES que recordar:
// Iteran sobre TODOS los valores del array. No tienen break.
// Se pueden encadenar! (Porque devuelven otro array)
// Mnemotecnia: "Usa VIA ou todo VAI o carallo".
// Los argumentos del callback (la funcion dentro del map) siempre deben ser en orden: (v,i,a) -> Valor, Indice, Array.
// Tú puedes llamarle como quieras a ese v,i,a .(persona,indice,array) (value,in, list) (x,i,arr)...
// Tip: Empieza con la version larga (version,indice), hasta que la interiorices, y luego busca tu propia fórmula. Experimenta.

// .map y . filter hacen operaciones sobre los valores pero NO cambian el array original. 
// Igúalalos a otra variable para guardar esos datos.

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
  .map(v => v = { name: v, group: 2, isAlumni: true, isTheBest: true });
//Recuerda: Si es más de una línea usar {} y el return. En la versión breve es implicito, lo que va
// después de la => es el nuevo valor que retorna.
//Ojo a la sintaxis! En versión larga es fácil que se cuele algún paréntesis mal colocado o el } final.

const isBoser = v => v.includes("_BOS"); //includes es un método de string! La función devolverá true/false si v incluye "_BOS"
const bosers = muchaGente.filter(isBoser);
//Recordamos: Opcionalmente, en vez de usar funcion anónima, puedes separar la función a un scope superior y llamarla
// desde dentro del filter o el map. (La llamará por cada iteración por el array, con el v,i,a actual)
// Sólo asegúrate de que tu función tenga el orden de argumentos v,i,a para que no te cambie i por valor o cosas raras!

//Que acabo de hacer en "compañeros"...?
//1. Filtro los string que NO contengan "_BOS" del array original muchaGente
//2. Por cada uno de esos resultados, creo un objeto con vuestro nombre y algunas propiedades más.
//3. Devuelvo un array que guardo en la constante compañeros.

//3. FOR OF, FOR IN
//----------------------------------------------------------------------------------------------
//Utiles cuando sólo te interesa el índice/key o el valor.
//for of --> itera sobre VALORES          ->  Equivalente a compañeros[i] en un for
//for in --> itera sobre INDICES/keys     ->  Equivalente al i en un for

for (let compañero of compañeros) {
  //Ojo: Después del map, compañeros es un array con objetos dentro!
  //{name:'Estefania', isAlumni: true, isTheBest: true}
  sayThanks(compañero.name);
}
for (let i in compañeros) {
  //0, 1, 2....
  //Otro día podemos revisarlo iterando en objetos, donde in es especialmente util.
  //Como avance recuerda que:  
    //const alumna = {name: 'Estefania'} 
    //para acceder acceder al name podríamos hacerlo como.... 
    //alumna.name
    //alumna['name']
    //o dinámicamente...
    //let key = 'name'
    //alumna[key] <--- te suena esta sintaxis de array[indice]...? Aquí está el truquini ;)
}



//----------------------------------------------------------------------------------------------
//Y para que asegurarnos  que el array original NO ha cambiado.... check!
console.log("All the original people:", muchaGente);
console.log("Best alumni", compañeros);
console.log("Bosers", bosers);

