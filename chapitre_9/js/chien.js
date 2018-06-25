// Exercice : Gestion d'un chenil

var Chien = {
	// Initialise le chien
	init: function (nom, race, taille) {
		this.nom = nom;
		this.race = race;
		this.taille = taille;
	},
	// Renvoie l'aboiement du chien
	aboyer: function () {
		var aboiement = "Whoua ! Whoua !";
		if (this.taille < 25) {
			aboiement = "Kaii ! Kaii !";
		} else if (this.taille > 60) {
			aboiement = "Grrr ! Grrr !";
		}
		return aboiement;
	},
	// Description
	decrire: function () {
		var description = this.nom + " est un " + this.race + " mesurant " + 
		this.taille + " cm. Il aboie : " + this.aboyer();
		return description;
	}
};

var chien1 = Object.create(Chien);
chien1.init("Crokdur", "matin de Naples", 75);
var chien2 = Object.create(Chien);
chien2.init("Pupuce", "bichon", 22);
var chien3 = Object.create(Chien);
chien3.init("Médor", "labrador", 58);

var chenil = [chien1, chien2, chien3];	// Tableau

console.log("Le chenil héberge " + chenil.length + " chien(s) :");

chenil.forEach (function (chien) {
	console.log(chien.decrire());
});