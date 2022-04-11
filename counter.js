var count = 0;

function minus() {
	count = count -1;
	document.getElementById("total").innerHTML = count;
	if (count == 68) {
		document.getElementById("total").innerHTML = "NICE";
	}
}
document.getElementById("minus").addEventListener("click", minus);

function plus() {
	count = count +1;
	document.getElementById("total").innerHTML = count;	
	if (count == 68) {
		document.getElementById("total").innerHTML = "NICE";
	}
}
document.getElementById("plus").addEventListener("click", plus);

function multiply() {
	count = count *10;
	document.getElementById("total").innerHTML = count;
}
document.getElementById("multiply").addEventListener("click", multiply);

function divide() {
	count = count /2;
	document.getElementById("total").innerHTML = count;
}
document.getElementById("divide").addEventListener("click", divide);

function plusfive() {
	count = count +5;
	document.getElementById("total").innerHTML = count;
}
document.getElementById("plusfive").addEventListener("click", plusfive);
	
function minusfive() {
	count = count -5;
	document.getElementById("total").innerHTML = count;
}
document.getElementById("minusfive").addEventListener("click", minusfive);
	
function zero() {
	count = 0;
	document.getElementById("total").innerHTML = count;
}
document.getElementById("zero").addEventListener("click", zero);