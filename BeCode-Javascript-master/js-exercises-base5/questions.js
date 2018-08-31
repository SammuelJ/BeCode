/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
	return texte.length;
}
var remplaceECar = function (texte) {
	return texte.replace(/e/m, " ");

}
var concatString = function (texte1, texte2) {
	return texte1 + texte2;
}
var afficherCar5 = function (texte) {
	return texte[4];

}
var afficher9Car = function (texte) {
	return texte.substring(0, 9)
}
var majusculeString = function (texte) {
	return texte.toUpperCase();

}
var minusculeString = function (texte) {
	return texte.toLowerCase();

}
var SupprEspaceString = function (texte) {
	return texte.trim();

}
var IsString = function (texte) {
	return typeof texte == "string";

}

var AfficherExtensionString = function (texte) {
	return texte.split('.')[1];
}
var NombreEspaceString = function (texte) {
	return texte.split(" ").length-1
}
var InverseString = function (texte) {
	var array;
	array = texte.split("");
	array.reverse();
	texte = array.join('');
	return texte;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
	return Math.pow(x, y);
}
var valeurAbsolue = function (nombre) {
	return Math.abs(nombre);

}
var valeurAbsolueArray = function (array) {
	let copie = [];
	array.forEach(absolute);
	function absolute (element) {
		copie.push(Math.abs(element));
	}
	return copie;

}
var sufaceCercle = function (rayon) {
	return Math.round(Math.PI * Math.pow(rayon, 2));
}
var hypothenuse = function (ab, ac) {
	return Math.sqrt(ab**2 + Math.pow(ac, 2));
}
var calculIMC = function (poids, taille) {
	//(Poids / (taille x taille).Ne garder que deux chiffres après la virgule.
	return parseFloat((poids / taille**2).toFixed(2));
}
