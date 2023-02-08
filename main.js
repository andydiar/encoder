// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textArea = document.querySelector(".text-area");
    const mensaje = document.querySelector(".mensaje");
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
}    

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();
    for(let i=0;i<matrizCodigo.length;i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function btnDesencriptar(){
    const textArea = document.querySelector(".text-area");
    const mensaje = document.querySelector(".mensaje");
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat",["u"]]];
    for(let i=0;i<matrizCodigo.length;i++){
        if(stringDesencriptado.includes(matrizCodigo[i][0])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringDesencriptado;
}

function btnCopiar(){
    var copyText = document.querySelector(".mensaje");

    navigator.clipboard.writeText(copyText.value);
    alert("Texto copiado: " + copyText.value);
}

