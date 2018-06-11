// L'opérateur && (ET logique) s'applique à deux valeurs de type booléen. 
// Son résultat est la valeurtrue uniquement si les deux valeurs auxquelles il s'applique valent true.

console.log(true && true); // Affiche true

console.log(true && false); // Affiche false

console.log(false && true); // Affiche false

console.log(false && false); // Affiche false

// Le résultat ci-dessus constitue ce qu'on appelle la table de vérité de l'opérateur &&

// L'opérateur logique OU

// Imaginons maintenant qu'on souhaite vérifier qu'un nombre est en dehors de l'intervalle [0, 100]. 
// Pour satisfaire à cette condition, ce nombre doit être inférieur à 0 OU supérieur à 100.

// Traduit en JavaScript, cet exemple donne le résultat suivant.

if ((nombre < 0) || (nombre > 100)) {
    console.log(nombre + " est en dehors de l'intervalle [0, 100]");

}

// L'opérateur || (OU logique) s'applique à deux valeurs de type booléen. 
// Son résultat est la valeur true si au moins une des deux valeurs auxquelles il s'applique vaut true. 
// Voici la table de vérité de l'opérateur ||.

console.log(true || true); // Affiche true
console.log(true || false); // Affiche true
console.log(false || true); // Affiche true
console.log(false || false); // Affiche false

// L'opérateur logique NON

// Il existe un troisième opérateur logique qui permet d'inverser la valeur d'une condition : 
// l'opérateur NON. Il s'écrit en JavaScript sous la forme d'un point d'exclamation (!).

if (!(nombre > 100)) {

    console.log(nombre + " est inférieur ou égal à 100");

}

// Voici la table de vérité de cet opérateur. 

console.log(!true); // Affiche false

console.log(!false); // Affiche true