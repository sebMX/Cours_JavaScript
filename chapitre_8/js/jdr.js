// Exercice : Jeu de rôle

/*
var Personnage = {
	nom: "",
	sante: 0,
	force: 0,
	xp: 0,

	// Renvoie la description du personnage
	decrire: function() {
		var description = this.nom + " a " + this.sante + " points de vie, " +
			this.force + " en force et " + this.xp + " points d'expérience";
			return description;
	}
};

// Exemple un peu répétitif

var perso1 = Object.create(Personnage);
perso1.nom = "Aurora";
perso1.sante = 150;
perso1.force = 25;

var perso2 = Object.create(Personnage);
perso2.nom = "Glacius";
perso2.sante = 130;
perso2.force = 35;

console.log(perso1.decrire());
console.log(perso2.decrire());
*/


// Initialisation des personnages : Bonne pratique
/*
var Personnage = {
	// Initialise le personnage
	init: function(nom, sante, force) {
		this.nom = nom;
		this.sante = sante;
		this.force = force;
		this.xp = 0;
	},

	// Renvoie la description du personnage
	decrire: function() {
		var description = this.nom + " a " + this.sante + " points de vie, " +
			this.force + " en force et " + this.xp + " points d'expérience";
			return description;
	}
};

var perso1 = Object.create(Personnage);
perso1.init("Aurora", 150, 25);

var perso2 = Object.create(Personnage);
perso2.init("Glacius", 130, 30);

console.log(perso1.decrire());
console.log(perso2.decrire());
*/


// Des adversaires pour nos héros

var Personnage = {
	// Initialise le personnage
	initPerso: function (nom, sante, force) {
		this.nom = nom;
		this.sante = sante;
		this.force = force;
	}
};

var joueur = Object.create(Personnage);
// Initialise le joueur
joueur.initJoueur = function (nom, sante, force) {
	this.initPerso(nom, sante, force);
	this.xp = 0;	// L'expérience est initialisé à 0
};
// Renvoie la description du joueur
joueur.decrire = function () {
	var description = this.nom + " a " + this.sante + " points de vie, " +
			this.force + " en force et " + this.xp + " points d'expérience";
			return description;
};

var Adversaire = Object.create(Personnage);
// Initialise l'adversaire
Adversaire.initAdversaire = function (nom, sante, force, race, valeur) {
	this.initPerso(nom, sante, force);
	this.race = race;
	this.valeur = valeur;
}