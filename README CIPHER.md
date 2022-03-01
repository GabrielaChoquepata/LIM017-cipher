# CIPHER in Gravity Falls

## Índice

* [1. Funcionalidad del proyecto](#1-funcionalidad-del-proyecto)
* [2. Proceso de diseño](#2-proceso-de-diseño)
* [3. Instrucciones de uso](#4-instrucciones-de-uso)

***
## 1. Funcionalidad del proyecto

Este proyecto tiene como principal funcionalidad el cifrado y descifrado de mensajes, mediante el llamado "Cifrado Cesar"
Esta es una tecnica sencilla donde se ingresa un mensaje y un orden de desplazamiento, y se procede a la sustitucion de letras de acuerdo al orden de desplazamiento especificado, creando asi un mensaje encriptado para el usuario. Algo asi:

Por ejemplo, si usamos un desplazamiento de 2 posiciones:

* La letra A se cifra como C.
* La palabra CASA se cifra como ECUC.

## 2. Proceso de diseño

![] (https://github.com/GabrielaChoquepata/LIM017-cipher/blob/main/src/img/procesoDeDise%C3%B1oReadme.png)

> Infografia proceso de diseño.

## 3. Instrucciones de uso

Podras entrar desde tu navegador de preferencia al link siguiente "http://127.0.0.1:5500/src/index.html" para asi poder vivir la experiencia en la Comunidad Gravity Falls, alli te pedira ingresar tu usuario para iniciar, luego pasaras a una vista con las demas opciones que te brinda el juego, pero esta vez nos centraremos en el Cipher, que se utiliza para descifrar mensajes secretos de cada capitulo, asi como enviar mensajes a tus amigos de la comunidad, para que nadie sepa lo que estan planeando en cada misión. En la vista de Cipher, veras un formulario donde habra una cajita para ingresar el mensaje que deseas cifrar, debajo una clave (numero de desplazamientos por letra) para codificar tu mensaje, debajo tres botones: El primero "Cifrar" para encriptar el mensaje, segundo "Descifrar" para el proceso inverso, y el último para "Limpiar" que como su nombre lo dice limpiara el formulario, al costado derecho se procesara tu mensaje de acuerdo a la opción que hiciste click. Y listo! Ya tienes tus mensajes para empezar a jugar en las misiones de este pueblo del misterio.