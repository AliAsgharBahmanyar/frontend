let button = document.getElementById("roll");

button.onclick = function() {
    let min = Number(document.getElementById("min").value);
    let max = Number(document.getElementById("max").value);
    if (min>max){
        document.getElementById("result").textContent = "min greater than max";
        console.log("min greater than max")
    }
    else{
        let r = Math.floor(Math.random() * (max - min) + min);
        console.log(r);
        document.getElementById("result").textContent = r;
    }
}
