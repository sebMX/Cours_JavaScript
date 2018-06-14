// 

var saisie = prompt("Entrez un mot pour obtenir des infos :");

console.log("Le mot " + saisie + " contient " + saisie.length + " caractère(s)");
console.log("Il s'écrit en minuscules " + saisie.toLowerCase());
console.log("Il s'écrit en majuscules " + saisie.toUpperCase());

function compterNbVoyelles (mot) {
	var NbVoyelles = 0;
	for (var i = 0; i < mot.length; i++) {
		var lettre = mot.toLowerCase();
		if ((lettre === "a") || (lettre === "e") || (lettre === "i") ||
			 (lettre === "o") || (lettre === "u") || (lettre === "y")) {
			NbVoyelles++;
		}
	}
	return NbVoyelles;
}