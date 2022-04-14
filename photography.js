var b1 = document.getElementById("gunner");
var b2 = document.getElementById("brinley");
var b3 = document.getElementById("sophie");
var b4 = document.getElementById("gb");
var b5 = document.getElementById("ss");
var b6 = document.getElementById("petgun");
var b7 = document.getElementById("trio");
var b8 = document.getElementById("sg");
var b9 = document.getElementById("stuckg");
var b10 = document.getElementById("bb");
var image = document.getElementById("image");


function changegunner() {
	image.src = "IMG_0537.jpg";
}
function changebrinley() {
	image.src = "image2.jpg";
}
function changesophie() {
	image.src = "IMG_5422.jpg";
}
function changegb() {
	image.src = "IMG_5187.jpg";
}
function changess() {
	image.src = "IMG_7717.jpg";
}
function changepetgun() {
	image.src = "IMG_5453.png";
}
function changetrio() {
	image.src = "IMG_5454.png";
}
function changesg() {
	image.src = "IMG_6263.jpg";
}
function changestuck() {
	image.src = "IMG_5455.png";
}
function changebb() {
	image.src = "IMG_6432.jpg";
}

b1.addEventListener("click", changegunner);
b2.addEventListener("click", changebrinley);
b3.addEventListener("click", changesophie);
b4.addEventListener("click", changegb);
b5.addEventListener("click", changess);
b6.addEventListener("click", changepetgun);
b7.addEventListener("click", changetrio);
b8.addEventListener("click", changesg);
b9.addEventListener("click", changestuck);
b10.addEventListener("click", changebb);