var CreationTableauLangages = function () {
	let tableau = ["Html", "CSS", "Java", "PHP"];
	return tableau;
}

var CreationTableauNombres = function () {
	let tableau = [ 0, 1, 2, 3, 4, 5 ];
	return tableau;

}

var RemplacementElement = function (langages) {
	langages[2] = "Javascript"
	return langages;
}

var AjoutElementLangages = function (langages) {
	langages.push("Ruby", "Python");
	return langages;

}

var AjoutElementNombres = function (nombres) {
	nombres.unshift(-2, -1)
	return nombres;

}

var SuppressionPremierElement = function (langages) {
	langages.shift();
	return langages;
}

var SuppressionDernierElement = function (langages) {
	langages.pop();
	return langages;

}

var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
	return reseaux_sociaux_chaine.split(",");

}

var ConversionTableauChaine = function (langages) {
	return langages.toString();

}

var TriTableau = function (reseaux_sociaux) {
	return reseaux_sociaux.sort();

}

var InversionTableau = function (reseaux_sociaux){
	return reseaux_sociaux.reverse();

}
