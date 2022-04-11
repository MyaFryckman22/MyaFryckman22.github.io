function password () {	
	
	if (document.getElementById("password").value == "FruitLeatherFryckman") {
		document.getElementById("access").innerHTML = "ACCESS GRANTED";
		document.getElementById("password").style.backgroundColor = "green";
		window.location = "index.html";
	}
	else{
		document.getElementById("access").innerHTML = "ACCESS DENIED";
		document.getElementById("password").style.backgroundColor = "red";
	}
}

document.getElementById("enter").addEventListener("click", password );