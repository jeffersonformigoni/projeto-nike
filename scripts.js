let body = document.querySelector("body")
let tenis = document.querySelector(".imagem-tenis")
let texto = document.querySelector("h1")
let preco = document.querySelector("h4")

// document = html
// querySelector = pegador / selecionador

function mudarVisual(cor, imagem){
    tenis.classList.add("troca-efeito")
    
    body.style.background = cor
    texto.style.color = cor // Adiciona a troca de cor do h1
    preco.style.color = cor // Adiciona a troca de cor do h4
    
    // contador de tempo
    setTimeout(() => {
        tenis.src = imagem
        tenis.classList.remove("troca-efeito")
    }, 500);

    // 1000 milisegundos = 1segundo
}