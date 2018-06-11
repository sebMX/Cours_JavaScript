// Saisir un nombre
//Si ce nombre est positif
//Afficher un message
/*
var nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
	console.log(nombre + " est positif");
}
else {
	console.log(nombre + " est négatif ou nul");
}
*/
// ======================================================================
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

// ======================================================================
// Exprimer un choix

// Essayons d'écrire un programme qui conseille l'utilisateur sur la tenue à porter 
// en fonction de la météo actuelle. Une première solution consiste à utiliser des instructions if/else. 

var meteo = prompt("Quel temps fait-il dehors ?");
if (meteo === "soleil") {
    console.log("Sortez en t-shirt.");
} else if (meteo === "vent") {
    console.log("Sortez en pull.");
} else if (meteo === "pluie") {
    console.log("Sortez en blouson.");
} else if (meteo === "neige") {
    console.log("Restez au chaud à la maison.");
} else {
    console.log("Je n'ai pas compris !");

}

// Testez le code source ci-dessus dans le fichiercours.js.

// Lorsqu'un programme consiste à déclencher un bloc d'opérations parmi plusieurs 
// selon la valeur d'une expression, on peut l'écrire en utilisant l'instruction JavaScriptswitch.
/*
var meteo = prompt("Quel temps fait-il dehors ?");
switch (meteo) {
case "soleil":
    console.log("Sortez en t-shirt.");
    break;
case "vent":
    console.log("Sortez en pull.");
    break;
case "pluie":
    console.log("Sortez en blouson.");
    break;
case "neige":
    console.log("Restez au chaud à la maison.");
    break;
default:
    console.log("Je n'ai pas compris !");

}
*/

// Recopiez puis testez ce code. Son résultat est identique à la version précédente.

// L'instructionswitch déclenche l'exécution d'un bloc d'instructions parmi plusieurs possibles. 
// Seul le bloc correspondant à la valeur de l'expression testée sera pris en compte. 
// Sa syntaxe est la suivante.
/*
switch (expression) {
case valeur1:
    // instructions exécutées quand expression vaut valeur1
    break;
case valeur2:
    // instructions exécutées quand expression vaut valeur2
    break;
...
default:
    // instructions exécutées quand aucune des valeurs ne correspond

}
*/
// Il n'y a pas de limite au nombre de cas possibles. 
// Le mot-clé default, à placer en fin deswitch, est optionnel. 
// Il sert souvent à gérer les cas d'erreurs, comme dans l'exemple ci-dessus.