/*fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober! */
/*felicidades por enfrentar este desafio y haberlo concluido con exito!*/

let cad = "felicidades por enfrentar este desafio y haberlo concluido con exito!";
let catEncrip = "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!";
let cadenaAcentos = "denota una letra en cualquiera de los idiomas. También podemos usar";

function EliminarAcentos (cadena){
    let cadenaSinAcento = cadena.replace(/é/ig, "e").replace(/í/ig, "i").replace(/á/ig, "a").replace(/ó/ig, "o").replace(/ú/ig, "u");
    return cadenaSinAcento;
}

function encriptar (cadena){
    let cadenaLimpia = EliminarAcentos(cadena);
    let cadenaEncript = cadenaLimpia.replace(/e/ig, "enter").replace(/i/ig, "imes").replace(/a/ig, "ai").replace(/o/ig, "ober").replace(/u/ig, "ufat");
    return cadenaEncript;
}

function desencriptar (cadenaEncriptada){
    let cadenaDesencript = cadenaEncriptada.replace(/enter/ig, "e").replace(/imes/ig, "i").replace(/ai/ig, "a").replace(/ober/ig, "o").replace(/ufat/ig, "u");
    return cadenaDesencript;
}

console.log(encriptar(cadenaAcentos))
console.log(catEncrip);

console.log("________________________________________________________");
console.log(desencriptar(catEncrip));

