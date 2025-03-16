document.getElementById("increase").onclick = function(){
    let temp = document.getElementById("counter").textContent;
    temp = Number(temp);
    temp++;
    document.getElementById("counter").textContent = temp;
}

document.getElementById("decrease").onclick = function(){
    let temp = document.getElementById("counter").textContent;
    temp = Number(temp);
    if (temp !== 0) {
        temp--;
        document.getElementById("counter").textContent = temp;
    }
}

document.getElementById("reset").onclick = function(){
    document.getElementById("counter").textContent = "0";
}