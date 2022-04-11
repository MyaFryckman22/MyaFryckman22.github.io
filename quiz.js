var q1 = document.getElementById("q1");
var q1result = document.getElementById("q1result")
var s1 =document.getElementById("s1")


function checkq1 () {

	if (q1.value == "7028") 
	{
		q1result.innerHTML = "Correct!";
	}
	else {
		q1result.innerHTML = "Incorrect";
	}
}

s1.addEventListener("click", checkq1);