//import cipher from './cipher.js';
//console.log(cipher);
var cifrado=0;


////////////////Declarando variables para eventListeners/////////
let resultados = document.getElementById("BotonCifrar");
let resultados2 = document.getElementById("BotonDecifrar");

let jinx= document.getElementById("jinx");
let lux = document.getElementById("lux");
let neeko = document.getElementById("neeko");
let rakan = document.getElementById("rakan");
let xayah = document.getElementById("xayan");
let soraka = document.getElementById("soraka");
let zoe = document.getElementById("zoe");


///////////////////////Agregando eventListeners/////////////////////////////
resultados2.addEventListener("click", decifrar)//al boton de decifrar se le esta agregando el listener para cifrar 
resultados.addEventListener("click", codificar)// este boton es para cifrar 


jinx.addEventListener("click", ()=>{
    jinx.classList.replace("imagen", "imagenSeleccionada");
    lux.classList.replace("imagenSeleccionada","imagen");
    neeko.classList.replace("imagenSeleccionada","imagen");
    rakan.classList.replace("imagenSeleccionada","imagen");
    xayah.classList.replace("imagenSeleccionada","imagen");
    soraka.classList.replace("imagenSeleccionada","imagen");
    zoe.classList.replace("imagenSeleccionada","imagen");
    cifrado=1;
});

lux.addEventListener("click", ()=>{
    jinx.classList.replace("imagenSeleccionada","imagen");
    lux.classList.replace("imagen", "imagenSeleccionada");
    neeko.classList.replace("imagenSeleccionada","imagen");
    rakan.classList.replace("imagenSeleccionada","imagen");
    xayah.classList.replace("imagenSeleccionada","imagen");
    soraka.classList.replace("imagenSeleccionada","imagen");
    zoe.classList.replace("imagenSeleccionada","imagen");
    cifrado=3;
});

neeko.addEventListener("click", ()=>{
    jinx.classList.replace("imagenSeleccionada","imagen");
    lux.classList.replace("imagenSeleccionada","imagen");
    neeko.classList.replace("imagen", "imagenSeleccionada");
    rakan.classList.replace("imagenSeleccionada","imagen");
    xayah.classList.replace("imagenSeleccionada","imagen");
    soraka.classList.replace("imagenSeleccionada","imagen");
    zoe.classList.replace("imagenSeleccionada","imagen");
    cifrado=7;
});

rakan.addEventListener("click", ()=>{
    jinx.classList.replace("imagenSeleccionada","imagen");
    lux.classList.replace("imagenSeleccionada","imagen");
    neeko.classList.replace("imagenSeleccionada","imagen");
    rakan.classList.replace("imagen", "imagenSeleccionada");
    xayah.classList.replace("imagenSeleccionada","imagen");
    soraka.classList.replace("imagenSeleccionada","imagen");
    zoe.classList.replace("imagenSeleccionada","imagen");
    cifrado=13;
});

xayah.addEventListener("click", ()=>{
    jinx.classList.replace("imagenSeleccionada","imagen");
    lux.classList.replace("imagenSeleccionada","imagen");
    neeko.classList.replace("imagenSeleccionada","imagen");
    rakan.classList.replace("imagenSeleccionada","imagen");
    xayah.classList.replace("imagen", "imagenSeleccionada");
    soraka.classList.replace("imagenSeleccionada","imagen");
    zoe.classList.replace("imagenSeleccionada","imagen");
    cifrado=20;
});

soraka.addEventListener("click", ()=>{
    jinx.classList.replace("imagenSeleccionada","imagen");
    lux.classList.replace("imagenSeleccionada","imagen");
    neeko.classList.replace("imagenSeleccionada","imagen");
    rakan.classList.replace("imagenSeleccionada","imagen");
    xayah.classList.replace("imagenSeleccionada","imagen");
    soraka.classList.replace("imagen", "imagenSeleccionada");
    zoe.classList.replace("imagenSeleccionada","imagen");
    cifrado=35;
});

zoe.addEventListener("click", ()=>{
    jinx.classList.replace("imagenSeleccionada","imagen");
    lux.classList.replace("imagenSeleccionada","imagen");
    neeko.classList.replace("imagenSeleccionada","imagen");
    rakan.classList.replace("imagenSeleccionada","imagen");
    xayah.classList.replace("imagenSeleccionada","imagen");
    soraka.classList.replace("imagenSeleccionada","imagen");
    zoe.classList.replace("imagen", "imagenSeleccionada");
    cifrado=106;
});
///////////////////////////////////////////////////////////////////////////

function codificar()
{
    let textoACifrar = []; //Se declara la variable con corchetes vacios para decirle a JS que es un arreglo
    var textoCifrado = []; //Se declara una variable para el texto ya cifrado (arreglo)
    textoACifrar = document.getElementById("CajaParaCifrar").value; //obteniendo el texto de la caja codificar
    //console.log(textoACifrar.length);// mostrando la longitud del arreglo
    for (let i = 0; i < textoACifrar.length; i++)
    {
        ///////////////Obteniendo el unicode
        var valorUnicode =textoACifrar.charCodeAt(i);//Obteniendo el valor unicode del caracter en la posición i
        //console.log('codigo sin cifrar: %d',valorUnicode);//mostrando el valor unicode en consola
        ///////////////para minusculas
        if ((valorUnicode>96)&&(valorUnicode<123)) //Identificando las minusculas
        {
            valorUnicode-=97;// Pasando de un sistema de 97 a 122 a un sistema de 0 a 25 (26 letras)
            valorUnicode+=cifrado;//aplicando cifrado 3
            valorUnicode%=26;// Se aplica el modulo 26 (el sobrante de la division entre 26) ya que el sobrante son los lugares correctos del cifrado 
            valorUnicode+=97// Pasando de un sistema de 0 a 25 al sistema unicode de 97 a 122
        }
        else if ((valorUnicode>64)&&(valorUnicode<91)) //Identificando las mayusculas
        {
            valorUnicode-=65;// Pasando de un sistema de 65 a 90 a un sistema de 0 a 25 (26 letras)
            valorUnicode+=cifrado;//aplicando cifrado 3
            valorUnicode%=26;// Se aplica el modulo 26 (el sobrante de la division entre 26) ya que el sobrante son los lugares correctos del cifrado 
            valorUnicode+=65// Pasando de un sistema de 0 a 25 al sistema unicode de 65 a 90
        }
        else if ((valorUnicode>47)&&(valorUnicode<58)) //Identificando los NUMEROS
        {
            valorUnicode-=48;// Pasando de un sistema de 48 a 57 a un sistema de 0 a 9 (10 numeros)
            valorUnicode+=cifrado;//aplicando cifrado 3
            valorUnicode%=10;// Se aplica el modulo 10 (el sobrante de la division entre 10) ya que el sobrante son los lugares correctos del cifrado 
            valorUnicode+=48// Pasando de un sistema de 0 a 9 al sistema unicode de 48 a 57
        }
        //console.log('codigo cifrado: %d',valorUnicode);//mostrando el valor unicode en consola   
        textoCifrado.push(String.fromCharCode(valorUnicode));// Se pasa de valor unicode a caracter y se guarda en la variable original en la posición i
    }
    //console.log(textoCifrado);// Mostrando el texto cifrado como un arreglo
    textoCifrado=textoCifrado.join("");
    //console.log(textoCifrado);// mostrando texto como string
    var Myelement = document.getElementById("CajaParaDecifrar");// Obteniendo referencia a la caja de texto codificado
    Myelement.value = textoCifrado;//Poniendo texto codificado en la caja de texto para decodificar 
}



function decifrar()
{
    let textoADecifrar = []; 
    var textoDecifrado = [];
    textoADecifrar = document.getElementById("CajaParaDecifrar").value;
    console.log(textoADecifrar);
    for (let i = 0; i < textoADecifrar.length; i++)
    {
        ///////////////Obteniendo el unicode
        var valorUnicode =textoADecifrar.charCodeAt(i);//Obteniendo el valor unicode del caracter en la posición i
        ///////////////para minusculas
        if ((valorUnicode>96)&&(valorUnicode<123)) //Identificando las minusculas
        {
            valorUnicode-=97;// Pasando de un sistema de 97 a 122 a un sistema de 0 a 25 (26 letras)
            valorUnicode-=cifrado;//aplicando cifrado 3
            if(valorUnicode<0){
                valorUnicode=Math.abs(valorUnicode);
                valorUnicode%=26;
                valorUnicode=26-valorUnicode;
            }
            else{
                valorUnicode%=26;
            } 
            valorUnicode+=97// Pasando de un sistema de 0 a 25 al sistema unicode de 97 a 122
        }
        else if ((valorUnicode>64)&&(valorUnicode<91)) //Identificando las mayusculas
        {
            valorUnicode-=65;// Pasando de un sistema de 65 a 90 a un sistema de 0 a 25 (26 letras)
            valorUnicode-=cifrado;//aplicando cifrado 3
            if(valorUnicode<0){
                valorUnicode=Math.abs(valorUnicode);
                valorUnicode%=26;
                valorUnicode=26-valorUnicode;
            }
            else{
                valorUnicode%=26;
            } 
            valorUnicode+=65// Pasando de un sistema de 0 a 25 al sistema unicode de 65 a 90
        }
        else if ((valorUnicode>47)&&(valorUnicode<58)) //Identificando los NUMEROS
        {
            valorUnicode-=48;// Pasando de un sistema de 48 a 57 a un sistema de 0 a 9 (10 numeros)
            valorUnicode-=cifrado;//aplicando cifrado 3
            if(valorUnicode<0){
                valorUnicode=Math.abs(valorUnicode);
                valorUnicode%=10;
                valorUnicode=10-valorUnicode;
            }
            else{
                valorUnicode%=10;
            } 
            valorUnicode+=48// Pasando de un sistema de 0 a 9 al sistema unicode de 48 a 57
        }
        textoDecifrado.push(String.fromCharCode(valorUnicode));// Se pasa de valor unicode a caracter y se guarda en la variable original en la posición i
    }
    textoDecifrado=textoDecifrado.join("");
    var Myelement = document.getElementById("CajaParaCifrar");// Obteniendo referencia a la caja de texto codificado
    Myelement.value = textoDecifrado;//Poniendo texto codificado en la caja de texto para decodificar
}
