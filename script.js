let botoes = document.querySelectorAll(".botoes button")
botoes.forEach(botao =>{
    botao.addEventListener("click", guardarNota)
})

function guardarNota(evento) {
    let nota = evento.target.innertext

    localstorage setItem("nota", nota)
}