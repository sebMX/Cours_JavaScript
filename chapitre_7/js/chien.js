// Modélisation d'un chien

var chien = {
	nom: "Crockdur",
	race: "matin de naples",
	taille: 175,
	aboyer: "Grrr ! Grrr !",

	decrire01: function () {
		var description = this.nom + " est un " + this.race + 
		" mesurant " + this.taille + " cm"; 
		return description;
	},
	decrire02: function () {
		var description = "Tiens, un chat ! " + this.nom + " aboie " + this.aboyer;
		return description;
	},
}
console.log(chien.decrire01());
console.log(chien.decrire02());
