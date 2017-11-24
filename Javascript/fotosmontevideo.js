ads = new Array(4);
ads[0] = "imagenes/montevideoo.jpg";
ads[1] ="imagenes/montevideo1.jpg";
ads[2] = "imagenes/montevideo2.jpg";
ads[3] = "imagenes/montevideo3.jpg";



var longuitudArray = ads.length;
var contador = 0

contador = Math.floor((Math.random() * longuitudArray))

var tiempo = 2
var timer = tiempo * 1000;

function banner() {
	contador++;
	contador = contador % longuitudArray
	document.banner.src = ads[contador];
	setTimeout("banner()", timer);
}



