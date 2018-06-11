// Afficher l'heure une seconde plus tard

var heures = Number(prompt("Entrez heures"));
var minutes = Number(prompt("Entrez minutes"));
var secondes = Number(prompt("Entrez secondes"));

if ((heures >= 0) && (heures <= 23) && (minutes >= 0) && (minutes <= 59) &&
	(secondes >= 0) && (secondes <= 59)) {
	secondes++;			// On ajoute une seconde : incrémentation
	if (secondes === 60) {
		secondes = 0;	// On remet les secondes à 0

		minutes++;
		if (minutes === 60) {
			minutes = 0;

			heures++;
			if (heures === 24) {
				heures = 0;		// Il sera minuit
			}
		}
	}
	console.log("Dans une seconde, il sera " + heures +"h " + minutes + "m " + secondes + "s");
} else {
	console.log("Heure incorrect");
}
