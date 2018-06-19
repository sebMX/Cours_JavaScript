// Exercice : compte bancaire

var credit = Number(prompt("Entrez un montant à créditer :"));
var debit = Number(prompt("Entrez un montant à débiter :"));

var compte = {
	titulaire: "Alex",
	solde: 0,

	crediter: function (montant) {
		this.solde = this.solde + montant;
	},
	debiter: function (montant) {
		this.solde = this.solde - montant;
	},
	decrire: function () {
		var description = "Titulaire : " + this.titulaire + ", solde : " + this.solde + " euros";
		return description;
	}
}
console.log(compte.decrire());	// Affiche le solde avant cal200cul

compte.crediter(credit);		// Cacule le montant crédité
compte.debiter(debit);			// Cacule le montant débité

console.log(compte.decrire());	// Affiche le solde après calcul