var mensaje = "";
function calificar(){
	let cali = document.getElementById("calificacion").value;
	if (cali > 100 || cali < 0) {
		mensaje = "No es una calificación válida";
	} else if (cali >= 90){
		mensaje = "Aprobado con honores";
	} else if (cali >= 70){
		mensaje = "Aprobado";
	} else {
		mensaje = "Reprobado";
	}
	document.getElementById("califSalida").innerText=mensaje;
}
function parImpar(){
	let num = document.getElementById("par").value;
	if (num % 2 == 0) {
		mensaje = "El número es par";
	} else {
		mensaje = "El número es impar";
	}
	document.getElementById("ParSalida").innerText=mensaje;
}
function descuento(){
	let precio = parseInt(document.getElementById("descuentos").value);
	let descuento
	if (precio > 100){
		descuento = precio * 0.1;
		mensaje = `El precio a pagar es de: ${precio - descuento}`;
	} else {
		mensaje = "No aplica para descuento."
	}
	document.getElementById("calcSalida").innerText=mensaje;

}
function adivinanza(){
	let num = parseInt(document.getElementById("adivina").value);
	let adivina = Math.floor(Math.random()*10)
	console.log(adivina)
	if (num == adivina){
		mensaje = "¡Felicidades, adivinaste el número!";
	} else {
		mensaje = `Lo siento, el numero era ${adivina}`;
	}
	document.getElementById("AdivSalida").innerText=mensaje;
}