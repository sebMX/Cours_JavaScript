// Manipulation des tableaux en JavaScript

var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

console.log(films.length); // Affiche 3

// L'accès à un élément s'effectue en plaçant cet indice entre crochets, comme dans l'exemple ci-dessous.
console.log(films[0]); // Affiche "Le loup de Wall Street"
console.log(films[1]); // Affiche "Vice-Versa"
console.log(films[2]); // Affiche "Babysitting"

// Affiche tous les éléments du tableau
for (var i = 0; i < films.length; i++) {
	console.log(films[i]);
}
// Meme résultat
films.forEach (function (film) {
	console.log(film);
});

// Ajout d'un film dans le tableau
films.push("Les Bronzés");
console.log(films[3]);		// Affiche "Les Bronzés"

//////////////////////////////////////////////////////

// Tableaux d'objets

var Film = {	// Creation du prototype
	// Initialise le film
	init: function (titre, annee) {
		this.titre = titre;
		this.annee = annee;
	},
	// Renvoie la description
	decrire: function () {
		var description = this.titre + " (" + this.annee + ")";
		return description;
	}
};

var film1 = Object.create(Film);
film1.init("Le loup de Wall Street", 2013);

var film2 = Object.create(Film);
film2.init("Vice-Versa", 2015);

var film3 = Object.create(Film);
film3.init("Babysitting", 2013);

var films = [];		// Creation du tableau et insertion des films 1 à 3
films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function (film) {
	console.log(film.decrire());
});