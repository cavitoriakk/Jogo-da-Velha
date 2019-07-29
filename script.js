let quadrados = document.querySelectorAll("div");
let i = 0;
let botao = document.querySelector("button")
let resposta = document.querySelector("h2")
function jogada(){
    if(this.innerHTML == ""){
        if(i % 2 == 0){
            this.innerHTML = "X"   
             
            this.style.color = "black";
            i++;
            verificarResultado();
        } else {
            this.innerHTML = "O";
            this.style.color = "black";
            i++;
            verificarResultado();
        }
    }
}



for(let quadrado of quadrados){
    quadrado.onclick = jogada;
}
function verificarResultado (){
    if(quadrados[0].innerHTML !=="" && quadrados[0].innerHTML === quadrados[1].innerHTML && quadrados[1].innerHTML=== quadrados[2].innerHTML){
        resposta.innerHTML = "você venceu!";
    } 
    else if(quadrados[3].innerHTML !=="" && quadrados[3].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML=== quadrados[5].innerHTML){
        resposta.innerHTML = "você venceu!";
    } 
    else if(quadrados[6].innerHTML !=="" && quadrados[6].innerHTML === quadrados[7].innerHTML && quadrados[7].innerHTML=== quadrados[8].innerHTML){
        resposta.innerHTML = "você venceu!";
    } 
    else if(quadrados[0].innerHTML !=="" && quadrados[0].innerHTML === quadrados[3].innerHTML && quadrados[3].innerHTML=== quadrados[6].innerHTML){
        resposta.innerHTML = "você venceu!";
    } 
    else if(quadrados[1].innerHTML !=="" && quadrados[1].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML=== quadrados[7].innerHTML){
        resposta.innerHTML = "você venceu!";
    } 
    else if(quadrados[2].innerHTML !=="" && quadrados[2].innerHTML === quadrados[5].innerHTML && quadrados[5].innerHTML=== quadrados[8].innerHTML){
        resposta.innerHTML = "você venceu!";
    } 
    else if(quadrados[0].innerHTML !=="" && quadrados[0].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML=== quadrados[8].innerHTML){
        resposta.innerHTML = "você venceu!";
    } 
    else if(quadrados[2].innerHTML !=="" && quadrados[2].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML=== quadrados[6].innerHTML){
        resposta.innerHTML = "você venceu!";
    } 
    else if(i==9){
        resposta.innerHTML="deu velha";
    }

}

 function resetarJogo(){
     for(let quadrado of quadrados){
         quadrado.innerHTML="";
     }
     resposta.innerHTML = "jogo reset";
 }

 botao.onclick = resetarJogo;