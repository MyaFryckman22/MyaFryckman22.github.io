
var enteredPass;


function password () {	
	enteredPass = document.getElementById("password").value;
	if (enteredPass == "FruitLeatherFryckman") {
		document.getElementById("access").innerHTML = "ACCESS GRANTED";
		document.getElementById("password").style.backgroundColor = "green";
		window.location = "index.html";
	}
	else{
		document.getElementById("access").innerHTML = "The password " + enteredPass + " was the wrong password";
		document.getElementById("password").style.backgroundColor = "red";
	}
}

document.getElementById("enter").addEventListener("click", password );