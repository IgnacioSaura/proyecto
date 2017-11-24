ads = new Array(9);
ads[0] = "Imagenes/panoramica.jpg";
ads[1] = "Imagenes/Panoramica2.jpg";
ads[2] = "Imagenes/panoramica3.jpg";
ads[3] = "Imagenes/panoramica4.jpg";
ads[4] = "Imagenes/Panoramica5.jpg";
ads[5] = "Imagenes/Panoramica6.jpg";
ads[6] = "Imagenes/Panoramica7.jpg";
ads[7] = "Imagenes/Panoramica8.jpg";
ads[8] = "Imagenes/Panoramica9.jpg";







var longuitudArray = ads.length;
var contador = 0

contador = Math.floor((Math.random() * longuitudArray))

var tiempo = 1
var timer = tiempo * 1000;

function banner() {
	contador++;
	contador = contador % longuitudArray
	document.banner.src = ads[contador];
	setTimeout("banner()", timer);
}

