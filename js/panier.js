let appareilJSONSParse = JSON.parse(localStorage.getItem("appareil"));
console.log(appareilJSONSParse);



const prixAppareil = parseInt(appareilJSONSParse.price);
const prixTotal = document.getElementById('prixTotal');prixTotal.innerText= Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(prixAppareil/100);

const qMoins = document.getElementById('moins');
const qPlus = document.getElementById('plus');

function modifierNombre() {
    if (egal.value >=0 && egal.value<11){
        qMoins.addEventListener('click', () => {
            egal.value = parseInt(egal.value) -1;
        });
        qPlus.addEventListener('click', () =>{
            egal.value = parseInt(egal.value) +1;
        });
    } else if(equal.value ==0) {
        qMoins.addEventListener('click', () => {
            egal.value === 0;
        });
        qPlus.addEventListener('click', () =>{
            egal.value = parseInt(egal.value) +1;
        });
    }else{
        qMoins.addEventListener('click', () => {
            egal.value = parseInt(egal.value) -1;
        });
        qPlus.addEventListener('click', () =>{
            egal.value ===10;
        });
    } 
}
modifierNombre();