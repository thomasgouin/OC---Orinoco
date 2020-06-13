/* Récupère les éléments de l'URL pour créer un objet 
    Affiche la ligne récapitulative avec afficheLignePanier() définie dans ClassPanierProduit.js

    Création de fonction qui vont permettre de modifier les quantités de commande et de le multiplier le résultat par le prix. 
    Cette fonction prend pour maximum 10 et renvoie un message d'information si l'utilisateur va au delà de 10. 

*/

// Récupération de l'URL et trasformation en objet JSON
let panierParse = JSON.parse(localStorage.getItem('panier'));
console.log(panierParse);



//Affichage de la ligne correspondante
affichageLignePanier()

//Calcul du prix total
const prixAppareil = panierParse.price/100;
const prixTotal = document.getElementById('prixTotal');
prixTotal.innerText= Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(prixAppareil);

const qMoins = document.getElementById('moins');
const qPlus = document.getElementById('plus');
const qEgal = document.getElementById('egal');
const panier = document.getElementById('panier');
const infoBulle = document.createElement('p');infoBulle.classList.add('servicePro'); infoBulle.innerText = "Pour passer une commande suppérieure à 10, contactez notre service pro !";
 
//Modification des quantités bouton "-"
enleve();

//Modification des quantités Bouton "+"
ajoute();


function enleve(){
    if (qEgal.value >0){
        qEgal.value = parseInt(qEgal.value -1);
        qMoins.addEventListener('click', enleve);
    }else if (qEgal.value ==0){
        qEgal.value = 0;
    }else{
        panier.removeChild(infoBulle);
    }
    prixTotal.innerText = Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(prixAppareil*(qEgal.value));
}

function ajoute(){
    if (qEgal.value <10){
        qEgal.value = parseInt(qEgal.value) +1;
        qPlus.addEventListener('click', ajoute); 
    }else {
        qEgal.value = 10;
        panier.appendChild(infoBulle);
    }
    prixTotal.innerText = Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(prixAppareil*(qEgal.value));
}
