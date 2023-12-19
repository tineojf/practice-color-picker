const rangeRed = document.querySelector('#range-r');
const rangeGreen = document.querySelector('#range-g');
const rangeBlue = document.querySelector('#range-b');

const txtRed = document.querySelector('#txt-r');
const txtGreen = document.querySelector('#txt-g');
const txtBlue = document.querySelector('#txt-b');

let red = 128;
let green = 128;
let blue = 128;

function changeColor() {
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function changeColorText(txt) {
  txt.innerHTML = txt.value;
}

rangeRed.addEventListener('input', function () {
  red = this.value;
  txtRed.value = this.value;
  changeColorText(txtRed);
  changeColor();
});

rangeGreen.addEventListener('input', function () {
  green = this.value;
  txtGreen.value = this.value;
  changeColorText(txtGreen);
  changeColor();
});

rangeBlue.addEventListener('input', function () {
  blue = this.value;
  txtBlue.value = this.value;
  changeColorText(txtBlue);
  changeColor();
});


changeColor();