let appareilJSONSParse = JSON.parse(localStorage.getItem("appareil"));

affichageLignePanier()

const prixAppareil = appareilJSONSParse.price/100;
const prixTotal = document.getElementById('prixTotal');
prixTotal.innerText= Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(prixAppareil);

const qMoins = document.getElementById('moins');
const qPlus = document.getElementById('plus');
const qEgal = document.getElementById('egal');
const panier = document.getElementById('panier');
const infoBulle = document.createElement('p');infoBulle.classList.add('servicePro'); infoBulle.innerText = "Pour passer une commande suppérieure à 10, contactez notre service pro !";
 

enleve();
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
