// REPASO DEL Viernes 29/03
// Contiene: rest operator en funciones
// Repaso de: class, push, for of, Math.random.

// Importa este archivo en tu documento HTML y córrelo con el live server!
//--------------------------------------------------------------------------------------
// Interludio: Mientras tanto, en la sede de Pizza Hug....
//--------------------------------------------------------------------------------------
// Nuestro cliente está un poco más loco de lo que pensábamos.
// Quiere crear un equipo de I+D para buscar nuevos ingredientes que rompan el mercado.
// Ha contratado un puñado de becarios para usar una TurboMix durante dos semanas,
// y murmura por los pasillos hablando sobre el ingrediente definitivo.

//SETUP
class Ingredient {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}
//INGREDIENTES BASE
const ingredientes = [];
ingredientes.push(
  new Ingredient("peperoni", 25),
  new Ingredient("cheese", 30),
  new Ingredient("jam", 40),
  new Ingredient("lechuce", 25),
  new Ingredient("pork", 40),
  new Ingredient("mushroom", 30),
  new Ingredient("pineapple", 99999)
);
//Hay 6 ingredientes base en el array. Recuerda:[0] [5]

// Prueba tú mismo a cambiar la combinación de ingredientes.
// El resultado se mostrará en consola.
const ingredienteExperimental = useTurboMix(
  ingredientes[0],
  ingredientes[1],
  ingredientes[2]
);
testIngredient(ingredienteExperimental);

/**
 * @description Mezcla 2 o más ingredientes y retorna uno nuevo sumando partes de los nombres y su coste.
 * @param  {Ingredient} ingredient1   Primer ingrediente a mezclar
 * @param  {Ingredient} ingredient2   Segundo ingrediente a mezclar
 * @param  {Ingredient[]} moreIngredients  OPCIONAL. Más ingredientes adicionales separados por comas!
 */
function useTurboMix(ingredient1, ingredient2, ...moreIngredients) {
  console.log(`La turbomix está mezclando!`);
  console.log(arguments);
  let resultName = "";
  let resultCost = 0;
  //Recuerda: for of itera sobre los VALORES.
  for (let ingredient of arguments) {
    //'peperoni' + 'cheese' --> 'pepechee'
    resultName += ingredient.name.slice(0, 4);
    resultCost += ingredient.cost;
  }

  console.log(`Has creado un ${resultName}! (cost: ${resultCost})`);
  return new Ingredient(resultName, resultCost);
}
//EXPLICACIONES
// --> REST parameter (I)
//------------------------------------------------------------------------------
/* El uso más simple: En funciones
  * Indica que el resto de argumentos son opcionales.
  * De usarse, el rest parameter SIEMPRE se pone como argumento final.
  * Tiene la sintaxis de 3 puntos:   ...nombreVariable
  * Agrupa los argumentos adicionales que enviemos en esa variable (es iterable)
  * 
------------------------------------------------------------------------------
--> ¿Que es eso de arguments?
------------------------------------------------------------------------------
  * Se puede iterar por los parámetros de cualquier función. 
  * Se almacenan como variable arguments.
  En useTurboMix()
  ingredient1 = arguments[0]
  ingredient2 = arguments[1]
  ...moreIngredients = arguments[2], arguments[3], arguments[n] (tantos como le envíes separados por comas)

------------------------------------------------------------------------------
  --> Explicación de la función useTurboMix()
  ------------------------------------------------------------------------------
  ingredient1 y ingredient2 en la función useTurboMix() son obligatorios, porque necesitas al menos dos
  ingredientes para mezclar. ¿Pero que pasa si el becario quiere mezclar 3, 5 o 20? 
  Ahí es donde rest viene al rescate. Es una forma de decirle a la función que acepte tantos
  parámetros como se quieran enviar, separados por comas. Estos se agruparán automáticamente en el iterable
  moreIngredientes al entrar en la función.

  Aunque es interesante, y más gráfico, indicar qué parámetros son obligatorios y luego usar rest....
  También podría declararse la función como:
  function useTurboMix(...ingredients) {
    for(let ingredient of ingredients) {
      //code here
    }
  }

  Documentación:
  Arguments
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
  Otro ejemplo:
  https://www.geeksforgeeks.org/javascript-rest-operator/

  Rest Operator
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
*/

//EXTRA: JUST FOR FUN -> ¿Que pasa si el becario prueba el nuevo ingrediente?
function testIngredient(ingredient) {
  const baseMessage = "El becario que probó el ingrediente ";
  const extraMessages = [
    "cae desplomado",
    "empieza a emitir un brillo verdoso.",
    "se bebe 2 litros de agua, y se pasa el resto del día cepillándose los dientes. ¡Sabe a rayos!",
    "dice: 'No está mal'",
    "empieza a llorar de alegría. ¡Has encontrado la mezcla perfecta!"
  ];
  const indiceAleatorio = getRandomInt(extraMessages.length);
  console.log(baseMessage + extraMessages[indiceAleatorio]);
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//--------------------------------------------------------------------------
//CREATIVE CHALLENGE
//--------------------------------------------------------------------------
//¿se te ocurre cómo podría interaccionar la función testIngredient()
//con la salud del becario, y crear nuevas interacciones?
class BecarioDeEstomagoFragil {
  constructor(name, hp = 100) {
    this.name = name;
    this.hp = hp;
  }
}
