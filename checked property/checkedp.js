let donated;
let visa;
let cash;
let kidney;


let button = document.getElementById("submit").onclick = function(){
    
    if (document.getElementById("dil").checked){
        document.getElementById("p1").textContent = "Im proud of you";
    }
    else{
        document.getElementById("p1").textContent = "U gay";        
    }


    if (document.getElementById("payment1").checked) {
        document.getElementById("p2").textContent = "payment1";                
    }
    else if (document.getElementById("payment2").checked) {
        document.getElementById("p2").textContent = "payment2";                
    }
    else if (document.getElementById("payment3").checked) {
        document.getElementById("p2").textContent = "payment3";                

    }
        
    

}