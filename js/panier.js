
// On appelle la fonction qui crée le panier dans le Browser (définie dans ClassPanierProduit.js)
let panierParse = JSON.parse(localStorage.getItem('panier'));
affichageLignePanier();

//On met à jour le prix total en fonction des évènements de modifications de panier. 
updatePrixTotal();

function updatePrixTotal(){
    //On récupère le panier sous format objet JSON
    let panierParse = JSON.parse(localStorage.getItem('panier'));
    //On paramètre la valeur aPayer à 0
    let aPayer = 0;
    //On calcule la valeur totale du panier
    for (let i=0; i<panierParse.length; i++){
        // on récupère le prix en enlevant les centimes
        let prixAppareil = panierParse[i].price/100;
        //On calcule le prix total par objet en prenant en compte la quantité
        let prixTotalAppareil = prixAppareil*panierParse[i].qty;
        //On ajoute à notre valeur de départ l'ensemble des prix totaux par objet
        aPayer += prixTotalAppareil
    }
    prixTotal.innerText = Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(aPayer);
}
// A chaque fois que l'on entend un évènement de modification du panier, on met à jour le prix. 
document.addEventListener("updatePanier", () => {
    updatePrixTotal();
});



   
    