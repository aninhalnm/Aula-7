let saldo = 1000;
let numerosecreto = 7;
let tentativa = 1;

function atualizarSaldo() {
    document.getElementById("saldo").innerText = "Saldo: R$" + saldo.toFixed(2);
}

function mostrarMensagem(mensagem) {
    document.getElementById("alert").innerText = mensagem;
}

function iniciarJogo() {
    tentativa = 1;
    mostrarMensagem("Tente acertar o número secreto de 1 a 10. Boa sorte!");

    // Iniciar as tentativas
    while (tentativa <= 3) {
        let palpite = parseInt(prompt("Tentativa " + tentativa + ": Qual o número de 1 a 10?"));

        if (palpite === numerosecreto) {
            alert("Parabéns! Você acertou o número secreto.");
            saldo = saldo * 2;
            atualizarSaldo();
            mostrarMensagem("Você acertou! O saldo foi dobrado!");
            return;
        } else {
            alert("Tente novamente!");
        }
        tentativa++;
    }

    if (tentativa > 3) {
        alert("Você perdeu! O número secreto era " + numerosecreto + ". Seu saldo foi zerado.");
        saldo = 0; 
        atualizarSaldo();
        mostrarMensagem("Você perdeu! Seu saldo foi zerado.");
    }
} 