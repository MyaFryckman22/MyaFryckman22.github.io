var s1;
var s2;
var s3;
var s4;
var s5;
var s6;
var s7;
var s8;
var s9;
var s10;

function run() {
	s1 = document.getElementById("s1").value;
	s2 = document.getElementById("s2").value;
	s3 = document.getElementById("s3").value;
	s4 = document.getElementById("s4").value;
	s5 = document.getElementById("s5").value;
	s6 = document.getElementById("s6").value;
	s7 = document.getElementById("s7").value;
	s8 = document.getElementById("s8").value;
	s9 = document.getElementById("s9").value;
	s10 = document.getElementById("s10").value;

	document.getElementById("madlib").innerHTML = "When you are in love, every day feels like " + s1 + ". The sun is always " + s2 + ", the air feels " + s3 + ", and the birds are always " + s4 + ". You see the world through rose-colored " + s5 + ". When you see the person you love your heart " + s6 + ". You can't " + s7 + " because they take your " + s8 + " away. The person you love is always on your " + s9 + " and you can't imagine a " + s10 + " without them." 
}

document.getElementById("submit").addEventListener("click", run );



/*function password () {	
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

document.getElementById("enter").addEventListener("click", password ); */