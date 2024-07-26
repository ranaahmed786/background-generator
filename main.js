let first = document.querySelector('#f-color');
let second = document.querySelector('#s-color');
let body = document.querySelector('body');
let css = document.querySelector('#text-content');
function change_gradient(){
    body.style.backgroundImage="linear-gradient(to right,"+ first.value +","+second.value+")";
    css.textContent = body.style.backgroundImage + ";";
}
console.log(css.textContent)