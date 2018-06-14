// Obtenir la longueur d'une chaîne

console.log("ABC".length);					// Affiche 3
console.log("Je suis une chaine".length);	// Affiche 18

var mot = "Kangourou";
var longueurMot = mot.length;	// Contient 9
console.log(longueurMot);		// Affiche 9

// Convertir une chaîne en minuscules ou en majuscules

var motInitial = "Bora-Bora";
var motEnMinuscules = motInitial.toLowerCase();
console.log(motEnMinuscules);		// Affiche "bora-bora"

var motEnMajuscules = motInitial.toUpperCase();
console.log(motEnMajuscules);		// Affiche "BORA-BORA"

// Comparer deux chaînes

var chaine = "azerty";
console.log(chaine === "azerty");	// Affiche true
console.log(chaine === "qwerty");	// Affiche false

// Comparer une valeur saisie

var valeurSaisie = "Quitter";
console.log(valeurSaisie === "quitter");	// Affiche false cause majuscule
console.log(valeurSaisie.toLowerCase() === "quitter"); // Affiche true

// Accéder à un caractère d'une chaîne
// L'indice du premier caractère d'une chaîne est 0 et non 1 comme on aurait pu s'y attendre.

/*
Les caractères d'une chaîne sont donc numérotés à partir de 0 :

    L'indice du 1er caractère est 0

    L'indice du 2ème caractère est 1.

    L'indice du 3ème caractère est 2.

    ...
*/

var sport = "Tennis-ballon";	// 13 caractères
console.log(sport.charAt(0));	// Affiche "T"
console.log(sport[0]);			// Affiche "T"
console.log(sport.charAt(6));	// Affiche "-"
console.log(sport[6]);			// Affiche "-"

var longueurSport = sport.length;
console.log(sport[longueurSport - 1]);	// Affiche "n"
console.log(sport[longueurSport]);		// Affiche undefined : longueur dépassé

// Parcourir une chaîne caractère par caractère

var prenom = "Odile";	// 5 caractères
console.log(prenom[0]);
console.log(prenom[1]);
console.log(prenom[2]);
console.log(prenom[3]);
console.log(prenom[4]);

