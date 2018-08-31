
//console.log(document.getElementById("table1").rows[2].cells[1].innerHTML);
// Create a new element
var bodyContent = document.getElementById("bodyContent");
var table1 = document.getElementById("table1");
var table2 = document.getElementById("table2");


chartTable1 = '<div id="chartTable1"></div>'
chartTable2 = '<div id="chartTable2"></div>'

table1.insertAdjacentHTML("beforebegin", chartTable1);
table2.insertAdjacentHTML("beforebegin", chartTable2);
table1.insertAdjacentHTML("beforebegin", 
	"<button id='table1Year2002'>2002</button>" + 
	"<button id='table1Year2003'>2003</button>" + 
	"<button id='table1Year2004'>2004</button>" + 
	"<button id='table1Year2005'>2005</button>" + 
	"<button id='table1Year2006'>2006</button>" +
	"<button id='table1Year2007'>2007</button>" + 
	"<button id='table1Year2008'>2008</button>" + 
	"<button id='table1Year2009'>2009</button>" + 
	"<button id='table1Year2010'>2010</button>" +
	"<button id='table1Year2011'>2011</button>" +
	"<button id='table1Year2012'>2012</button>");

//////

var table1Rows = document.getElementById("table1").rows;
var tabList = [];
function isNaNGoZero (numberOrZero) {
	if (numberOrZero == ":") {
		return 0;
	}
	return numberOrZero;
	}
for (i = 2; i < table1Rows.length; i++) {
	let x = table1Rows[i].cells;
	let t_rowInfos = {
		"number": isNaNGoZero(x[0].innerText),
		"country": isNaNGoZero(x[1].innerText),
		"2002": isNaNGoZero(x[2].innerText),
		"2003": isNaNGoZero(x[3].innerText),
		"2004": isNaNGoZero(x[4].innerText),
		"2005": isNaNGoZero(x[5].innerText),
		"2006": isNaNGoZero(x[6].innerText),
		"2007": isNaNGoZero(x[7].innerText),
		"2008": isNaNGoZero(x[8].innerText),
		"2009": isNaNGoZero(x[9].innerText),
		"2010": isNaNGoZero(x[10].innerText),
		"2011": isNaNGoZero(x[11].innerText),
		"2012": isNaNGoZero(x[12].innerText)
	}
	tabList.push(t_rowInfos);
}
console.log(tabList);
// UNe function pour créer le graph de l'année
var svg = dimple.newSvg("#chartTable1", 590, 400);
var myChart = new dimple.chart(svg, tabList);
myChart.setBounds(20, 20, 460, 360)
var myAxis = myChart.addMeasureAxis("p", "2002");
var ring = myChart.addSeries("country", dimple.plot.pie);
ring.innerRadius = "30%";
myChart.addLegend(500, 20, 90, 300, "left");
myChart.draw();

function changeChart (h) {
	myAxis.measure = h
	myChart.draw(1000, false);
}
function pad2(number) {
     return (number < 10 ? '0' : '') + number
}
for (i = 2; i <= 12; i++) {
	let currentYear = "20" + pad2(i);
	document.getElementById("table1Year" + currentYear).addEventListener("click", () => {changeChart(currentYear)} )
}

////////// SECOND TABLE //////////////////

var tabList2 = [];
var table2Rows = document.getElementById("table2").rows;
for (i = 1; i < table2Rows.length; i++) {
	let x = table2Rows[i].cells;
	let t_rowInfos = {
		"country": isNaNGoZero(x[1].innerText),
		"data": isNaNGoZero(x[2].innerText),
		"year": isNaNGoZero(x[3].innerText),
	}
	tabList2.push(t_rowInfos);
}

/*

console.log(tabList2);
var svg2 = dimple.newSvg("#chartTable2", 590, 400);
var myChart2 = new dimple.chart(svg2, tabList2);
myChart2.setBounds(60, 30, 510, 330)
myChart2.addCategoryAxis("x", "country");
myChart2.addMeasureAxis("y", "2007");
myChart2.addMeasureAxis("y", "2012");
myChart2.addSeries("country", dimple.plot.bar);
myChart2.draw();

*/


bodyContent.insertAdjacentHTML("afterbegin", "<div id='realTimeRandomess'></div>");
fakeDatas = [
	{id: 0,
	data: Math.random() * 10},
	{id: 1,
	data: Math.random() * 10},
	{id: 2,
	data: Math.random() * 10},
	{id: 3,
	data: -Math.random() * 10},
	{id: 4,
	data: Math.random() * 10},
	{id: 5,
	data: -Math.random() * 10},
	];



var historyTab = [];
var svgRealTime = dimple.newSvg("#realTimeRandomess", 590, 400);
var myChartRealTime = new dimple.chart(svgRealTime, historyTab);
myChartRealTime.setBounds(60, 30, 505, 305);
var xRealTime = myChartRealTime.addCategoryAxis("x", "id");
myChartRealTime.addMeasureAxis("y", "data");
var sRealTime = myChartRealTime.addSeries("Channel", dimple.plot.line);
sRealTime.interpolation = "cardinal";
myChartRealTime.addLegend(60, 10, 500, 20, "right");
// AJAX
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        console.log(myObj);
        for (let index = 0; index < myObj.length; index++) {
         	for (let j = 0; j < myObj[index].length / 2 ; j++) {
         		item = {id : index + 1,
         			data: myObj[index][1]}
         		historyTab.push(item);
         	}
        } 
    }
	myChartRealTime.draw();
};
setInterval(() => {
	xmlhttp.open("GET", "https://inside.becode.org/api/v1/data/random.json", true);
	xmlhttp.send();
}, 1000)