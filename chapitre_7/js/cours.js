// Ajout création objet avec constructeur

var stylo = {
	type: "bille",
	couleur: "bleu",
	marque: "Bic"
};
// Constructeur MonObjet
function MonObjet() {
	// Initialisation de l'objet
	// ...
};
// Instanciation d'un objet à partir du constructeur
var monObj = new MonObjet();

console.log(stylo.type);	// Affiche "bille"
console.log(stylo.couleur);	// Affiche "bleu"
console.log(stylo.marque);	// Affiche "Bic"
console.log("Mon stylo à " + stylo.type + " " + stylo.marque+ " écrit en " + stylo.couleur);

stylo.couleur = "vert";	// Modifie la couleur
stylo.prix = 2.5;	// Ajout dynamique de propriété  à l'objet : prix

console.log("Mon stylo " + stylo.couleur + " coûte " + stylo.prix + " euros");