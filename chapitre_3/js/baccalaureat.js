var moyenne = Number(prompt("Entrez un nombre :"))
if (moyenne < 10) {
	console.log("Vous êtes recalé !")
} else if (moyenne < 12) {
	console.log("Vous êtes reçu !")
} else if (moyenne > 12) {
	console.log("Vous êtes reçu avec mention !")
} else {
	console.log("Donnée éronnée !")
}