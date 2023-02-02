//BOTÕES
const btnRed = document.getElementById('red');
const btnYellow = document.getElementById('yellow');
const btnGreen = document.getElementById('green');
const btnAutomatico = document.getElementById('automatico');

//IMAGENS
const red = document.getElementById('semaforoVermelho');
const yellow = document.getElementById('semaforoAmarelo');
const green = document.getElementById('semaforoVerde');


function vermelho(){
    red.style.display='block';

    yellow.style.display='none';
    green.style.display='none';
}
function verde(){
    green.style.display='block';
    
    yellow.style.display='none';
    red.style.display='none';
}
function amarelo(){
    yellow.style.display='block';
    
    red.style.display='none';
    green.style.display='none';
}


btnRed.addEventListener('click', vermelho);
btnYellow.addEventListener('click', amarelo);
btnGreen.addEventListener('click', verde);

