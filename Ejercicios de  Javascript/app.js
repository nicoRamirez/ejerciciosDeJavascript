var boton = document.querySelector("button");

var callback = function(){
   var body= document.querySelector("body");
    body.insertAdjacentHTML("beforeend", "<p>BEEP</p>");
    body.classList.toggle("color");
}

boton.addEventListener("click",callback);

var parrafo = document.querySelectorAll("p");



for(var i = 0; i < parrafo.length; i++){
    lis[i].addEventListener("click", function(){
        this.style.color="yeloow"
    })
}