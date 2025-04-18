alert("Bienvenido a la calculadora de calorias");

let metaCalorias=prompt("Cual es la meta de calorias a alcanzar con su dieta?");
console.log("Calorias elegidas:"+metaCalorias);
let calElegidas=document.getElementById("cElegidas");
console.log(calElegidas);
calElegidas.innerHTML=metaCalorias;

let totalCalorias=0;
let totalGrasas=0;
let totalProteinas=0;

let metaProteinas=prompt("Cual es la meta de proteinas que quiere consumir?");
console.log("Proteinas elegidas:"+metaProteinas);
let protElegidas=document.getElementById("pElegidas");
protElegidas.innerHTML=metaProteinas;

let metaGrasas=prompt("Cual es la meta de grasas que quiere conseguir?");
console.log("Grasas elegidas:"+metaGrasas);
let grasElegidas=document.getElementById("gElegidas");
grasElegidas.innerHTML=metaGrasas;

function actualizarBarra(idBarra, porcentaje){
    const barra = document.getElementById(idBarra);
    barra.style.width = porcentaje+'%';
}
function mostrarSeccionDesayuno(){
    const section = document.getElementById('desayuno');
    section.style.display = section.style.display === 'none' ? 'block' : 'none';
  }
  function mostrarSeccionComida(){
    const section = document.getElementById('comida');
    section.style.display = section.style.display === 'none' ? 'block' : 'none';
  }
  function mostrarSeccionCena(){
    const section = document.getElementById('cena');
    section.style.display = section.style.display === 'none' ? 'block' : 'none';
  }

  function agregarAlimento(cal, prot, gras) {
    totalCalorias += cal;
    totalProteinas += prot;
    totalGrasas += gras;
    actualizarBarra("barraCalorias", totalCalorias / metaCalorias * 100);
    let loQueVaC=document.getElementById("cQueVan");
    loQueVaC.innerHTML=totalCalorias;
    actualizarBarra("barraProteinas", totalProteinas / metaProteinas * 100);
    let loQueVaP=document.getElementById("pQueVan");
    loQueVaP.innerHTML=totalProteinas;
    actualizarBarra("barraGrasas", totalGrasas / metaGrasas * 100);
    let loQueVaG=document.getElementById("gQueVan");
    loQueVaG.innerHTML=totalGrasas;
  }

  function actualizarBarra(idBarra, porcentaje) {
    const barra = document.getElementById(idBarra);
    porcentaje = Math.min(porcentaje, 100); // Para no pasar del 100%
    barra.style.width = porcentaje + "%";
  }