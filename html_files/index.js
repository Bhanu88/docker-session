const count = document.querySelector('span');
const button = document.querySelector('button');
button.addEventListener('click', function () {
  count.textContent = parseInt(count.textContent) + 1;
});