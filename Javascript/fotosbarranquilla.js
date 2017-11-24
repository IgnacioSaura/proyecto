ads = new Array(10);
ads[0] = "imagenes/barranquilla11.jpg";
ads[1] ="imagenes/barranquilla1.jpg";
ads[2] = "imagenes/barranquilla2.jpg";
ads[3] = "imagenes/barranquilla3.jpg";
ads[4] = "imagenes/barranquilla4.jpg";
ads[5] = "imagenes/barranquilla5.jpg";
ads[6] ="imagenes/barranquilla6.jpg";
ads[7] = "imagenes/barranquilla7.jpg";
ads[8] = "imagenes/barranquilla8.jpg";
ads[9] = "imagenes/barranquilla9.jpg";
 


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



