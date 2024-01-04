document.getElementById('readmore-button').addEventListener('click', function() {
  document.getElementById('hidden-content').style.display = 'block';
});


document.addEventListener("DOMContentLoaded", function() {
  // Seleciona o elemento principal da seção "about"
  var aboutContainer = document.querySelector('.about--container');

  // Adiciona a classe 'fade-in' após um pequeno atraso
  setTimeout(function() {
      aboutContainer.classList.add('fade-in');
  }, 500); // Ajuste o valor do atraso conforme necessário
});