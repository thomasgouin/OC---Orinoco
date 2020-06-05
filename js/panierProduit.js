const panier = document.getElementById('panier');

const produitTotal = document.createElement('article'); produitTotal.classList.add('panier__produit'); 
const produitImage = document.createElement('img'); produitImage.classList.add('panier__produit__photo');
const produitTitre = document.createElement('h2'); produitTitre.classList.add('panier__produit__titre');
const produitQuantite = document.createElement('div'); produitQuantite.classList.add('panier__produit__quantite');

const produitQuantiteMoins = document.createElement('button'); produitQuantiteMoins.classList.add('quantiteMoins');produitQuantiteMoins.setAttribute('id', 'moins');produitQuantiteMoins.textContent= "-";
const produitQuantiteEgal = document.createElement('input'); produitQuantiteEgal.classList.add('quantiteEgal');produitQuantiteEgal.setAttribute('id', 'egal');produitQuantiteEgal.value = 1;
const produitQuantitePlus = document.createElement('button'); produitQuantitePlus.classList.add('quantitePlus');produitQuantitePlus.setAttribute('id', 'plus');produitQuantitePlus.textContent= "+";



panier.appendChild(produitTotal);
produitTotal.appendChild(produitImage);
produitTotal.appendChild(produitTitre);
produitTotal.appendChild(produitQuantite);
produitQuantite.appendChild(produitQuantiteMoins);
produitQuantite.appendChild(produitQuantiteEgal);
produitQuantite.appendChild(produitQuantitePlus);



console.log(egal.value);
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





    

 

