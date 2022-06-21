function mostrarSushi(){
    document.getElementById("g").style.display='block'
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
    nombre.value = "mostrar mas"}
    
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