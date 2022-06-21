function sumar(valor){
    return parseInt(valor)+1
}



function sumarEdad(){
    let nombreUsuario = document.getElementById("nombre").value
    let edadUsuario = document.getElementById("edad").value
    document.body.append (`El nombre del usuario es ${nombreUsuario} y va a cumplir  ${sumar(edadUsuario)}`)

    let chequeado = document.getElementById("bases").checked
    if(chequeado != true){
        alert("debe estar de acuerdo con las bases y condiciones")
        
    }
}









function mostrarSushii(){
   document.getElementById("sushi").style.display ='block';
    
}










function mostrar(){
    var nombre = document.getElementById("b");
    if (nombre.value == "mostrar mas"){
    nombre.value="mostrar menos"}

    document.getElementById("algo").style.display='block';
    
    

}

function ocultar(){
    var nombre = document.getElementById("b");
    if (nombre.value == "mostrar menos"){
    nombre.value == "mostrar mas"}
    
     document.getElementById("algo").style.display='none';
}


function mostrarOcultar(){
    var caja= document.getElementById("algo")
    
    if (caja.style.display=='none'){
        mostrar() 
        
    }
    else{
        ocultar()
    }
}

 


