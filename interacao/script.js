const leftTexto = document.getElementById("leftTexto");
const btnCriptografar = document.getElementById("btnCriptografar");
const btnDescriptografar = document.getElementById("btnDescriptografar");
const btnCopiar = document.getElementById("btnCopiar");
const menssagemFinal = document.getElementById("menssagemFinal");
const boneco = document.getElementById("boneco");
const rightInfo = document.getElementById("rightInfo");
const right = document.getElementById("right");

let remplazar = [
    ["e", "enter"], 
    ["o", "ober"], 
    ["i", "imes"], 
    ["a", "ai"], 
    ["u", "ufat"], 
]

const remplace = (novoValor) => {
    menssagemFinal.innerHTML = novoValor;
    boneco.classList.add("oculto");
    leftTexto.value = "";
    rightInfo.style.display = "none";
    btnCopiar.style.display = "block";
    right.classList.add("ajustar");
    menssagemFinal.classList.add("ajustar");
}

const reset = () => {
    menssagemFinal.innerHTML = "";
    boneco.classList.add("oculto");
    rightInfo.style.display = "block";
    btnCopiar.style.display = "none";
    right.classList.remove("ajustar");
    menssagemFinal.classList.remove("ajustar");
    leftTexto.focus();
}

btnCriptografar.addEventListener("click", () => {
    const texto = leftTexto.value.toLowerCase()
    if (texto != "") {
        function criptografar(newText) {
            for (let i = 0; i < remplazar.length; i++){
                 if (newText.includes(remplazar[i][0])) {
                newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
                };
            };
            return newText;
        };     
    } else {
        alert("Insira o texto a encriptar");
        reset();
    }     
    //const textoEncriptografado = criptografar(texto);//

    remplace(criptografar(texto));
    menssagemFinal.innerHTML = criptografar(texto);
    boneco.style.display = "none";
    rightInfo.style.display = "none";
    btnCopiar.style.display = "block";
    right.classList.add("ajustar");
    menssagemFinal.classList.add("ajustar");
})

btnDescriptografar.addEventListener("click", () => {
    const texto = leftTexto.value.toLowerCase()
    if (texto != "") {
        function descriptografar(newText) {
            for (let i = 0; i < remplazar.length; i++){
                if (newText.includes(remplazar[i][1])) {
                newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
                };   
            };
            return newText
        };
    } else {
        alert("Insira o texto a desencripitar")
        reset();
    }
    const textoDescriptografado = descriptografar(texto);
    
    remplace(descriptografar(texto))
});

btnCopiar.addEventListener("click",() => { 
    let texto = menssagemFinal;
    //navigator.clipboard.writeText(texto.value);//
    texto.select();
    document.execCommand('copy');
    alert("Texto Copiado");
    reset();
})