/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var nuevoArreglo =[]
   for(var [i, j] of Object.entries(objeto)){
       nuevoArreglo.push([i,j])
   }

   return nuevoArreglo
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var alfabeto = {'a':0,'b':0,'c':0,'d':0,'e':0,'f':0,'g':0,'h':0,'i':0,'j':0,'k':0,'l':0,'m':0,'n':0,'ñ':0,'o':0,'p':0,'q':0,'r':0,'s':0,'t':0,'u':0,'v':0,'w':0,'x':0,'y':0,'z':0}
   var presentar = {}
   for(var i of string){
       for(var j in alfabeto){
           if(i === j){
               alfabeto[j] += 1;
           }
       }
   }
   
   for(var j in alfabeto){
       if(alfabeto[j]>0){
           presentar[j] = alfabeto[j]
       }
   }
   
   return presentar
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var alfabetoMinusculas = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']
   var alfabetoMayusculas = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z']
   var minusculas = [];
   var mayusculas = [];
   var stringNuevo = string.split('');
   var minu, mayu;
   
    for(var i of stringNuevo){
        for(var j of alfabetoMinusculas){
            if(i === j){
               minusculas.push(i)
            }
        }
    }
    for(var i of stringNuevo){
        for(var j of alfabetoMayusculas){
            if(i === j){
              mayusculas.push(i)
            }
        }
    }

    minu = minusculas.join('')
    mayu = mayusculas.join('')
    return mayu+minu

}

function asAmirror(frase){
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   function rever(string){
      var stringOld = string.split('')
      var nuevaPalabra = []
      
      for(var i in stringOld){
          nuevaPalabra.unshift(stringOld[i])
      }
      return nuevaPalabra.join('') 
  }
  
  var fraseArray = frase.split(' ');
  var fraseNueva = []
  for(var i of fraseArray){
      fraseNueva.push(rever(i));
  }
  return fraseNueva.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   function rever(string){
      var stringOld = string.split('')
      var nuevaPalabra = []
      
      for(var i in stringOld){
          nuevaPalabra.unshift(stringOld[i])
      }
      return nuevaPalabra.join('') 
  }

  var capicua = parseInt(rever(numero.toString()),10)

  if(capicua === numero){
   return "Es capicua"
  }
  else{
   return "No es capicua"
  }


}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var letras = ['a','b','c'];
   var nuevoString = string.split('');
   
    for(var i in nuevoString){
        for(var j in letras){
            if(nuevoString[i] === letras[j]){
                nuevoString.splice(i, 1);
            }
        }
    }
   
   return nuevoString.join('')
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var nuevoArreglo = [];
   var mayor = [];
   var cont = 0;
   for(var i in arrayOfStrings){
      for(var j in arrayOfStrings){
         if(arrayOfStrings[i].length > arrayOfStrings[j].length){
            arrayOfStrings.push(arrayOfStrings[i]);
            arrayOfStrings.splice(i,1);
         }
      }
   }
   
   return arrayOfStrings
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var arrayNuevo = [];
    for(var i of array1){
        for(var j of array2){
            if(i === j){
                arrayNuevo.push(i)
            }
        }
    }
 
    return arrayNuevo
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
