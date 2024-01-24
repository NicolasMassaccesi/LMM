let btnRojo = document.getElementById('btnrojo');
let btnVerde = document.getElementById('btnverde');
let btnAzul = document.getElementById('btnazul');
let btnAmarillo= document.getElementById('btnamarillo');
let btnRosa= document.getElementById('btnrosa');
let btnReset = document.getElementById('btnreset');
let box = document.querySelector('.box');

// Ejercicio 1:

function setColorRojo() {
  if(btnRojo.value == "rojo") {
    box.style.background = "#FF0000";
  }
}

function setColorMouseOverRojo(){
  if (btnRojo.value == "rojo") {
    btnRojo.style.background = "#FF0000";
    btnRojo.style.filter = "brightness(1)";
  }
}

function setColorVerde() {
  if(btnVerde.value == "verde") {
    box.style.background = "#00FF00";
  }
}

function setColorMouseOverVerde(){
  if (btnVerde.value == "verde") {
    btnVerde.style.background = "#00FF00";
    btnVerde.style.filter = "brightness(1)";
  }
}

function setColorAzul() {
  if(btnAzul.value == "azul") {
    box.style.background = "#0000FF";
  }
}

function setColorMouseOverAzul(){
  if (btnAzul.value == "azul") {
    btnAzul.style.background = "#0000FF";
    btnAzul.style.filter = "brightness(1)";
  }
}

function setColorAmarillo() {
  if(btnAmarillo.value == "amarillo") {
    box.style.background = "#FFFF00";
  }
}

function setColorMouseOverAmarillo(){
  if (btnAmarillo.value == "amarillo") {
    btnAmarillo.style.background = "#FFFF00";
    btnAmarillo.style.filter = "brightness(1)";
  }
}

function setColorRosa() {
  if (btnRosa.value == "rosa") {
    box.style.background = "#F88379";
  }
}

function setColorMouseOverRosa(){
  if (btnRosa.value == "rosa") {
    btnRosa.style.background = "#F88379";
    btnRosa.style.filter = "brightness(1)";
  }
}

function setColorReset() {
  if(btnReset.value == "reset") {
    box.style.background = "#000000";
  }
}

function setColorMouseLeaveReset(btnColor) {
  document.getElementById(btnColor).style.background = "rgb(191, 219, 29)";
  document.getElementById(btnColor).style.filter = "brightness(1)";
}

function setColorMouseDown(btnColor) {
  document.getElementById(btnColor).style.filter = "brightness(0.7)";
}

// Ejericico 2:

let titulo = document.getElementById("titulo");

titulo.innerHTML = "LOREM IPSUM DOLOR SIT AMET";
box.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


