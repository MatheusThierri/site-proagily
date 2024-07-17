const menuDiv = document.getElementById('navbar-mobile');
const btn = document.getElementById('btn-menu');

menuDiv.addEventListener('click', animacao);

function animacao(){ 
    menuDiv.classList.toggle('abrir')
    btn.classList.toggle('ativacao') 
}