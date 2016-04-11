//*****************************
//F O R M A   N U M E R O   0 1
//*****************************

//$(document).ready(function(){
//    alert("Estamos conectads");
//    $(".boton_mate").click(function(){
//       alert("La cabeza del pipe"); 
//    });
//})

//*****************************
//F O R M A   N U M E R O   0 2
//*****************************
$(document).on("ready", main);
var $materia="ninguna";
//*************************************************************************
//D E F I N I R   L A   F U N C I O N   M A I N   O   P R I N C I P A L
//*************************************************************************
function main(){
    //*****************************************************
    //EJECUTAR FUNCION AL HACER CLIC EN BOTONES
    //*****************************************************
    //E V E N T O :   C L I C   E N   M A T E M A T I C A S
    //*****************************************************
    $(".boton_mate").click(function(){
        if ($materia == "matematicas"){
            ocultar_contenidos();
            $materia = "ninguna"
        }
        else{
            mostrar_fondo_quitar_nubes();
            $materia = "matematicas";
            mostrar_contenidos($materia);
        }
    });
    //*****************************************************
    //E V E N T O : C L I C   E N   L E N G U A J E
    //*****************************************************
    $(".boton_lenguaje").click(function(){
        if ($materia == "lenguaje"){
            ocultar_contenidos();
            $materia = "ninguna"
        }
        else{
            mostrar_fondo_quitar_nubes();
            $materia = "lenguaje";
            mostrar_contenidos($materia);
        }
    });
    //*****************************************************
    //E V E N T O : C L I C   E N   N A T U R A L E S
    //*****************************************************
    $(".boton_cs_naturales").click(function(){
        if ($materia == "naturales"){
            ocultar_contenidos();
            $materia = "ninguna"
        }
        else{
            mostrar_fondo_quitar_nubes();
            $materia = "naturales";
            mostrar_contenidos($materia);
        }
    });
    //*****************************************************
    //E V E N T O : C L I C   E N   S O C I A L E S
    //*****************************************************
    $(".boton_cs_sociales").click(function(){
        if ($materia == "sociales"){
            ocultar_contenidos();
            $materia = "ninguna"
        }
        else{
            mostrar_fondo_quitar_nubes();
            $materia = "sociales";
            mostrar_contenidos($materia);
        }
    });
    //*************************************************************
    //C L I C   O C U L T A R   N U B E   D E   C O N T E N I D O S
    //*************************************************************
    $("#Cerrar_contenidos").click(function(){
        ocultar_contenidos();
    });
}

//*************************************************************************
//        M A N E J A D O R   D E L   E V E N T O   H A C E R
//C L I C K   E N   E L   C U A L Q U I E R A   D E   L O S  B O T O N E S
//*************************************************************************
function mostrar_fondo_quitar_nubes(){
//  OCULTAR LOS OTROS CONTENIDOS ABIERTOS PARA QUE NO QUEDEN UNOS SOBRE OTROS
    $("#div_mate").hide(200);
    $("#div_lenguaje").hide(200);   
    $("#sociales").hide(200);
    $("#div_naturales").hide(200);
//    MOSTRAR EL FONDO DE LOS CONTENIDOS
    $(".fondo_contenidos").show(1000);
//    MOSTRAR EL BOTON X
    $("#Cerrar_contenidos").show(2000);
//    BAJAR LAS NUBES ANIMADAS
    $(".nube_animada_2").animate({
       top:'360px' 
    });
    $(".nube_animada_1").animate({
       top:'460px' 
    });
}
function mostrar_contenidos($area){
    if ($area=="sociales"){
        $("#sociales").show(2000);
    }
    else if($area=="matematicas"){
        $("#div_mate").show(2000);
    }
    else if($area=="lenguaje"){
        $("#div_lenguaje").show(2000);        
    }
    else {
        $("#div_naturales").show(2000);
    }
}
//************************************************
//Funcion ocultar contenidos y fondo de contenidos
//************************************************
function ocultar_contenidos(){
    $(".fondo_contenidos").hide(1000);
    $("#div_mate").hide(1000);
    $("#div_lenguaje").hide(1000);   
    $("#sociales").hide(1000);
    $("#div_naturales").hide(1000);
    $("#Cerrar_contenidos").hide(500);
    //SUBIR LAS NUBES ANIMADAS
    $(".nube_animada_2").animate({
       top:'100px' 
    }, 1500);
    $(".nube_animada_1").animate({
       top:'220px' 
    }, 1500);
}
