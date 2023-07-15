/*fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober! */
/*felicidades por enfrentar este desafio y haberlo concluido con exito!*/

//let cad = "felicidades por enfrentar este desafio y haberlo concluido con exito!";
//let catEncrip = "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!";
//let cadenaAcentos = "denota una letra en cualquiera de los idiomas. También podemos usar";

let areaOut = document.getElementById("area-output");
let areaInput = document.getElementById("area-encriptar");
let divImagen = document.getElementById("img-content");
let divTexOutput = document.getElementById("textAreaOutPut-content");
divImagen.style.display = "flex";
divTexOutput.style.display = "none";

function EliminarAcentos (cadena){
    let cadenaSinAcento = cadena.replace(/é/ig, "e").replace(/í/ig, "i").replace(/á/ig, "a").replace(/ó/ig, "o").replace(/ú/ig, "u");
    return cadenaSinAcento;
}

function validacionContenido (cadena){
    if (cadena.match(/[\w\d]/) === null){
        
        return false;
    }else{
        return true;
    }
}

function encriptar (){
    
    let cadena = areaInput.value;
    let campoVacio = validacionContenido(cadena);
    let estadoDivImage = divImagen.style.display;
    let estadoDivTexOutput = divTexOutput.style.display;    

    if (!campoVacio){
        alert("El campo de texto esta vacio o el texto que haz ingresado no es valido");
    }else{

        let cadenaLimpia = EliminarAcentos(cadena);
        let cadenaEncript = cadenaLimpia.replace(/e/ig, "enter").replace(/i/ig, "imes").replace(/a/ig, "ai").replace(/o/ig, "ober").replace(/u/ig, "ufat");

        if (estadoDivImage !== "none"){
            divImagen.style.display = "none";
            divTexOutput.style.display = "flex";
            areaOut.innerHTML = cadenaEncript;
        }else{
            areaOut.innerHTML = cadenaEncript;
        }
    }
}

function desencriptar (){
    
    let cadenaEncriptada = areaInput.value;
    let campoVacio = validacionContenido(cadenaEncriptada);
    let estadoDivImage = divImagen.style.display;
    //let estadoDivTexOutput = divTexOutput.style.display;

    if (campoVacio === false){
        alert("El campo de texto esta vacio o el texto que haz ingresado no es valido");
    }else{

        let cadenaDesencript = cadenaEncriptada.replace(/enter/ig, "e").replace(/imes/ig, "i").replace(/ai/ig, "a").replace(/ober/ig, "o").replace(/ufat/ig, "u");
        if (estadoDivImage !== "none"){
            divImagen.style.display = "none";
            divTexOutput.style.display = "flex";
            areaOut.innerHTML = cadenaDesencript;
        }else{
            areaOut.innerHTML = cadenaDesencript;
        }
     
    }
    
}

function copyText (){
    let text = areaOut.value;
    if(validacionContenido(text)){
        navigator.clipboard.writeText(text)
        .then(() => {
            console.log("Se guardo el siguente texto en el portapapeles: "+text);
        })
        .catch(err => {
            console.log("Error al copiar en el portapapeles");
        })
    }else{
        alert("No se encontro texto para copiar");
    }

    
}   



