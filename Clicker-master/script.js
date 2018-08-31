var multiplicateur = 1;
var multiplierBasePrice = 10;
var score = 0;
var priceAutoClicker = 10;
var bonusAmount = 100;
var bonusTime = 10;
var docAffichage = document.getElementById("affichage");
var docButtonClick = document.getElementById("click");
var docAutoClicker = document.getElementById("autoclicker");
var docMultiplicateur = document.getElementById("multiplier");
var docBonus = document.getElementById("bonus");
var docUpgradeOwnedList = document.getElementById("upgradeOwned");
var docShowMessage = document.getElementById("showMessage");
var inverval;
var bonusIsGoing = false;
var autoClickerIsGoing = false;
docBonus.disabled = true;
docAutoClicker.disabled = true;
docMultiplicateur.disabled = true;
/// Permet d'ajouter un score et l'afficher
function add () {
	score += 1 * multiplicateur * (bonusAmount/100);
	updateScore()
}
// Augmenter le prix de multiplicateur
function augmenterMultiplicateur () {
	multiplierBasePrice *= 2
	multiplicateur++;
}
function updateScore() {
	docAffichage.innerHTML = score + " cookies";
	document.title = score + " cookies";
	canBuy();
}
function canBuy () {
	if (score >= 50 && bonusIsGoing == false) {
		docBonus.disabled = false;
	} else {docBonus.disabled = true;}
	if (score >= multiplierBasePrice) {
		docMultiplicateur.disabled = false;
	} else {docMultiplicateur.disabled = true;}
	if (score >= priceAutoClicker && autoClickerIsGoing == false) {
		docAutoClicker.disabled = false;
	} else {docAutoClicker.disabled = true;}
}
docBonus.addEventListener("click", () => {
	if (score >= 50) {
		score -= 50;
		docUpgradeOwnedList.innerHTML += "<li>" + "BONUS @ " + 50 + "Cookies";
		updateScore();
		bonusTime = 10;
		bonusAmount = 200;
		bonusIsGoing = true;
		inverval = setInterval(() => {
			docBonus.innerHTML = bonusTime + " sec left !";
			docShowMessage.innerHTML = bonusTime + " sec left !";
			bonusTime--;
			if (bonusTime < 0) {
				clearInterval(inverval);
				bonusAmount = 100;
				docBonus.innerHTML = "BONUS<br>" + 50  + "Cookies";
				docShowMessage.innerHTML = "Cliquez sur le cookie ci-dessous !";
				bonusIsGoing = false;
			}
		}, 1000)
	}
})
docMultiplicateur.addEventListener("click", () => {
	if (score >= multiplierBasePrice) {
		score -= multiplierBasePrice;
		docUpgradeOwnedList.innerHTML += "<li>" + "Multiplicateur X" + multiplicateur + " @ " + multiplierBasePrice + " Cookies</li>";
		augmenterMultiplicateur();
		updateScore()
		docMultiplicateur.innerHTML = "Multiplicateur<br>" + multiplierBasePrice + "Cookies";
	}
})
//Lorsque l'utilisateur clique sur l'autoclicker
docAutoClicker.addEventListener("click", () => {
	if (score >= priceAutoClicker) {
		score -= priceAutoClicker;
		//Début l'autoclick a l'infinis
		autoClickerIsGoing = true;
		updateScore()
		docAutoClicker.classList.add("limitedOwned");
		docUpgradeOwnedList.innerHTML += "<li>" + "Autoclicker @ " + priceAutoClicker + "cookies" + "</li>";
		setInterval(() => {
			add();
		}, 1000)
	}
});
//Lorsque l'utilisateur clique sur le cookie
docButtonClick.addEventListener("click", () => {
	add()
})