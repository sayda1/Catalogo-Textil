$(document).ready(init);
function init(){
}
//FUNCION DE NOMBRE
function valiNombre(){
    //var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    var exprecionNombre = /^[a-zA-Z]*$/;
    var nombre = $("#Nombres");
    
    if(nombre.val()==""){
        alert("complete este campo");
    }else{
        alert("");
    } 
} 

/*FUNCION CORREO 
function valicorreo(){
    
}
//FUNCION DE TELEFONO
function valiTelefono(){
    var exprecionNumeros = /^[1-9]*$/;
    var telefono = $("#Telefono");
    
}
//FUNCION DE ASUNTO
function valiAsunto(){
    var Asunto=("#Asunto");
}

//FUNCITON SELECION PRENDA 
function valiPrenda(){
    
    var prenda;
}*/