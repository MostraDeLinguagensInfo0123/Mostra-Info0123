let introducao = document.getElementById('introducao');
let respA = document.getElementById('letraA');
let respB = document.getElementById('letraB');
let respC = document.getElementById('letraC');
let respD = document.getElementById('letraD');
let question = document.getElementById('question');
let respCorreta = "";
let perguntaUsada = [0, 0, 0, 0, 0];
let valor = 0;
let jaComecou = 1;
let travarApagar = 0;
let paragrafoApagar = document.getElementById('paragrafoApagar');
let botaoApagar = document.getElementById('apagar');
let quantidadePerguntas = 0

function escolherPergunta() {
    let perguntaAleatoria = Math.ceil(Math.random() * 5);
    return perguntaAleatoria;
    
}
comecarJogo()
function comecarJogo() {
        verificarPergunta();
        introducao.innerHTML = '';
        jaComecou = 0;
        respA.style.display = 'inline';
        respB.style.display = 'inline';
        respC.style.display = 'inline';
        respD.style.display = 'inline';
    }
     function verificarPergunta() {
        if(quantidadePerguntas<5){
            let pergunta = escolherPergunta();
            
        
            // Verifica se já usou a pergunta
            while (perguntaUsada[pergunta - 1] !== 0) {
                pergunta = escolherPergunta();
            }
            perguntaUsada[pergunta - 1] = 1;
        
            switch (pergunta) {
                case 1:
                    pergunta1();
                    quantidadePerguntas++
                    console.log('quantidade: '+quantidadePerguntas)

                  
                    break;
                case 2:
                    pergunta2();
                    quantidadePerguntas++
                    console.log('quantidade: '+quantidadePerguntas)

                    
                    break;
                case 3:
                    pergunta3();
                    quantidadePerguntas++
                    console.log('quantidade: '+quantidadePerguntas)

                    
                    break;
                case 4:
                    pergunta4();
                    quantidadePerguntas++
                    console.log('quantidade: '+quantidadePerguntas)

                    
                    break;
                case 5:
                    pergunta5();
                    quantidadePerguntas++
                    console.log('quantidade: '+quantidadePerguntas)
                    break;
            }
        }}
        

function pergunta1() {
    question.innerHTML = 'Qual o anagrama do nome Iracema?';
    respA.innerHTML = 'Europa';
    respA.value = 'Europa';
    respB.innerHTML = 'Brasil';
    respB.value = 'Brasil';
    respC.innerHTML = 'América';
    respC.value = 'América';
    respD.innerHTML = 'India';
    respD.value = 'India';
    respCorreta = 'C';
}
function pergunta2() {
    question.innerHTML = 'Quais são os livros que compõem a trilogia indianista de José de Alencar?';
    respA.innerHTML = ' O Guarani, Iracema e Ubirajara.';
    respA.value = 'O Guarani, Iracema e Ubirajara.';
    respB.innerHTML = 'Minas de Prata, Guarani e Iracema.';
    respB.value = 'Minas de Prata, Guarani e Iracema.';
    respC.innerHTML = 'Senhora, Diva e Ubirajara.';
    respC.value = 'Senhora, Diva e Ubirajara.';
    respD.innerHTML = 'Diva, Iracema e Senhora.';
    respD.value = 'Diva, Iracema e Senhora.';
    respCorreta = 'A';  
}

function pergunta3() {
    question.innerHTML = 'Qual a diferença do uso do termo "índio" para "indígena?';
    respA.innerHTML = 'Os termos são equivalentes e possuem o mesmo significado.';
    respA.value = 'Os termos são equivalentes e possuem o mesmo significado.';
    respB.innerHTML = 'O  termo "índio" é o mais correto para se referir aos povos nativos de um local.';
    respB.value = 'O  termo "índio" é o mais correto para se referir aos povos nativos de um local.';
    respC.innerHTML = '"Indígena" é um termo mais adequado e respeitoso porque significa "originário do lugar".';
    respC.value = '"Indígena" é um termo mais adequado e respeitoso porque significa "originário do lugar".';
    respD.innerHTML = '"Índio" é um termo mais recente e foi criado para substituir "indígena".';
    respD.value = '"Índio" é um termo mais recente e foi criado para substituir "indígena".';
    respCorreta = 'C';
}
function pergunta4() {
    question.innerHTML = 'Atualmente, como é a vida das comunidades indígenas no Brasil?';
    respA.innerHTML = 'As comunidades indígenas no Brasil vivem em total harmonia, com suas terras respeitadas e protegidas pelo governo.'
    respA.value = 'As comunidades indígenas no Brasil vivem em total harmonia, com suas terras respeitadas e protegidas pelo governo.';
    respB.innerHTML = 'Muitas comunidades indígenas enfrentam invasões de terras, desmatamento e falta de serviços básicos.';
    respB.value = ' Muitas comunidades indígenas enfrentam invasões de terras, desmatamento e falta de serviços básicos.';
    respC.innerHTML = 'As terras indígenas são frequentemente convertidas em áreas de turismo sustentável, proporcionando renda às comunidades.';
    respC.value = 'As terras indígenas são frequentemente convertidas em áreas de turismo sustentável, proporcionando renda às comunidades.';
    respD.innerHTML = 'As comunidades indígenas têm pleno acesso a tecnologias modernas e infraestrutura urbana.';
    respD.value = 'As comunidades indígenas têm pleno acesso a tecnologias modernas e infraestrutura urbana.';
    respCorreta = 'B';
    
}
function pergunta5() {
    question.innerHTML = 'Quantos por cento de indígenas temos no Brasil atualmente em comparação com a quantidade na época da chegada dos portugueses?';
    respA.innerHTML = 'Atualmente, temos aproximadamente 10% da população indígena que existia no Brasil na época da chegada dos portugueses.';
    respA.value = 'Atualmente, temos aproximadamente 10% da população indígena que existia no Brasil na época da chegada dos portugueses.';
    respB.innerHTML = 'Atualmente, temos aproximadamente 50% da população indígena que existia no Brasil na época da chegada dos portugueses.';
    respB.value = 'Atualmente, temos aproximadamente 50% da população indígena que existia no Brasil na época da chegada dos portugueses.';
    respC.innerHTML = 'Atualmente, temos aproximadamente 25% da população indígena que existia no Brasil na época da chegada dos portugueses.';
    respC.value = 'Atualmente, temos aproximadamente 25% da população indígena que existia no Brasil na época da chegada dos portugueses.';
    respD.innerHTML = 'Atualmente, temos aproximadamente 1% da população indígena que existia no Brasil na época da chegada dos portugueses.';
    respD.value = 'Atualmente, temos aproximadamente 1% da população indígena que existia no Brasil na época da chegada dos portugueses.';
    respCorreta = 'D';
}
function VerificarRespostaBotaoA() {
    if(quantidadePerguntas<=5){
    if (respCorreta == 'A' && jaComecou == 0) {
        valor += 1;
    }
    mudarCor();
    setTimeout(corPadrao, 2000);
    setTimeout(verificarPergunta, 2000);
    console.log('Valor: ' + valor);
} if(quantidadePerguntas===5){
    mudarCor();
    setTimeout(corPadrao, 2000);
    setTimeout(verificarPergunta, 2000);
        setTimeout(function() {
            introducao.innerHTML = `Quiz finalizado`
    jaComecou=1;
    respA.style.display = 'none';
    respB.style.display = 'none';
    respC.style.display = 'none';
    respD.style.display = 'none';
    question.innerHTML = `Sua pontuação: ${valor}/5`;
    botaoApagar.style.display = 'none';
    paragrafoApagar.style.display = 'none';
            console.log('funcionou')
          }, 2000);}
}


function VerificarRespostaBotaoB() {
    if(quantidadePerguntas<=5){
    if (respCorreta == 'B' && jaComecou == 0) {
        valor += 1;
    }
    mudarCor();
    setTimeout(corPadrao, 2000);
    setTimeout(verificarPergunta, 2000);
    console.log('Valor: ' + valor);
} if(quantidadePerguntas===5){
    mudarCor();
    setTimeout(corPadrao, 2000);
    setTimeout(verificarPergunta, 2000);
        setTimeout(function() {
            introducao.innerHTML = `Quiz finalizado`
    jaComecou=1;
    respA.style.display = 'none';
    respB.style.display = 'none';
    respC.style.display = 'none';
    respD.style.display = 'none';
    question.innerHTML = `Sua pontuação: ${valor}/5`;
    botaoApagar.style.display = 'none';
    paragrafoApagar.style.display = 'none';
            console.log('funcionou')
          }, 2000);}
}


function VerificarRespostaBotaoC() {
    if(quantidadePerguntas<=5){
    if (respCorreta == 'C' && jaComecou == 0) {
        valor += 1;
    }
    mudarCor();
    setTimeout(corPadrao, 2000);
    setTimeout(verificarPergunta, 2000);
    console.log('Valor: ' + valor);
}
if(quantidadePerguntas===5){
    mudarCor();
    setTimeout(corPadrao, 2000);
    setTimeout(verificarPergunta, 2000);
        setTimeout(function() {
            introducao.innerHTML = `Quiz finalizado`
            jaComecou=1;
            respA.style.display = 'none';
            respB.style.display = 'none';
            respC.style.display = 'none';
            respD.style.display = 'none';
            question.innerHTML = `Sua pontuação: ${valor}/5`;
            botaoApagar.style.display = 'none';
            paragrafoApagar.style.display = 'none';
            console.log('funcionou')
          }, 2000);}
}

function VerificarRespostaBotaoD() {
    if(quantidadePerguntas<=5){
    if (respCorreta == 'D' && jaComecou == 0) {
        valor += 1;
    }
    mudarCor();
    setTimeout(corPadrao, 2000);
    setTimeout(verificarPergunta, 2000);
    console.log('Valor: ' + valor);
}
if(quantidadePerguntas===5){
    mudarCor();
    setTimeout(corPadrao, 2000);
    setTimeout(verificarPergunta, 2000);
        setTimeout(function() {
            introducao.innerHTML = `Quiz finalizado`
    jaComecou=1;
    respA.style.display = 'none';
    respB.style.display = 'none';
    respC.style.display = 'none';
    respD.style.display = 'none';
    question.innerHTML = `Sua pontuação: ${valor}/5`;
    botaoApagar.style.display = 'none';
    paragrafoApagar.style.display = 'none';
            console.log('funcionou')
          }, 2000);}
}

function mudarCor() {
    if (respCorreta == 'A') {
        respA.style.backgroundColor = 'green';
        respB.style.backgroundColor = 'red';
        respC.style.backgroundColor = 'red';
        respD.style.backgroundColor = 'red';
    }
    if (respCorreta == 'B') {
        respA.style.backgroundColor = 'red';
        respB.style.backgroundColor = 'green';
        respC.style.backgroundColor = 'red';
        respD.style.backgroundColor = 'red';
    }
    if (respCorreta == 'C') {
        respA.style.backgroundColor = 'red';
        respB.style.backgroundColor = 'red';
        respC.style.backgroundColor = 'green';
        respD.style.backgroundColor = 'red';
    }
    if (respCorreta == 'D') {
        respA.style.backgroundColor = 'red';
        respB.style.backgroundColor = 'red';
        respC.style.backgroundColor = 'red';
        respD.style.backgroundColor = 'green';
    }
}
function corPadrao() {
    respA.style.backgroundColor = '';
    respB.style.backgroundColor = '';
    respC.style.backgroundColor = '';
    respD.style.backgroundColor = '';
}

respA.addEventListener('click', VerificarRespostaBotaoA);
respB.addEventListener('click', VerificarRespostaBotaoB);
respC.addEventListener('click', VerificarRespostaBotaoC);
respD.addEventListener('click', VerificarRespostaBotaoD);

function apagarEscolhas() {
   if(travarApagar===0){
        if (respCorreta == 'A') {
            let apagarRespAletoria = Math.floor(Math.random() * 3);
            switch (apagarRespAletoria) {
                case 0:
                    respB.style.display = 'none';
                    break;
                case 1:
                    respC.style.display = 'none';
                    break;
                case 2:
                    respD.style.display = 'none';
                    break;
            }
        }
        if (respCorreta == 'B') {
            let apagarRespAletoria = Math.floor(Math.random() * 3);
            switch (apagarRespAletoria) {
                case 0:
                    respA.style.display = 'none';
                    break;
                case 1:
                    respC.style.display = 'none';
                    break;
                case 2:
                    respD.style.display = 'none';
                    break;
            }
        }
        if (respCorreta == 'C') {
            let apagarRespAletoria = Math.floor(Math.random() * 3);
            switch (apagarRespAletoria) {
                case 0:
                    respA.style.display = 'none';
                    break;
                case 1:
                    respB.style.display = 'none';
                    break;
                case 2:
                    respD.style.display = 'none';
                    break;
            }
        }
        if (respCorreta == 'D') {
            let apagarRespAletoria = Math.floor(Math.random() * 3);
            switch (apagarRespAletoria) {
                case 0:
                    respA.style.display = 'none';
                    break;
                case 1:
                    respB.style.display = 'none';
                    break;
                case 2:
                    respC.style.display = 'none';
                    break;
            }
        }
        travarApagar++;
    }
    
}
   
botaoApagar.addEventListener('click', apagarEscolhas);
console.log(travarApagar);
