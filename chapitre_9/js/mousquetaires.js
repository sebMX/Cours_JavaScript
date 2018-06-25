// Exercice : les trois mousquetaires

var mousquetaires = ["Athos", "Porthos", "Aramis"];	// 3 elements dans le tableau

console.log("Voici les trois mousquetaires :");

for (var i = 0; i < mousquetaires.length; i++) {
	console.log(mousquetaires[i]);
}

mousquetaires.push("D'Artagnan");	// Ajout d'1 element

console.log("A présent, ils sont quatre !");

mousquetaires.forEach (function (mousquetaire) { 
	console.log(mousquetaire);	// Affiche tous les elements 
});