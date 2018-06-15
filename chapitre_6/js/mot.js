// Exercice : analyse d'un mot

var saisie = prompt("Entrez un mot pour obtenir des infos :");

// Informations sur le mot
console.log("Le mot " + saisie + " contient " + saisie.length + " caractère(s)");
console.log("Il s'écrit en minuscules " + saisie.toLowerCase());
console.log("Il s'écrit en majuscules " + saisie.toUpperCase());

// Comptage du nombre de voyelles
function compterNbVoyelles(saisie) {
    var nbVoyelles = 0;
    for (var i = 0; i < saisie.length; i++) {
        var lettre = saisie[i].toLowerCase();
        if ((lettre === 'a') || (lettre === 'e') || (lettre === 'i') ||
            (lettre === 'o') || (lettre === 'u') || (lettre === 'y')) {
            nbVoyelles++;
        }
    }
    return nbVoyelles;
}
//var longueurMot = saisie.length;	// Peut remplacer (saisie.length - nbVoyelles) soit : (longueurMot - nbVoyelles)
var nbVoyelles = compterNbVoyelles(saisie);
console.log("Il contient " + nbVoyelles + " voyelle(s) et " + (saisie.length - nbVoyelles) + " consonne(s)");

// Inversion du mot
function inverser(saisie) {
	 var motInverse = "";
	 for (var i = saisie.length - 1; i >= 0; i--) {	// Parcour le mot de la fin vers le début
	 	motInverse = motInverse + saisie[i];
	 }
	 return motInverse;
}
var motInverse = inverser(saisie);
console.log("Le mot " + saisie + " inversé : " + inverser(saisie));

// Verification si palindrome

if (motInverse.toLowerCase() == saisie.toLowerCase()) {
	console.log("C'est un palindrome");
} else {
	console.log("Ce n'est pas un palindrome");
}

// Convertir en "leet speak"

function convertirEnLeetSpeak(saisie) {
	var motLeet = "";
	for (var i = 0; i < saisie.length; i++) {
		motLeet = motLeet + trouverLettreLeet(saisie[i]);
	}
	return motLeet;
}
function trouverLettreLeet(lettre) {
	var lettreLeet = lettre;
	switch (lettre.toLowerCase()) {
		case "a":
			lettreLeet = "4";
			break;
		case "b":
			lettreLeet = "8";
			break;
		case "e":
			lettreLeet = "3";
			break;
		case "l":
			lettreLeet = "1";
			break;
		case "o":
			lettreLeet = "0";
			break;
		case "s":
			lettreLeet = "5";
			break;
		case "t":
			lettreLeet = "7";
			break;
		// ....
	}
	return lettreLeet;
}
var motLeetSpeak = convertirEnLeetSpeak(saisie);
console.log("Il s'écrit en leet speak " + motLeetSpeak);