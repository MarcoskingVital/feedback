function pegarnota(evento) {
    let nota = evento.target.innertext

    letparagrafoNota = document.querySelector(".paragrafo_nota")

    paragrafoNota.innerhtml = 'voce selecionou ${nota} de 5'
}

pegarnota{}