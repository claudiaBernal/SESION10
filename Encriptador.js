function realizar(){

var letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", 

			  "s", "t", "u", "v", "w", "x", "y", "z", " "]

var frase = prompt("Ingrese su plabra en minusculas")
var frase = frase.toLowerCase();

 var cadena = frase.split("")
 console.log(cadena)


 for(i=0; i<cadena.length; i++){

 		var found = letras.findIndex(element => element == cadena[i]);
 		if(found == letras.length-1){
 			cadena[i] = letras[0]
 		}
 		else{

 		cadena[i] = letras[found + 1]
 	}

 }

 console.log(cadena)


 function desencriptar(){

 	for(i=0; i<cadena.length; i++){

 		var found = letras.findIndex(element => element == cadena[i]);
 		if(found == 0){
 			cadena[i] = letras[cadena.length-1]
 		}
 		else{

 		cadena[i] = letras[found - 1]
 	}

 }
 }

}