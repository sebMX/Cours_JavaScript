var a;
a = 3.14;
console.log(a);

// On peut combiner declaration et affectation : var a = 3.14

var b = 0;	// b contient la valeur 0
b += 1;		// b contient la valeur 1
b++;		// b contient la valeur 2
console.log(b);	// affiche 2

// c est une expression dont la valeur est le nombre 3
var c = 3;
// d est une expression dont la valeur est celle de c (ici 3)
var d = c;
// (d + 1) est une expression
// sa valeur est celle de d augmentée de 1 (ici 4)
d = d + 1; // d contient la valeur 4
console.log(d); // affiche 4

// En l'absence de parenthèses, la priorité des opérateurs est la même qu'en mathématiques.
var e = 3 + 2 * 4;	// e contient la valeur 11
e = (3 + 2) * 4;	// e contient la valeur 20

var f = 100;
console.log("La variable f contient la valeur " + f);	// Concaténation

var g ="cinq" * 2;
console.log(g);		// Affiche NaN : Not a Number

var h = "5";
console.log(h + 1);	// Concaténation affiche : 51
