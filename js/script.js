
function iniciarContagem() {
    tempo = setInterval(function () {
        let cronometro = document.getElementById('cronometro').innerHTML;
        let soma = parseInt(cronometro) + 1;
        document.getElementById('cronometro').innerHTML = soma;
    }, 1000);
}

function pausar() {
    clearInterval(tempo);
}
function zerar() {
    let tempo = document.getElementById('cronometro');
    tempo.innerHTML = 0;

}
