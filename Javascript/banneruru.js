ads = new Array(2);
ads[0] = "imagenes/montevideo.jpg";
ads[1] ="imagenes/maldonado.jpg";




arrayURLs = new Array(2);
arrayURLs[0] = "montevideo.html"
arrayURLs[1] = "Maldonado.html"




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

function ponerURL() {
	contador2 = contador;
	url = window.open(arrayURLs[contador2]);
	return false;
}

