// Mini jeu de rôle

// Création d'un personnage
var perso = {
	nom: "Seb",
	sante: 150,
	force: 25,
	xp: 20,

	// La notion de méthode
	// Renvoie la description du personnage
	decrire: function () {
		var description = this.nom + " à " + this.sante + " points de vie " + this.force + " en force et " 
		+ this.xp + " points d'expérience" ;
		return description;
	}
};

// console.log(perso.nom + " à " + perso.sante + " points de vie et " + perso.force + " en force");
console.log(perso.decrire());

// Seb est blessée par une flèche
perso.sante = perso.sante - 20;

// Seb trouve un bracelet de force
perso.force = perso.force + 10;

// console.log(perso.nom + " à " + perso.sante + " points de vie et " + perso.force + " en force");
console.log(perso.decrire());

// Seb gagne en expérience
perso.xp = perso.xp + 10;

console.log(perso.decrire());
// alert(perso.decrire());