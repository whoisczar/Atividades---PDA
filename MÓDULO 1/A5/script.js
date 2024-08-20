var tempo = document.getElementById('timer');
var PegarTempo = document.getElementById('InputTempo');
var botao = document.getElementById('botaoClick');
var botaoResetar = document.getElementById('botaoResetar');
var intervalo;

function cliquei() {
    var valorDoInput = parseInt(PegarTempo.value);

    if (isNaN(valorDoInput) || valorDoInput < 1) {
        alert("Por favor, insira um número válido maior que 0");
        return;
    }

    botao.setAttribute('disabled', 'true');
    var contador = valorDoInput;

    botaoResetar.style.display = 'block'; // Exibe o botão Resetar

    intervalo = setInterval(function() {
        tempo.textContent = contador;
        updateTituloColor(contador, valorDoInput);
        contador--;

        if (contador < 0) {
            clearInterval(intervalo);
            alert("Fim do tempo");
            botao.removeAttribute('disabled');
            botaoResetar.style.display = 'none'; // Oculta o botão Resetar após o término
            titulo.style.color = '#ff0000'; // Garante que a cor final seja vermelha
        }
    }, 1000);  // 1000 milissegundos = 1 segundo
}

function updateTituloColor(valorAtual, valorInicial) {
    var percent = valorAtual / valorInicial;
    var red = Math.floor(255 * (1 - percent)); // Aumenta o vermelho conforme o tempo diminui
    var green = Math.floor(255 * percent); // Diminui o verde conforme o tempo diminui
    var color = `rgb(${red}, ${green}, 0)`;
    tempo.style.color = color;
}

function resetar() {
    clearInterval(intervalo); // Para o intervalo
    tempo.textContent = '0'; // Reseta o display do timer
    botao.removeAttribute('disabled'); // Reabilita o botão de iniciar
    PegarTempo.value = ''; // Limpa o campo de input
    botaoResetar.style.display = 'none'; // Oculta o botão Resetar
    titulo.style.color = '#00ff00'; // Reseta a cor do título para verde
}
