let numero = document.getElementById("nro");
const enviar = document.getElementById("act");
let ultimo = document.querySelector(".uNumero");

enviar.addEventListener("click",(e)=>{
    e.preventDefault();
    let nxx = "n" + numero.value;
    console.log(nxx);
    document.getElementById(nxx).style.backgroundColor = "yellow";
    document.getElementById(nxx).style.color = "black";
    ultimo.innerHTML = "Último número cantado: " + numero.value;
    document.getElementById("nro").value = "";
})