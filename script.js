
// Esta é a variavel para mostrar a mensagem que será usada
let mensagem = document.querySelector('#mensagem');

// Esta é a variavel da mensagem
let mensagemF = ''

//Esta é a variavel para contagem de clique
let contaClique = 0;

// Definindo açãoo para ao clickar no botão
document.querySelector('#botao').addEventListener('click', e => {

    // soma 1 click
    contaClique++;

    // define a mensagem some ou aparece
    if (contaClique % 2 === 0) {
        mensagemF = ''
    }
    else {
        mensagemF = 'Poucos dias antes de finalizar este trabalho, meu PC parou de funcionar, a tela tremeu, reiniciou, deu tela azul, reiniciou, e depois, nem tela azul estava querendo aparecer. \n\nParou de funcionar. Fiquei preocupado, pois não havia feito backup dos arquivos... perdi tudo, e pior, sem o PC para fazer tudo de novo. \n\nComo irei entregar o trabalho solicitado? O polo é excelente, mas os horários conflitam com o trabalho. \n\nComo irei entregar o trabalho? Tenho um celular e um sonho. Apps e sites de criação de códigos, VSCode mobile, GitHub mobile, integração dos dois e sites na internet. Reescrevi cada linha com o celular, virando e desvirando a tela e, no fim, este é o resultado... Não é perfeito, mas se é uma mensagem de motivação que querem, é... \n\n"Nunca desista dos seus sonhos". \n\nProblemas e dificuldades sempre irão aparecer, mas foque na resolução, não no problema. Prospere na dificuldade. \n\n"Mar calmo nunca fez bom marinheiro"'
    }

    // Altera a mensagem na página.
    mensagem.innerText = mensagemF;
});
