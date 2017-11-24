ads = new Array(4);
ads[0] = "imagenes/sanandres.jpg";
ads[1] ="imagenes/sanandres1.jpg";
ads[2] = "imagenes/sanandres2.jpg";
ads[3] = "imagenes/sanandres3.jpg";

 


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



