// Exercice boucle while
/*
var i = 1;
while (i <= 5) {
	console.log("C'est le tour numéro " + i);
	i++;
}
*/

// Exercice boucle for
/*
var i;
for (i = 1; i <= 5; i++) {
	console.log("C'est le tour numéro " + i);
}
*/

// Exercice nombre de tours saisi par utilisateur

var nbTours = Number(prompt("Choisissez un nombre de tours !"));
var tour = 1;
while (tour <= nbTours) {
	console.log("C'est le tour numéro " + tour);
	tour++;
}