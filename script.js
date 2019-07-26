let quadrados = document.querySelectorAll("div");
let i = 0;

function jogada(){
    if(this.innerHTML == ""){
        if(i % 2 == 0){
            this.innerHTML = "x"    
            this.style.color = "white";
            i++;
        } else {
            this.innerHTML = "o";
            this.style.color = "white";
            i++;
        }
    }
}

for (let quadrado of quadrados) {
    quadrado.onclick = jogada;
}



function verificarFinal(){
    if(quadrados[0].style.none == quadrados[1].style.backgroundColor && quadrados[1].style.backgroundColor == quadrados[2].style.backgroundColor && quadrados[2].style.backgroundColor == quadrados[3].style.backgroundColor){
        resposta.innerHTML = "!!! VOCÊ VENCEU !!!";
        
        for(let quadrado of quadrados){
            quadrado.onclick = null;
            setTimeout(() => {
                quadrado.classList.add("virarQuadrado");
            }, 1000);
        }  
    }
    else{
        resposta.innerHTML= "Ainda não foi !!";
    }
}