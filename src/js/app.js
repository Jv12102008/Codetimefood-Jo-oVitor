let contador = 0;
let food;
let valorFood;
let drink;
let valorDrink;
let dessert;
let valorDessert;
function carrinho() {
  const conteudo = document.querySelector(".conteudo");
  conteudo.classList.add("void");

  const cont = document.querySelector(".cont");
  cont.classList.remove("void");
}

function selectFood(botaoClicado, valor) {
  food = botaoClicado;
  valorFood = valor;
  const selecionado = document.querySelector("#food .select");
  if (selecionado !== null) {
    selecionado.classList.remove("select");
  } else {
    contador++;
    verificarContador();
  }
  const seletor = "." + botaoClicado;
  const botao = document.querySelector(seletor);
  botao.classList.add("select");
}

function selectDink(botaoClicado, valor) {
  drink = botaoClicado;
  valorDrink = valor;
  const selecionado = document.querySelector("#drink .select");
  if (selecionado !== null) {
    selecionado.classList.remove("select");
  } else {
    contador++;
    verificarContador();
  }
  const seletor = "." + botaoClicado;
  const botao = document.querySelector(seletor);
  botao.classList.add("select");
}

function selectDessert(botaoClicado, valor) {
  dessert = botaoClicado;
  valorDessert = valor;
  const selecionado = document.querySelector(" #dessert .select");
  if (selecionado !== null) {
    selecionado.classList.remove("select");
  } else {
    contador++;
    verificarContador();
  }

  const seletor = "." + botaoClicado;
  const botao = document.querySelector(seletor);
  botao.classList.add("select");
}

function verificarContador() {
  if (contador === 3) {
    avancarPag();
  }
}

function avancarPag() {
  TotalPd = valorFood + valorDrink + valorDessert;
  const continuar = document.querySelector(".continuar");
  continuar.classList.add("avancar");
  const trocaNome = (document.querySelector("footer a").innerHTML = "Avançar");

  const resumoFood = document.querySelector(".resumoFood");
  resumoFood.innerHTML = "Seu pedido: " + food + " R$ " + valorFood.toFixed(2);

  const resumoDrink = document.querySelector(".resumoDrink");
  resumoDrink.innerHTML = "Sua bebida: " + drink + " R$ " + valorDrink.toFixed(2);

  const resumoDessert = document.querySelector(".resumoDessert");
  resumoDessert.innerHTML =
    "Sua sobremessa: " + dessert + " R$ " + valorDessert.toFixed(2);

  const valorTotal = document.querySelector(".total");
  valorTotal.innerHTML = "Valor total: " + "R$ " + TotalPd.toFixed(2);
 
}

function whatsapp() {
  let total = valorFood + valorDrink + valorDessert
  let numero = "5571988259196";
  let mensagem = "Olá, gostaria de confirmar meu pedido: ";
  let mensagemFormatada = encodeURIComponent(mensagem)
   +  food + " R$" + valorFood + ", " + drink + " R$" + valorDrink + ", " + dessert + " R$" + valorDessert + ", " + " Total: R$" + total.toFixed(2);

  let urlWhatsApp = "https://wa.me/" + 71988259196 + "?text=" + mensagemFormatada;
  window.open(urlWhatsApp, "_blank");
}