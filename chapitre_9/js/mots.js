// Exercice : Saisie d'une liste de mots

var mots = [];

var mot = "";
while (mot !== "stop") {
	mot = prompt("Entrez un mot ou saisissez stop");
	if (mot !== "stop") {
		mots.push(mot);
	}
}
mots.forEach (function (mot) {
	console.log(mot);
});