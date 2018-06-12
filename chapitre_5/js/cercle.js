// Exercice : périmètre et aire d'un cercle

// Renvoie le périmètre d'un cercle
function perimetre(rayon) {
	return 2 * rayon * Math.PI;
}

// Renvoie l'aire d'un disque
function aire(rayon) {
	return (Math.pow(rayon, 2)) * Math.PI;
}

var r = Number(prompt("Entrez un rayon de cercle :"));
console.log("Le périmètre est " + perimetre(r));
console.log("L'aire est " + aire(r));