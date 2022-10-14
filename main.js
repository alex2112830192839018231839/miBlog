array =  [];

function submit()
{

var nombre_1 = document.getElementById("nombre_de_actividad_1").value;
var nombre_2 = document.getElementById("nombre_de_actividad_2").value;
var nombre_3 = document.getElementById("nombre_de_actividad_3").value;
var nombre_4 = document.getElementById("nombre_de_actividad_4").value;

array.push(nombre_1);
array.push(nombre_2);
array.push(nombre_3);
array.push(nombre_4);

document.getElementById("ver_lista").innerHTML = array;
document.getElementById("boton_enviar").style.display = "none";
document.getElementById("boton_ordenar").style.display = "inline_block";
}
function sorting ()
{
    array.sort();

    document.getElementById("ver_lista").innerHTML = array;
}