var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var q4 = document.getElementById("q4");
var q5 = document.getElementById("q5");
var q6 = document.getElementById("q6");
var q7 = document.getElementById("q7");
var q8 = document.getElementById("q8");
var q9 = document.getElementById("q9");
var q10 = document.getElementById("q10");

var submit = document.getElementById("submit");
var score = document.getElementById("score");
var result = 0;

function calculate() {
	result=0;
	if (q1.value == "7028"){
		result = result + 1;
	}
	if (q2.value == "lavender"){
		result = result + 1;
	}
	if (q3.value == "Black Bear"){
		result = result + 1;
	}
	if (q4.value == "P.F. Changs"){
		result = result + 1;
	}
	if (q5.value == "Chipotle"){
		result = result + 1;
	}
	if (q6.value == "penguin"){
		result = result + 1;
	}
	if (q7.value == "top 9"){
		result = result + 1;
	}
	if (q8.value == "the Office"){
		result = result + 1;
	}
	if (q9.value == "Bandaids"){
		result = result + 1;
	}
	if (q10.value == "Grand Drapery"){
		result = result + 1;
	}
	document.getElementById("score").innerHTML = result + "/10";
}

document.getElementById("submit").addEventListener("click", calculate);
