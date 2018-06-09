// Saisir un nombre
//Si ce nombre est positif
//Afficher un message

var nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
	console.log(nombre + " est positif");
}
else {
	console.log(nombre + " est négatif ou nul");
}

// Imbriquer des conditions
/*
var nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
    console.log(nombre + " est positif");
} else { // nombre <= 0
    if (nombre < 0) {
        console.log(nombre + " est négatif");
    } else { // nombre === 0
        console.log(nombre + " est nul");
    }
}
*/