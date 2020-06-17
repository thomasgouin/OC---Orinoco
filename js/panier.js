/* Récupère les éléments de l'URL pour créer un objet 
    Affiche la ligne récapitulative avec afficheLignePanier() définie dans ClassPanierProduit.js

    Création de fonction qui vont permettre de modifier les quantités de commande et de le multiplier le résultat par le prix. 
    Cette fonction prend pour maximum 10 et renvoie un message d'information si l'utilisateur va au delà de 10. 

*/



//Affichage de la ligne correspondante
let panierParse = JSON.parse(localStorage.getItem('panier'));
affichageLignePanier();
updatePrixTotal();

function updatePrixTotal(){
// Récupération de l'URL et trasformation en objet JSON
let panierParse = JSON.parse(localStorage.getItem('panier'));
let aPayer = 0;
for (let i=0; i<panierParse.length; i++){
    let prixAppareil = panierParse[i].price/100;
    let prixTotalAppareil = prixAppareil*panierParse[i].qty;
    aPayer += prixTotalAppareil
}
//panierParse
prixTotal.innerText = Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(aPayer);
}

document.addEventListener("updatePanier", () => {
    updatePrixTotal();
});



   
    