var mois = Number(prompt("Entrez un nombre correspondant au mois :"));

if (mois === 1 || mois === 3 || mois === 5 || mois === 7 || mois === 8 || mois === 10 || mois === 12) {
	console.log("Mois de 31 jours");
} else if (mois === 4 || mois === 6 || mois === 9 || mois === 11) {
	console.log("Mois de 30 jours");
} else if (mois === 2) {
	console.log("Mois de 28 jours");
} else {
	console.log("Mois inconnu");
}