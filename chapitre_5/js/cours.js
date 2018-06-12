// Exercice : fonction
/*
function direBonjour() {
	console.log("Bonjour !"); 
}
console.log("Début du programme");
direBonjour();
console.log("Fin du programme");
*/
// ==================================

// Voici une variante de notre programme d'exemple.

/*
function direBonjour() {
    return "Bonjour !";
}

console.log("Début du programme");
var resultat = direBonjour();
console.log(resultat);
console.log("Fin du programme");
*/

// ==================================

// Déclaration d'une fonction nommée maFonction

/* 
function maFonction() {
    // Instructions de la fonction
}
// ...
maFonction(); // Appel de la fonction maFonction
// ...
*/

// ==================================

// Passage de paramètres

function direBonjour(prenom) {
    var message = "Bonjour, " + prenom + " !";
    return message;
}

console.log(direBonjour("Baptiste"));
console.log(direBonjour("Sophie"));