/*Exercice 1 :
//Définir une variable et l'afficher dans une boîte de dialogue.

let message = "Salutations!";
alert(message);*/


/*Exercice 2 :
//Définir trois variables : nom, prenom et ville. 

let name = "Lovelace";
let firstName = "Ada";
let city = "Bruxelles";

alert("Prénom: " + name + '\n' + "Nom: " + firstName + '\n' + "Ville: " + city);
*/


/*Exercice 3 :
//Afficher une boîte de dialogue permettant de saisir son prénom. Afficher dans une boîte de dialogue "Bonjour, " suivi du prénom saisi.

let userName = prompt ("Votre prénom ?")
alert("Bonjour " + userName + " !");
*/


/*Exercice 4 :
//Refaire l’exercice 2 en demandant à l'utilisateur le nom, le prénom et la ville.
let name = prompt("Votre prénom ?");
let firstName = prompt("Votre nom ?");
let city = prompt("Votre ville ?");

alert("Prénom: " + name + '\n' + "Nom: " + firstName + '\n' + "Ville: " + city);
*/



/*Exercice 5 :
//Demander à l’utilisateur deux nombres à virgule. Ne garder que la partie entière du premier .
//Les multiplier et afficher le résultat dans une boîte de dialogue.

let firstNumber = prompt("Entrez un premier nombre à virgule");
let secondeNumber = prompt("Entrez un second nombre à virgule");


alert(Math.floor(firstNumber) * secondeNumber);
*/



/*Demander à l’utilisateur sa pointure et son année de naissance. Créer une fonction qui fait les calculs suivants :

Multiplier la pointure par 2
Ajouter 5 au résultat
Multiplier le tout par 50
Soustraire l’année de naissance
Ajouter au tout 1766
La fonction doit retourner le résultat. Tester avec votre date de naissance et votre pointure. Attention : n'utiliser une seule variable « resultat ».


let size = prompt("Votre pointure ?");
let birthday = prompt("Votre date de naissance ?");

function calculs (size, birthday) {
	size *= 2;
	result = (((size + 5) * 50) - birthday) + 1776;
	return result;
}

alert(calculs(size, birthday));
*/


/*Exercice 8 :
Demander à l’utilisateur de saisir son âge. S’il a plus de 18 ans, afficher " Vous êtes majeur ". Sinon afficher " Vous êtes mineur ".


let age = prompt("Votre age ?");

if (age >= 18) {
	document.write("<h1>Votre êtres majeur</h1>");
} else {
	document.write("<h1>Votre êtres mineur</h1>");
}
*/