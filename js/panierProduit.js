const panier = document.getElementById('panier');

let appareilJSONSParse = JSON.parse(localStorage.getItem("appareil"));
console.log(appareilJSONSParse);

const produitTotal = document.createElement('article'); produitTotal.classList.add('panier__produit'); 
const produitImage = document.createElement('img'); produitImage.classList.add('panier__produit__photo');produitImage.setAttribute('src', appareilJSONSParse.image);
const produitTitre = document.createElement('h2'); produitTitre.classList.add('panier__produit__titre');produitTitre.innerText = appareilJSONSParse.name;
const produitQuantite = document.createElement('div'); produitQuantite.classList.add('panier__produit__quantite');

const produitQuantiteMoins = document.createElement('button'); produitQuantiteMoins.classList.add('quantiteMoins');produitQuantiteMoins.setAttribute('id', 'moins');produitQuantiteMoins.textContent= "-";
const produitQuantiteEgal = document.createElement('input'); produitQuantiteEgal.classList.add('quantiteEgal');produitQuantiteEgal.setAttribute('id', 'egal');produitQuantiteEgal.value = 1;
const produitQuantitePlus = document.createElement('button'); produitQuantitePlus.classList.add('quantitePlus');produitQuantitePlus.setAttribute('id', 'plus');produitQuantitePlus.textContent= "+";

const prixAppareil = parseInt(appareilJSONSParse.price);
const prixTotal = document.getElementById('prixTotal');prixTotal.innerText= Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(prixAppareil/100);

panier.appendChild(produitTotal);
produitTotal.appendChild(produitImage);
produitTotal.appendChild(produitTitre);
produitTotal.appendChild(produitQuantite);
produitQuantite.appendChild(produitQuantiteMoins);
produitQuantite.appendChild(produitQuantiteEgal);
produitQuantite.appendChild(produitQuantitePlus);



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





    

 

