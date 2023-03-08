const criptografarbt = document.querySelector(".criptografar");
const descriptografarbt = document.querySelector(".descriptografar");
var entrada = document.querySelector("textarea");
var resultado = document.querySelector("h2");
var palavras = [];
var textoDecriptado = "";
var textoEncriptado = "";


function separarPalavras() {
    var tamanho = entrada.value.length;
    var space = [];
    space.push(0);
    var marcador = 0;
    for (var i = 0; i < tamanho; i++) {
        if (entrada.value[i] == " ") {
            space.push(i);
        } else if (space.length == 1 && i == (tamanho - 1)) {
            space.push(tamanho);

        }
    }
    if (space[space.length - 1] !== tamanho) {
        space.push(tamanho);
    }
    for (var i = 0; i < space.length; i++) {
        if (space[i] == 0) {

        } else {
            palavras.push(entrada.value.slice(marcador, space[i]));
            marcador = space[i];
        }
    }

}

function criptografar() {
    if (entrada.value.length != 0) {
        separarPalavras();
        for (var i = 0; i < palavras.length; i++) {
            textoEncriptado += (((palavras[i] + "").replaceAll("a", "d")).replaceAll("i", "l")).replaceAll("e", "h") + " ";

        }
        resultado.innerHTML = textoEncriptado;
    } else {
        alert("preencha o campo de texto")
    }

}

function descriptografar() {

    if (textoDecriptado == resultado.value) {
        alert("o texto ja foi descriptografado")
    } else if (entrada.value.length == 0) {
        alert("preencha o campo de texto")

    } else if (palavras.length==0) {
        alert("preencha o campo de texto e clique em criptografar ates de descriptografar")

    } else {
        for (var i = 0; i < palavras.length; i++) {
            textoDecriptado += palavras[i] + " ";
        }
        resultado.innerHTML = textoDecriptado;
    }

}

criptografarbt.addEventListener("click", criptografar)

descriptografarbt.addEventListener("click", descriptografar)