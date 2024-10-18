function verificarIdade() {
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var resultado = document.getElementById("resultado");
    var erro = document.getElementById("erro");

    idade = Number(idade);
    while (idade < 18 || isNaN(idade)) {
        erro.innerHTML = "Idade inválida. A idade deve ser maior ou igual a 18.";
        resultado.innerHTML = ""; 
        return; 
    }
    
    erro.innerHTML = ""; 
    resultado.innerHTML = "Nome: " + nome + "<br>Idade: " + idade + " anos (Válida)";
}

//
function fibonacci(n) {
    let sequence = [0, 1]; 
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}


const fibonacciSequence = fibonacci(100); 
document.getElementById('fibonacci-sequence').textContent = fibonacciSequence.join(', ');
