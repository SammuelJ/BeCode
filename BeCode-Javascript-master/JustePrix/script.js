//Variable qui sera utilisée pour afficher un message
var afficherMessage = "";
//Variable qui va compter le nombre d'essais
var nombreEssais = 0;
// Variable de la valeur minimum qu'on peut entrer (ici 20)
var minValue = 20;
//Variable de la valeur maximale qu'on peut entrer (ici 80)
var maxValue = 80;
//Variable numéro générer aléatoirement
var randomNumberGenerated;
// Variadle de la réponse utilisateur
var userInput;
// Variable numero max deviné
var inputUserMaxValue;
// Variable numero min deviné
var inputUserMinValue;

// Lance le jeu lors du click sur la div
document.getElementById("buttonToStart").addEventListener("click", () => {startGame()})

// Change le contenu de la div avec des variables
document.getElementById("buttonToStart").innerHTML = "Jouer au Juste Prix ! Prix compris entre " + minValue + " et " + maxValue + " !";

// Recupération de la valeur inséré
document.getElementById("inputUserMaxValue").addEventListener("input", () => {
	maxValue = parseInt(document.getElementById("inputUserMaxValue").value);
})
// Recupération de la valeur inséré
document.getElementById("inputUserMinValue").addEventListener("input", () => {
	minValue = parseInt(document.getElementById("inputUserMinValue").value);
})


// Demarre le jeu 
function startGame () {
	randomNumber()
	console.log(randomNumberGenerated);
	nombreEssais = 0;
	goGame();

}
// Permet de lancer le jeu et de demander un chiffre
function goGame () {
	userInput = parseInt(prompt("Le chiffre est compris entre " + minValue + " et " + maxValue + " !"));
	console.log(userInput);
	console.log(minValue + " " + userInput + " " + maxValue);
	if (userInput) {
		if (minValue <= userInput && userInput <= maxValue) {
			console.log("Chiffre ok");
			console.log(randomNumberGenerated);
			nombreEssais++;
			testInputNumber(userInput);
		}
		else {
			alert("Veuillez indiquer un chiffre compris entre " + minValue + " et " + maxValue + " !");
			goGame();
		}
	}
	else {
		console.log("Veuillez écrire dans la boite de texte qui apparait !");
	}
}
//Crée une fonction qui retourne un numéro aléatoire arondi entre la variable minimale et la variable maximale
function randomNumber () {
	return randomNumberGenerated = parseInt(Math.random() * (maxValue - minValue) + minValue);
}
/*Crée une fonction qui prends un argument pour tester si le numéro qu'on a entré est le bon
la fonction retourne un de ces 3 messages : C'est plus, C'est moins,C'est juste tu as trouvé en X coups*/
function testInputNumber (userInput) {
	if (userInput == randomNumberGenerated) {
		alert("C'est juste ! Tu as trouvé en " + nombreEssais + " coups");
		document.getElementById("win").innerHTML = "<h1>Vous avez réussis à trouver le juste prix en " + nombreEssais + " essais.<br> Bien joué !</h1>";
		nombreEssais = 0;
		console.log(nombreEssais);
	}
	else if (userInput <= randomNumberGenerated) {
		alert("C'est plus !");
		console.log(randomNumberGenerated);
		console.log(nombreEssais);
		goGame ()
	}
	else if (userInput >= randomNumberGenerated) {
		alert("C'est moins !");
		console.log(nombreEssais);
		goGame ()
	}
	else {
		alert("Erreur... Comment en es tu arrivé là ....?")
	}

}