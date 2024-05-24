const textoRecebido = document.getElementById('textarea_1');
const textoCriptografado = document.getElementById('textarea_2');
let textoCriptado;
let textoDescriptado;
let matriz_code = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function btnCriptografar() {
    textoCriptado = criptografar(textoRecebido.value);
    textoCriptografado.value = textoCriptado;
    textoRecebido.value = ""; 
    textoCriptografado.classList.toggle('tiraImagem');
}

function criptografar(stringCriptografar) {    
    stringCriptografar = stringCriptografar.toLowerCase();    

     for(let i = 0; i < matriz_code.length; i++) {
        if(stringCriptografar.includes(matriz_code[i][0])) {
            stringCriptografar = stringCriptografar.replaceAll(matriz_code[i][0], matriz_code[i][1]);
        }
     }
     return stringCriptografar;
}

function btnCopiar() {
    textoRecebido.value = textoCriptado;
    textoCriptografado.value = ""; 
    textoCriptografado.classList.toggle('tiraImagem');
}

function btnDescriptografar() {
    textoDescriptado = descriptografar(textoRecebido.value);
    textoCriptografado.value = textoDescriptado;
    textoRecebido.value = "";
    textoCriptografado.classList.toggle('tiraImagem');
}

function descriptografar(stringDescriptografar) {
    stringDescriptografar = stringDescriptografar.toLowerCase();    

     for(let i = 0; i < matriz_code.length; i++) {
        if(stringDescriptografar.includes(matriz_code[i][1])) {
            stringDescriptografar = stringDescriptografar.replaceAll(matriz_code[i][1], matriz_code[i][0]);
        }
     }
     return stringDescriptografar;
     
}