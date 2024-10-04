//regressiva
function contarRegressiva() {
  let numero = parseInt(document.getElementById("numeroRegressiva").value);
  let resultado = "";
  for (let i = numero; i >= 0; i--) {
    resultado += i + " ";
  }
  document.getElementById("resultadoRegressiva").innerHTML = resultado;
}

//tabuada
function calcularTabuada() {
  let numero = parseInt(document.getElementById("numeroTabuada").value);
  let resultado = "";
  if (numero >= 1 && numero <= 10) {
    for (let i = 1; i <= 10; i++) {
      resultado += `${numero} x ${i} = ${numero * i}<br>`;
    }
  } else {
    resultado = "Digite um número de 1 a 10!";
  }
  document.getElementById("resultadoTabuada").innerHTML = resultado;
}

//adivinhar
let numeroSecreto = Math.floor(Math.random() * 10) + 1; 

function adivinharNumero() {
  let tentativa = parseInt(document.getElementById("numeroJogo").value);
  let resultado = "";
  if (isNaN(tentativa)) {
    resultado = "Por favor, digite um número válido!";
  } else if (tentativa === numeroSecreto) {
    resultado = "Parabéns! Você acertou!";
  } else if (tentativa > numeroSecreto) {
    resultado = `Tente novamente! O número secreto é menor que ${tentativa}.`;
  } else {
    resultado = `Tente novamente! O número secreto é maior que ${tentativa}.`;
      }
      document.getElementById("resultadoJogo").innerHTML = resultado;
    }

function gerarNovoNumero() {
  numeroSecreto = Math.floor(Math.random() * 10) + 1;
  document.getElementById("resultadoJogo").innerHTML = "Novo número gerado. Tente adivinhar";
  document.getElementById("numeroJogo").value = ""; 
    }
