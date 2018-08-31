/*let tableWord = ["B","O","N","J","O","U","R"];
let guessedLettres = ["","","","","","",""];
let userGuessLetter;
let input = document.getElementById("input");
input.addEventListener("input", () => {
	userGuessLetter = input.value; 
	console.log(userGuessLetter);
	guessLetter(userGuessLetter);})

//Start function with arg 
 
function guessLetter (foundUser) {
	//Itérer à travers les lettres
	if (guessedLettres.toString() == foundUser.toString()) {
			alert("Bienjouer");
		for (let i = 0; i <= tableWord.length - 1; i++) {
			//Voir si la lettre deviné se trouve dans le mot
			if (userGuessLetter == tableWord[i]) {
				//Si oui changer le tableau des lettres deviné pour ajouter la nouvelle lettre
				foundUser[i] = userGuessLetter	;
				console.log("Lettre dévinés: " + foundUser);
			}
			//Afficher dans la console les lettre devinés
		}
	}
		//Le jeu doit savoir quand la partie est finie et féliciter le joueur
}*/

