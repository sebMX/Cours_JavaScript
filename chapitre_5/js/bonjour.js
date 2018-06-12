// Renvoie un message de bienvenue

function direBonjour (prenom, nom) {
	var message = "Bonjour, " + prenom + " " + nom + " !";
	return message;
}
p = prompt("Entrez votre prénom :")
n = prompt("Entrez votre nom :")
console.log(direBonjour(p, n));

// Exemple avec modal alert
// alert(direBonjour(p, n));