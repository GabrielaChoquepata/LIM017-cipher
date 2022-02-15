import cipher from './cipher.js';

console.log(cipher);


window.addEventListener("load",inicio,true);
function inicio(){
    document.getElementById("text-mssg").addEventListener("keyup",function(){
        this.value=this.value.toUpperCase();
    })
}document.getElementById("encode-button").addEventListener("")