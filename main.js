
var numeroInicial = 5;

function actualizar(){
	document.getElementById('ola').innerHTML= numeroInicial;

	if (numeroInicial == 0) {
		document.getElementById('ola').innerHTML= numeroInicial;
	}
	else{
		numeroInicial=numeroInicial-1;
		setTimeout(actualizar, 1E3);
	}
}

actualizar();
/*
function botonActivo(){
	document.getElementById("boton").disabled=false;

	if (disabled==false) {
		document.getElementById("ala").href="";
	}else{
		document.getElementById("ala").style.color= red ;
	}

}

setTimeout("botonActivo()", 5000);
*/

function botonActivo(){
	document.getElementById("ala").style.display= "inline-block";
	document.getElementById("alaB").style.display= "none";
}

setTimeout("botonActivo()", 5000);
