// import trace from "./cipher.js";
// trace("hola a todos")

import cipher from "./cipher.js";

const mostrarW2 = document.getElementById("btnmostrarW2");
const mostrarCipher = document.getElementById("btnmostrarCipher");
const encodeButton = document.getElementById("encode-button");
const decodeButton = document.getElementById("decode-button");
const clearBtn = document.getElementById("clear-button");


mostrarW2.addEventListener("click", () => {
  let username = document.getElementById("username").value;
  if (username === '') {
      username = 'Desconocidx';
  }
  document.getElementById("W1").style.display = "none";
  document.getElementById("W2").style.display = "block";document.getElementById("personalised message").innerHTML = ('HEY! Hola! ' + username + '<br>Bienvenidx a Gravity falls! <br><br> Un misterioso pueblo lleno de secretos. <br>Para descubrir las pistas y misiones que te daremos utilizaremos mensajes cifrados, para ello inventamos un codigo secreto llamado "cipher". Este funciona cambiando el orden de las letras del alfabeto, desplazando las letras en un orden especifico, que es un número clave.');});


mostrarCipher.addEventListener("click", () => {
  document.getElementById("W2").style.display = 'none';
  document.getElementById("W3").style.display = 'block';
});


encodeButton.addEventListener("click", e => {
    e.preventDefault();
    const input = document.getElementById("text-meng");
    const value = input.value;
    const valueUper = value.toUpperCase();
    const offSet = parseInt(document.getElementById("offset").value);

    const valueEncode = cipher.encode(offSet, valueUper);

    const finalResult = document.getElementById("result");
    finalResult.innerHTML = valueEncode;

});


decodeButton.addEventListener("click", e => {
    e.preventDefault();
    const input = document.getElementById("text-meng");
    const value = input.value;
    const valueUper = value.toUpperCase();
    const offSet = parseInt(document.getElementById("offset").value);

    const valueDecode = cipher.decode(offSet, valueUper);

    const finalResult = document.getElementById("result");
    finalResult.innerHTML = valueDecode;

});

clearBtn.addEventListener("click", e => {
    e.preventDefault();
    document.getElementById("text-meng").value = "";
    document.getElementById("offset").value = "";
    const finalResult = document.getElementById("result");
    finalResult.innerHTML = "";
});