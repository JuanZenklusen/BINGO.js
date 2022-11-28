let numero = document.getElementById("nro");
const enviar = document.getElementById("act");
const bingo = document.getElementById("bingo");
const linea = document.getElementById("linea");
let ultimo = document.querySelector(".uNumero");
const body = document.querySelector("body");


enviar.addEventListener("click",(e)=>{
    e.preventDefault();
    let nxx = "n" + numero.value;
    console.log(nxx);
    document.getElementById(nxx).style.backgroundColor = "yellow";
    document.getElementById(nxx).style.color = "black";
    document.querySelector(".uNumero").style.color = "rgb(245, 245, 107)";
    document.querySelector(".uNumero").style.backgroundColor = "#1B1B1B";
    ultimo.innerHTML = "Último número cantado: " + numero.value;
    document.getElementById("nro").value = "";
})

bingo.addEventListener("click",(f)=>{
    f.preventDefault();
    document.querySelector(".uNumero").style.color = "rgb(236, 18, 18)";
    document.querySelector(".uNumero").style.backgroundColor = "rgb(245, 245, 107)";
    ultimo.innerHTML = "¡¡TENEMOS GANADOR!! BINGO";
})

linea.addEventListener("click",(g)=>{
    g.preventDefault();
    document.querySelector(".uNumero").style.color = "rgb(236, 18, 18)";
    document.querySelector(".uNumero").style.backgroundColor = "rgb(255, 255, 255)";
    ultimo.innerHTML = "¡¡LINEAA!!";
})