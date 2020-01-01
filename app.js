let css = document.querySelector('h3');
// console.log(css)
let colorOne = document.querySelector('.colorOne');
// console.log(colorOne.value)
let colorTwo = document.querySelector('.colorTwo');
// console.log(colorTwo);
let body = document.getElementById('gradient');

function textTransform() {
  css.textContent = body.style.background;
  css.style.textTransform = 'uppercase';
}

function setGradient() {
  body.style.background = `linear-gradient(to right, ${colorOne.value}, ${colorTwo.value})`;
  textTransform();
}

colorOne.addEventListener('input', setGradient);
colorTwo.addEventListener('input', setGradient);
