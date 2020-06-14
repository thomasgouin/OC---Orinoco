// Création de la ligne récapitulative dans le panier

function affichageLignePanier() {


    for (let i = 0; i < panierParse.length; i++){

        const panier = document.getElementById('panier');
        const produitTotal = document.createElement('article'); produitTotal.classList.add('panier__produit'); 
        const produitImage = document.createElement('img'); produitImage.classList.add('panier__produit__photo');produitImage.setAttribute('src', panierParse[i].image);
        const produitTitre = document.createElement('h2'); produitTitre.classList.add('panier__produit__titre');produitTitre.innerText = panierParse[i].name;
        const produitQuantite = document.createElement('div'); produitQuantite.classList.add('panier__produit__quantite');

        const qMoins = document.createElement('button'); qMoins.classList.add('quantiteMoins');qMoins.setAttribute('id', 'moins');qMoins.textContent= "-";
        const qEgal = document.createElement('input'); qEgal.classList.add('quantiteEgal');qEgal.setAttribute('id', 'egal');qEgal.value = panierParse[i].qty;
        const qPlus = document.createElement('button'); qPlus.classList.add('quantitePlus');qPlus.setAttribute('id', 'plus');qPlus.textContent= "+";

        panier.appendChild(produitTotal);
        produitTotal.appendChild(produitImage);
        produitTotal.appendChild(produitTitre);
        produitTotal.appendChild(produitQuantite);
        produitQuantite.appendChild(qMoins);
        produitQuantite.appendChild(qEgal);
        produitQuantite.appendChild(qPlus); 


        const prixAppareil = panierParse[i].price/100;
        console.log(prixAppareil);
        const prixTotalAppareil = prixAppareil*panierParse[i].qty;

        //Modification des quantités bouton "-"
        enleve();

        //Modification des quantités Bouton "+"
        ajoute();
        

        function enleve(){
            if (qEgal.value >0){
                qEgal.value = parseInt(qEgal.value -1);
                qMoins.addEventListener('click', enleve);
                panierParse[i].qty = qEgal.value;
                localStorage.setItem('panier', JSON.stringify(panierParse));
            }else if (qEgal.value ==0){
                qEgal.value = 0;
                panierParse[i].qty = qEgal.value;
                localStorage.setItem('panier', JSON.stringify(panierParse));
            }else{
                panier.removeChild(infoBulle);
            }
        }

        function ajoute(){
            if (qEgal.value <10){
                qEgal.value = parseInt(qEgal.value) +1;
                qPlus.addEventListener('click', ajoute); 
                panierParse[i].qty = qEgal.value;
                localStorage.setItem('panier', JSON.stringify(panierParse));

            }else {
                qEgal.value = 10;
                panierParse[i].qty = qEgal.value;
                localStorage.setItem('panier', JSON.stringify(panierParse));
                panier.appendChild(infoBulle);
            }
        }
    }
    const infoBulle = document.createElement('p');infoBulle.classList.add('servicePro'); infoBulle.innerText = "Pour passer une commande suppérieure à 10, contactez notre service pro !";
    console.log(panierParse);
}











    

 

