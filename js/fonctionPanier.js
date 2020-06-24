// Création de la ligne récapitulative dans le panier

function affichageLignePanier() {

    for (let i = 0; i < panierParse.length; i++){
        //Création de l'élément à ajouter (image, rappel du titre, bouton corbeille et bloc quantité) 
        const panier = document.getElementById('panier');
        const produitTotal = document.createElement('article'); produitTotal.classList.add('panier__produit'); 
        const produitImage = document.createElement('img'); produitImage.classList.add('panier__produit__photo');produitImage.setAttribute('src', panierParse[i].image);
        const produitTitre = document.createElement('h2'); produitTitre.classList.add('panier__produit__titre');produitTitre.innerText = panierParse[i].name;
        const produitQuantite = document.createElement('div'); produitQuantite.classList.add('panier__produit__quantite');
        const produitCorbeille = document.createElement('div'); produitCorbeille.classList.add('panier__produit__corbeille');produitCorbeille.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="32" viewBox="0 0 72 98"><defs><style>.a{fill:url(#a);}</style><linearGradient id="a" y1="0.118" x2="0.912" y2="0.725" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#dd8c4e"/><stop offset="1" stop-color="#986efb"/></linearGradient></defs><path class="a" d="M21.883,98A13,13,0,0,1,8.925,86.061l-.042.6L4.207,21.329H68.26L63.584,86.658l-.043-.6A13,13,0,0,1,50.584,98ZM48.155,30.694V89.789a1.87,1.87,0,0,0,3.74,0V30.694a1.87,1.87,0,1,0-3.74,0Zm-14.026,0V89.789a1.87,1.87,0,0,0,3.74,0V30.694a1.87,1.87,0,1,0-3.74,0Zm-14.026,0V89.789a1.87,1.87,0,0,0,3.74,0V30.694a1.87,1.87,0,1,0-3.74,0ZM4.9,16.718a4.9,4.9,0,0,1,0-9.8H21.974A6.917,6.917,0,0,1,28.892,0H43.108a6.917,6.917,0,0,1,6.917,6.917H67.1a4.9,4.9,0,0,1,0,9.8Z"/></svg>';
        
        //Création des boutons de gestion des quantités
        const qMoins = document.createElement('button'); qMoins.classList.add('quantiteMoins');qMoins.setAttribute('id', 'moins-'+ i);qMoins.textContent= "-";
        const qEgal = document.createElement('input'); qEgal.classList.add('quantiteEgal');qEgal.setAttribute('id', 'egal-' + i);qEgal.value = panierParse[i].qty;
        const qPlus = document.createElement('button'); qPlus.classList.add('quantitePlus');qPlus.setAttribute('id', 'plus-'+ i);qPlus.textContent= "+";

        //Implémentation des différents éléments créés dans le dom
        panier.appendChild(produitTotal);
        produitTotal.appendChild(produitImage);
        produitTotal.appendChild(produitTitre);
        produitTotal.appendChild(produitCorbeille);
        produitTotal.appendChild(produitQuantite);
        produitQuantite.appendChild(qMoins);
        produitQuantite.appendChild(qEgal);
        produitQuantite.appendChild(qPlus); 

        //Création du message d'erreur sur la quantité max
        const infoBulle = document.createElement('p');infoBulle.classList.add('servicePro'); infoBulle.innerText = "Pour passer une commande suppérieure à 10, contactez notre service pro !";

        //Modification des quantités bouton "-" et "+"
        //à chaque clic sur le bouton moins, on appelle la fonction enlève et on crée un évènement qui permettra d'actualiser le prix total affiché
        qMoins.addEventListener('click', function (){
            enleve();
            let updatePrice = new Event('updatePanier', {bubbles: false})
            document.dispatchEvent(updatePrice);
        });
        //à chaque clic sur le bouton plus, on appelle la fonction ajoute et on crée un évènement qui permettra d'actualiser le prix total affiché
        qPlus.addEventListener('click', function (){
            ajoute();
            let updatePrice = new Event('updatePanier', {bubbles: false})
            document.dispatchEvent(updatePrice);
        }); 
        //suppression des éléments (bouton corbeille)
        produitCorbeille.addEventListener('click', function(){
            panierParse.splice(i,1);
            localStorage.setItem('panier', JSON.stringify(panierParse));
            panier.removeChild(produitTotal);
            let updatePrice = new Event('updatePanier', {bubbles: false})
            document.dispatchEvent(updatePrice);
            document.location.reload();
        });
        
        //Gestion de la décrémentation des quantités pour chaque produit 
        function enleve(){
            //Si la quatitié est suppérieure à 1, alors la fonction enlève 1 au compteur et actualise le panier
            if (qEgal.value >1){
                qEgal.value = parseInt(qEgal.value -1);
                panierParse[i].qty = qEgal.value;
                localStorage.setItem('panier', JSON.stringify(panierParse));
            //Si la quantité est égale à 1, alors on supprime l'article du panier et la ligne produit dans le browser. 
            }else if (qEgal.value ==1){
                panierParse.splice(i,1);
                panier.removeChild(produitTotal);
                localStorage.setItem('panier', JSON.stringify(panierParse));
                document.location.reload();
            //Si la quantité est égale à 10, on supprime la bulle info sur la quantité max
            }else if(qEgal.value >=10){
                panier.removeChild(infoBulle);
            }
        }//Gestion de l'incrémentation des quantités pour chaque produit
        function ajoute(){
            //Si la quantité est inférieur à 10, alors on ajoute 1 au compteur et on actualise le panier. 
            if (qEgal.value <10){
                qEgal.value = parseInt(qEgal.value) +1;
                panierParse[i].qty = qEgal.value;
                localStorage.setItem('panier', JSON.stringify(panierParse));
            //Si la quanité est égale à 10 alors on garde la valeur 10, on sauvegarde le panier et on ajoute la bulle de quantié max. 
            }else {
                qEgal.value = 10;
                panierParse[i].qty = qEgal.value;
                localStorage.setItem('panier', JSON.stringify(panierParse));
                panier.appendChild(infoBulle);
            }
        }
    }    
}











    

 

