var docClickButton = document.getElementById("click");
var docShowScore = document.getElementById("affichage");
var docMultiplyButton = document.getElementById("multiplier");
var docShowMessage = document.getElementById("message");
var docAutoClickerButton = document.getElementById("autoclicker");
var docBonusButton = document.getElementById("bonus");
var autoClickStatus = false;
var tempsBonus = 10;
var score = 0;
var multiplicateur = 1;
var multiplierPrice = 1;
var bonusAmount = 100;
docBonusButton.disabled = true;
docAutoClickerButton.disabled = true;
docMultiplyButton.disabled = true;
function augmenterMultiplicateur () {
	multiplierPrice *= 2
	return multiplicateur++;
}
function reductionScore (reducer) {
	return score -= reducer;
}
function autoClicker () {
	autoClickStatus = true;
	setInterval(() =>{ 
		click();
		docShowScore.innerHTML = score;
	}, 1000);
}
function click () {
	score += 1 * multiplicateur * (bonusAmount/100);
	checkIfCanBuy();
	docShowScore.innerHTML = parseInt(score);
	docShowMessage.innerHTML = "";
	document.title = parseInt(score) +  " de score !";
}
var timerIntervalBonus = () => { 
		bonusAmount = 200;
	setInterval(function() {
	    docBonusButton.innerHTML = tempsBonus + "sec";
	    tempsBonus--;
	    if (tempsBonus < 0) {
	    	bonusAmount = 100;
	        docBonusButton.innerHTML = "BONUS";
	        checkIfCanBuy();
	        clearInterval();
	    }
	}
,1000)}
docBonusButton.addEventListener("click", () => {
	if (score >= 5000) {
		score -= 5000;
		docBonusButton.disabled = true;
		timerIntervalBonus();
	}
	else {
		docShowMessage.innerHTML = "Vous n'avez pas assez de score !";
	}
})
docAutoClickerButton.addEventListener("click", () => {
	if (score >= 500) {
		score -= 500;
		docAutoClickerButton.disabled = true;
		autoClicker();
	}
	else {
		docShowMessage.innerHTML = "Vous n'avez pas assez de score !";
	}
});
docMultiplyButton.addEventListener("click", () => {
	if (score >= 50 * multiplierPrice) {
		reductionScore(50 * multiplierPrice);
		augmenterMultiplicateur();
		checkIfCanBuy();
		docMultiplyButton.innerHTML = "Multiplicateur x" + multiplicateur;
		docShowScore.innerHTML = score;
		}
	else {
		docShowMessage.innerHTML = "Vous n'avez pas assez de score !";
		}
	}
);
docClickButton.addEventListener("click", () => {
	click();
});
function checkIfCanBuy () {
	if (autoClickStatus == false) {
		if (score >= 500) {
			docAutoClickerButton.disabled = false;
		} else {
			docAutoClickerButton.disabled = true;
		}
	}
	if (score >= 50 * multiplierPrice) {
		docMultiplyButton.disabled = false;
	} else {
		docMultiplyButton.disabled = true;
	}
	if (score >= 5000) {
		docBonusButton.disabled = false;
	} else {
		docBonusButton.disabled = true;
	}
}