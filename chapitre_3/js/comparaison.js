var nb1 = Number(prompt("Entrez un 1er nombre :"))
var nb2 = Number(prompt("Entrez un 2ème nombre :"))
if (nb1 < nb2) {
	console.log(nb1 + " est inférieur à " + nb2)
} else if (nb1 > nb2) {
	console.log(nb1 + " est supérieur à " + nb2)
} else if (nb1 === nb2) {
	console.log("Vous avez entré le même nombre")
} else {
	console.log("Ceci n'est pas un nombre")
}