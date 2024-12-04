let contador = 0
let food 
let valorFood
let centavusFood
let drink
let valorDrink
let centavusDrink
let dessert
let valorDessert
let centavusDessert
 function carrinho() {
    const conteudo = document.querySelector(".conteudo")
    conteudo.classList.add("void")

    const cont = document.querySelector(".cont")
    cont.classList.remove("void")
} 

function selectFood(botaoClicado, valor, centavus) {
   food = botaoClicado
   valorFood = valor
   centavusFood = centavus
    const selecionado = document.querySelector("#food .select")
    if (selecionado !== null) {
        selecionado.classList.remove("select")
    } else {
        contador++
        verificarContador()
    }
    const seletor = "." + botaoClicado
    const botao = document.querySelector(seletor)
    botao.classList.add("select")
}

function selectDink(botaoClicado, valor, centavus) {
    drink = botaoClicado
    valorDrink = valor
    centavusDrink = centavus
    const selecionado = document.querySelector("#drink .select")
    if (selecionado !== null) {
        selecionado.classList.remove("select")
    } else {
        contador++
        verificarContador()
    }
    const seletor = "." + botaoClicado
    const botao = document.querySelector(seletor)
    botao.classList.add("select")
}

function selectDessert(botaoClicado, valor, centavus) {
    dessert = botaoClicado
    valorDessert = valor
    centavusDessert = centavus
    const selecionado = document.querySelector(" #dessert .select")
    if (selecionado !== null) {
        selecionado.classList.remove('select')
    } else {
        contador++
        verificarContador()
    }

    const seletor = "." + botaoClicado
    const botao = document.querySelector(seletor)
    botao.classList.add("select")
}

function verificarContador() {
    if (contador === 3) {
        avancarPag()
    }
}

function avancarPag() {
    const continuar = document.querySelector(".continuar")
    continuar.classList.add("avancar")
    const trocaNome = document.querySelector("footer a").innerHTML = "Avançar"
    
    const resumoFood = document.querySelector(".resumoFood")
    resumoFood.innerHTML = "Your food: " + food + " R$ " + valorFood + "," + centavusFood

    const resumoDrink = document.querySelector(".resumoDrink")
    resumoDrink.innerHTML = "Your drink: " + drink + " R$ " + valorDrink + "," + centavusDrink

    const resumoDessert = document.querySelector(".resumoDessert")
    resumoDessert.innerHTML = "Your dessert: " + dessert + " R$ " + valorDessert + "," + centavusDessert
    
}