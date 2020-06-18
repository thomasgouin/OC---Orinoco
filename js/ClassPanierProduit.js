// Création de la ligne récapitulative dans le panier

function affichageLignePanier() {

    
    for (let i = 0; i < panierParse.length; i++){

        const panier = document.getElementById('panier');
        const produitTotal = document.createElement('article'); produitTotal.classList.add('panier__produit'); 
        const produitImage = document.createElement('img'); produitImage.classList.add('panier__produit__photo');produitImage.setAttribute('src', panierParse[i].image);
        const produitTitre = document.createElement('h2'); produitTitre.classList.add('panier__produit__titre');produitTitre.innerText = panierParse[i].name;
        const produitQuantite = document.createElement('div'); produitQuantite.classList.add('panier__produit__quantite');
        const produitCorbeille = document.createElement('div'); produitCorbeille.classList.add('panier__produit__corbeille');produitCorbeille.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="32" viewBox="0 0 72 98"><defs><style>.a{fill:url(#a);}</style><linearGradient id="a" y1="0.118" x2="0.912" y2="0.725" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#dd8c4e"/><stop offset="1" stop-color="#986efb"/></linearGradient></defs><path class="a" d="M21.883,98A13,13,0,0,1,8.925,86.061l-.042.6L4.207,21.329H68.26L63.584,86.658l-.043-.6A13,13,0,0,1,50.584,98ZM48.155,30.694V89.789a1.87,1.87,0,0,0,3.74,0V30.694a1.87,1.87,0,1,0-3.74,0Zm-14.026,0V89.789a1.87,1.87,0,0,0,3.74,0V30.694a1.87,1.87,0,1,0-3.74,0Zm-14.026,0V89.789a1.87,1.87,0,0,0,3.74,0V30.694a1.87,1.87,0,1,0-3.74,0ZM4.9,16.718a4.9,4.9,0,0,1,0-9.8H21.974A6.917,6.917,0,0,1,28.892,0H43.108a6.917,6.917,0,0,1,6.917,6.917H67.1a4.9,4.9,0,0,1,0,9.8Z"/></svg>';

        const qMoins = document.createElement('button'); qMoins.classList.add('quantiteMoins');qMoins.setAttribute('id', 'moins-'+ i);qMoins.textContent= "-";
        const qEgal = document.createElement('input'); qEgal.classList.add('quantiteEgal');qEgal.setAttribute('id', 'egal-' + i);qEgal.value = panierParse[i].qty;
        const qPlus = document.createElement('button'); qPlus.classList.add('quantitePlus');qPlus.setAttribute('id', 'plus-'+ i);qPlus.textContent= "+";

        panier.appendChild(produitTotal);
        produitTotal.appendChild(produitImage);
        produitTotal.appendChild(produitTitre);
        produitTotal.appendChild(produitCorbeille);
        produitTotal.appendChild(produitQuantite);
        produitQuantite.appendChild(qMoins);
        produitQuantite.appendChild(qEgal);
        produitQuantite.appendChild(qPlus); 

        const prixTotal = document.getElementById('prixTotal');
        const infoBulle = document.createElement('p');infoBulle.classList.add('servicePro'); infoBulle.innerText = "Pour passer une commande suppérieure à 10, contactez notre service pro !";

        //Modification des quantités bouton "-" et "+"

        qMoins.addEventListener('click', function (){
            enleve();
            let updatePrice = new Event('updatePanier', {bubbles: false})
            document.dispatchEvent(updatePrice);
        });
        
        qPlus.addEventListener('click', function (){
            ajoute();
            let updatePrice = new Event('updatePanier', {bubbles: false})
            document.dispatchEvent(updatePrice);
        }); 
        // suppression des éléments (bouton corbeille)
        produitCorbeille.addEventListener('click', function(){
            panierParse.splice(i,1);
            localStorage.setItem('panier', JSON.stringify(panierParse));
            panier.removeChild(produitTotal);
            let updatePrice = new Event('updatePanier', {bubbles: false})
            document.dispatchEvent(updatePrice);
        });
        
        function enleve(){
            if (qEgal.value >1){
                qEgal.value = parseInt(qEgal.value -1);
                panierParse[i].qty = qEgal.value;
                localStorage.setItem('panier', JSON.stringify(panierParse));
            }else if (qEgal.value ==1){
                panierParse.splice(i,1);
                panier.removeChild(produitTotal);
                localStorage.setItem('panier', JSON.stringify(panierParse));
            }else if(qEgal.value ==10){
                panier.removeChild(infoBulle);
            }
        }

        function ajoute(){
            if (qEgal.value <10){
                qEgal.value = parseInt(qEgal.value) +1;
                panierParse[i].qty = qEgal.value;
                prixTotal
                localStorage.setItem('panier', JSON.stringify(panierParse));

            }else {
                qEgal.value = 10;
                panierParse[i].qty = qEgal.value;
                localStorage.setItem('panier', JSON.stringify(panierParse));
                panier.appendChild(infoBulle);
            }
        }
    }    
}











    

 

