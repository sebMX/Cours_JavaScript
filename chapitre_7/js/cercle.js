// Modélisation d'un cercle

var r = Number(prompt("Entrez le rayon d'un cercle :"));

var cercle = {
	rayon: r,
	
	perimetre: function () {
		var description = 2 * r * Math.PI;
		return description;
	},
	aire: function() {
		var description = Math.pow(r, 2) * Math.PI;
		return description;
	},
}
console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());

// OU
/*
var cercle = {
    rayon: r,

    // Renvoie le périmètre du cercle
    perimetre: function () {
        return 2 * this.rayon * Math.PI;
    },
    // Renvoie l'aire du cercle
    aire: function () {
        return this.rayon * this.rayon * Math.PI;
        // Autre possibilité
        //return Math.pow(this.rayon, 2) * Math.PI;
    }
};
*/