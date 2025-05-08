
// Esta Ã© a variÃ¡vel para mostrar a mensagem que serÃ¡ usada
let mensagem = document.querySelector('#mensagem');

// Esta Ã© a variavel da mensagem
let mensagemF = ''

//Esta Ã© a variÃ¡vel para contagem de clique
let contaClique = 0;

// Definindo aÃ§Ã£o para ao clickar no botÃ£o
document.querySelector('#botao').addEventListener("click", e => {

    // soma 1 click
    contaClique++;

    // define a mensagem some ou aparece
    if (contaClique % 2 === 0) {
        mensagemF = ''
    }
    else {
        mensagemF = 'Continue buscando conhecimento todos os dias.'
    }

    // Altera a mensagem na pÃ¡gina.
    mensagem.innerText = mensagemF;
});