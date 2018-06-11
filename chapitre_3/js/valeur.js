var nb1 = Number(prompt("Entrez nb1"))
var nb2 = Number(prompt("Entrez nb2"))
var nb3 = Number(prompt("Entrez nb3"))
if (nb1 > nb2) {	// si nb1 > nb2
	nb1 = nb3 * 2;	// cette fontion s'applique
} else {
	nb1++;						// incrémente d'une unité : nb1 +1
	if (nb2 > nb3) {			// si nb2 > nb3
		nb1 = nb1 + nb3 * 3;	// cette fontion s'applique
	} else {					// sinon cette fonction s'applique
		nb1 = 0;
		nb3 = nb3 * 2 + nb2;
	}
} 