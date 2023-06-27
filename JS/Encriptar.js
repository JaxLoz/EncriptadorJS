/*fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober! */
/*felicidades por enfrentar este desafio y haberlo concluido con exito!*/

let cad = "felicidades por enfrentar este desafio y haberlo concluido con exito!";
let catEncrip = "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!";

function encriptar (cadena){
    let cadenaEncript = cadena.replace(/e/ig, "enter").replace(/i/ig, "imes").replace(/a/ig, "ai").replace(/o/ig, "ober").replace(/u/ig, "ufat");
    return cadenaEncript;
}

function desencriptar (cadenaEncriptada){
    let cadenaDesencript = cadenaEncriptada.replace(/enter/ig, "e").replace(/imes/ig, "i").replace(/ai/ig, "a").replace(/ober/ig, "o").replace(/ufat/ig, "u");
    return cadenaDesencript;
}

console.log(encriptar(cad))
console.log(catEncrip);

console.log("________________________________________________________");
console.log(desencriptar(catEncrip));
