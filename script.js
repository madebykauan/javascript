function verificarDia() {
    var dia = document.getElementById('dia').value.toLowerCase().trim();
    var respostaDia = document.getElementById('respostaDia');
    var diasUteis = ["segunda", "terça", "terca", "quarta", "quinta", "sexta"];
    var fimDeSemana = ["sábado", "sabado", "domingo"];

    if (diasUteis.includes(dia)) {
        respostaDia.innerHTML = "É dia útil.";
    } else if (fimDeSemana.includes(dia)) {
        respostaDia.innerHTML = "É fim de semana.";
    } else {
        respostaDia.innerHTML = "Dia inválido. Por favor, insira um dia da semana válido.";
    }
}
