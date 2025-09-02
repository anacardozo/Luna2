const menu = document.querySelector('.botao-menu');
const menuLateral = document.querySelector('.menu-lateral');
const conteudo = document.querySelector('.content');

menu.addEventListener('click', () => {
    menuLateral.classList.toggle('active');
    conteudo.classList.toggle('active');
})