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
    //FUNCION BVD
    $("#primerBvd").click(primerBvd);
    $("#segundoBvd").click(segundoBvd);
    $("#tercerBvd").click(tercerBvd);
    //FUNCION  CAMISA
    $("#primeraCamisa").click(primeraCamisa);
    $("#segundaCamisa").click(segundaCamisa);
    $("#terceraCamisa").click(terceraCamisa);
    //FUNCCION CASACAS
    $("#primeraCasaca").click(primeraCasaca);
    $("#segundaCasaca").click(segundaCasaca);
    $("#terceraCasaca").click(terceraCasaca);
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
    location.href="buzo-tafeta.html"
}
//FUNCION DE BVDS
//PRIMERO
function primerBvd(){
    location.href="bvd-algodon-30-1.html";
}
//SEGUNDO
function segundoBvd(){
    location.href="bvd-algodon-24-1.html"
}
//TERCERO
function tercerBvd(){
    location.href="bvd-algodon-20-1.html"
}
//FUNCION CAMISAS
//PRIMERA 
function primeraCamisa(){
    location.href="camisa-manga-larga.html";
}
//SEGUNDA
function segundaCamisa(){
    location.href="camisa-manga-corta.html";
}
function terceraCamisa(){
    location.href="camisa-aplicaciones.html"
}
//FUNCION CASACAS
function primeraCasaca(){
    location.href="casaca-hypora.html";
}
function segundaCasaca(){
    location.href="casaca-taslan.html";
}
function terceraCasaca(){
    location.href="casaca-taslan-tejido.html";
}   