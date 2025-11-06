// Menu ativo ao clicar + scroll suave
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // impede o "pulo" direto

    // remove a classe active de todos
    document.querySelectorAll('.menu a').forEach(el => el.classList.remove('active'));

    // adiciona active no clicado
    this.classList.add('active');

    // pega o destino do link (ex: #boteco, #inicio, #porcoes)
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Botão "Ver Cardápio" leva até a seção Tradicionais
document.getElementById('btn-cardapio').addEventListener('click', function(e) {
  e.preventDefault();

  const targetElement = document.querySelector('#tradicionais');
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});
