const { numeroMasGrande } = require("./04-JS-III/homework/homework");

function todosIguales(arreglo) {
    //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    //Escribe tu código aquí  
    valor = arreglo[0];

    for (let i = 0; i < arreglo.length ; i++) {
        console.log(i);
        if(valor == arreglo[i]){
         console.log(i);
         return true;
        }
      }
    
    return false;
  } 

  var resultado = todosIguales([1,1,1,1,1,1,1,1]);
  console.log(resultado);