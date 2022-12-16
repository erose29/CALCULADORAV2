//Ingreso de datos por el Usuario
let parcial = "";
//Operacion a realizar
let opeMat = document.getElementById("operacionMatematica");
//resultado de la operacion realizada
let txtResul = document.getElementById("txtResultado");

//Ultimo operador utilizado
let operadorSeleccionado = "";

//Ingreso de numero
let numero = "";

//Definir  lo que se utilizo de ultimo si operacion o numero
let ultimaTecla = "";

function operador(num){
    
//concateno el numero
    numero = numero + num;
//concateno la operacion 
    parcial = parcial + num;
//muestra   
    opeMat.innerHTML = parcial;

//Division por 0

if(numero=='0' && operadorSeleccionado=='/'){
    borrar();
    txtResul.innerHTML ="Indefinido";
    return;
}

if(ultimaTecla=='operacion'){
    ultimaTecla='numero'
}
    
}

//Operacion utilizada
function operacion(opeMat){
    
    operadorSeleccionado = opeMat;
    ultimaTecla = "operacion";
    parcial = parcial + opeMat;
    numero = "";
    opeMat.innerHTML = parcial;
}

//Se realiza la formula matematica
function calculo(){
    parcial = eval(parcial);
    txtResul.innerHTML = parcial;
    parcial = parcial.toString();
    numero = "";
    opeMat.innerHTML = parcial;
}

//Borrar
function borrar(){
    operadorSeleccionado ="";
    parcial ="";
    txtResul.innerHTML ="";
    numero ="";
    opeMat.innerHTML = 0;
}