// Exercice : table de multiplication

var nbre = 0;	// Valeur par défaut permettant d'entrer dans la boucle
while ((nbre < 2) || (nbre > 9)) {
	nbre = Number(prompt("Entrez un nombre entre 2 et 9"));
}
console.log("Voici la table de mutiplication de " + nbre);

var i = 1;
while (i <= 10) {
	console.log(nbre + " x " + i + " = " + (nbre * i));
	i++;
}