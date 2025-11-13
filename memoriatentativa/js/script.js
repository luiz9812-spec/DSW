document.addEventListener("DOMContentLoaded", () => {

    let virada1 = true;
    let virada2 = true;
    let virada3 = true;
    let virada4 = true;
    let virada5 = true;
    let virada6 = true;

    let primeiraCarta = null;
    let segundaCarta = null;
    let bloqueiaClique = false;

    function carta1() {
        let carta = document.getElementById('carta1');
        if (virada1 && !bloqueiaClique) {
            carta.innerHTML = '<img src="img/mario.png" alt="Super Mario World">';
            virada1 = false;
            if (primeiraCarta == null) {
                primeiraCarta = 'carta1';
            } else {
                segundaCarta = 'carta1';
                verificarPar();
            }
        }
    }

    function carta2() {
        let carta = document.getElementById('carta2');
        if (virada2 && !bloqueiaClique) {
            carta.innerHTML = '<img src="img/sonic.png" alt="Sonic">';
            virada2 = false;
            if (primeiraCarta == null) {
                primeiraCarta = 'carta2';
            } else {
                segundaCarta = 'carta2';
                verificarPar();
            }
        }
    }

    function carta3() {
        let carta = document.getElementById('carta3');
        if (virada3 && !bloqueiaClique) {
            carta.innerHTML = '<img src="img/megamanx.png" alt="Mega Man X">';
            virada3 = false;
            if (primeiraCarta == null) {
                primeiraCarta = 'carta3';
            } else {
                segundaCarta = 'carta3';
                verificarPar();
            }
        }
    }

    function carta4() {
        let carta = document.getElementById('carta4');
        if (virada4 && !bloqueiaClique) {
            carta.innerHTML = '<img src="img/sonic.png" alt="Sonic">';
            virada4 = false;
            if (primeiraCarta == null) {
                primeiraCarta = 'carta4';
            } else {
                segundaCarta = 'carta4';
                verificarPar();
            }
        }
    }

    function carta5() {
        let carta = document.getElementById('carta5');
        if (virada5 && !bloqueiaClique) {
            carta.innerHTML = '<img src="img/mario.png" alt="Super Mario World">';
            virada5 = false;
            if (primeiraCarta == null) {
                primeiraCarta = 'carta5';
            } else {
                segundaCarta = 'carta5';
                verificarPar();
            }
        }
    }

    function carta6() {
        let carta = document.getElementById('carta6');
        if (virada6 && !bloqueiaClique) {
            carta.innerHTML = '<img src="img/megamanx.png" alt="Mega Man X">';
            virada6 = false;
            if (primeiraCarta == null) {
                primeiraCarta = 'carta6';
            } else {
                segundaCarta = 'carta6';
                verificarPar();
            }
        }
    }

    function verificarPar() {
        bloqueiaClique = true; // Bloqueia os cliques durante a verificação

        // Verificando os pares
        if (
            (primeiraCarta == 'carta1' && segundaCarta == 'carta5') ||
            (primeiraCarta == 'carta5' && segundaCarta == 'carta1') ||
            (primeiraCarta == 'carta2' && segundaCarta == 'carta4') ||
            (primeiraCarta == 'carta4' && segundaCarta == 'carta2') ||
            (primeiraCarta == 'carta3' && segundaCarta == 'carta6') ||
            (primeiraCarta == 'carta6' && segundaCarta == 'carta3')
        ) {
            // Par encontrado, remove o evento de clique
            document.getElementById(primeiraCarta)?.removeAttribute("onclick");
            document.getElementById(segundaCarta)?.removeAttribute("onclick");

        } else {
            // Caso o par não seja encontrado, vira as cartas de volta ao fundo
            setTimeout(function() {
                let primeiraCartaElem = document.getElementById(primeiraCarta);
                let segundaCartaElem = document.getElementById(segundaCarta);

                // Verificando se os elementos existem antes de alterar o innerHTML
                if (primeiraCartaElem && segundaCartaElem) {
                    primeiraCartaElem.innerHTML = '<img src="img/fundo.png" alt="carta virada">';
                    segundaCartaElem.innerHTML = '<img src="img/fundo.png" alt="carta virada">';
                }

                // Resetando os estados das cartas
                virada1 = virada2 = virada3 = virada4 = virada5 = virada6 = true;

            }, 1000); // Tempo de espera antes de virar as cartas

        }

        // Resetando variáveis para o próximo par
        primeiraCarta = null;
        segundaCarta = null;

        bloqueiaClique = false; // Libera o clique novamente
    }

});