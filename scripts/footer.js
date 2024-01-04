document.getElementById('menu-title').addEventListener('click', function () {
  toggleList('menu-list');
});

document.getElementById('about-title').addEventListener('click', function () {
  toggleList('about-list');
});

function toggleList(listId) {
  var list = document.getElementById(listId);
  list.classList.toggle('show-list');
}
