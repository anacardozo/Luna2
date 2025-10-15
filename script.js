const menu = document.querySelector(".botao-menu");
const menuLateral = document.querySelector(".menu-lateral");
const conteudo = document.querySelector(".content");
const navPesquisa = document.querySelector(".nav-pesquisa");

menu.addEventListener("click", () => {
  menuLateral.classList.toggle("active");
  conteudo.classList.toggle("active");
  navPesquisa.classList.toggle("active");
});


// ALERTAS
const modal = document.querySelector('.modal-materia');
const mheader = document.querySelector('.modal-header');
const lgMateria = document.querySelector('.logo-materia');
const mbody = document.querySelector('.modal-body');
const btnFechar = document.querySelector('.fechar-modal');
const mShadown = document.querySelector('.modal-shadown');

function ativarModal() {
  modal.style.display = "flex";
  mShadown.style.display = "block";
}

btnFechar.addEventListener("click", () => {
  modal.style.display = "none";
  mShadown.style.display = "none";
})