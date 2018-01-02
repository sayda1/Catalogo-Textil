$(document).ready(init);
//FUNCION GENERAL
function init(){
    //FUNCION BLUSAS
    $("#primero").click(primeraBlusa);
    $("#segundo").click(segundaBlusa);
    $("#tercero").click(terceraBlusa);
    //FUNCION BUZOS
    $("#primerBuzo").click(PrimerBuzo);
    $("#segundoBuzo").click(segundoBuzo);
    $("#tercerBuzo").click(tercerBuzo);
}

//FUNCIONES DE BLUSAS
//PRIMERO
function primeraBlusa(){
    location.href="blusa-manga-corta.html";
}
//SEGUNDO
function segundaBlusa(){
    location.href="blusa-manga-larga.html";
}
//TERCERO
function terceraBlusa(){
    location.href="blusa-mangsa-tres-cuartos.html";
}
//FUNCION DE BUZOS
//PRIMERO
function PrimerBuzo(){
    location.href="buzo-polynam.html";
}
//SEGUNDO
function segundoBuzo(){
    location.href="buzo-polyalgodon.html";
}
//TERCERO
function tercerBuzo(){
    location.href=("buzo-tafeta.html")
}