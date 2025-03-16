let uname1, uname2;

const PI = 3.14159;
let radius, circumference;

document.getElementById("submitbutt").onclick = function(){
    
    radius = document.getElementById("radius").value;
    radius = Number(radius);
    circumference = 2 * radius * PI;
    console.log(circumference);
    document.getElementById("b1").textContent = circumference - (circumference % 1);
    document.getElementById("b2").textContent =(circumference % 1);
}



