/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here+
  let numeros = [
    "J",
    "Q",
    "K",
    "10",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "A"
  ];
  let palos = ["♥", "♣", "♠", "♦"];

  let randomNumeros = numeros[Math.floor(Math.random() * numeros.length)];
  let randomPalos = palos[Math.floor(Math.random() * palos.length)];

  console.log(randomNumeros + randomPalos);

  let changepalo = document.querySelector(".icono1");
  changepalo.innerHTML = randomPalos;

  let changeNumero = document.querySelector(".centro");
  changeNumero.innerHTML = randomNumeros;

  let changepaloDos = document.querySelector(".icono2");
  changepaloDos.innerHTML = randomPalos;

  if (randomPalos == "♥" || randomPalos == "♦") {
    let changeColorPalo = document.querySelector(".icono1");
    changeColorPalo.classList.add("red");

    let changeColorPalo2 = document.querySelector(".icono2");
    changeColorPalo2.classList.add("red");
  }
};
