// Jour suivant
/*
var jour = prompt("Entrez un jour de la semaine :")
switch (jour) {
	case "Lundi":
		console.log("Demain sera mardi")
		break;
	case "Mardi":
		console.log("Demain sera mercredi")
		break;
	case "Mercredi":
		console.log("Demain sera jeudi")
		break;
	case "Jeudi":
		console.log("Demain sera vendredi")
		break;
	case "Vendredi":
		console.log("Demain sera samedi")
		break;
	case "Samedi":
		console.log("Demain sera dimanche")
		break;
	case "Dimanche":
		console.log("Demain sera lundi")
		break;	
	default:
		// statements_def
		console.log("Jour incorrect")
		break;
}
*/

// ===========================================

var jour = prompt("Entrez un jour de la semaine :")
if (jour === "Lundi") {
	console.log("Demain sera mardi");
} else if (jour === "Mardi") {
	console.log("Demain sera mercredi");
} else if (jour === "Mercredi") {
	console.log("Demain sera jeudi");
} else if (jour === "Jeudi") {
	console.log("Demain sera vendredi");
} else if (jour === "Vendredi") {
	console.log("Demain sera samedi");
} else if (jour === "Samedi") {
	console.log("Demain sera dimanche");
} else if (jour === "Dimanche") {
	console.log("Demain sera lundi");
} else {
	console.log("Jour incorrect");
}