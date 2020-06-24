//Création de la requete fetch asynchrone, on attend la réponse puis on appelle le JSON de la réponse.
const myUrl = new URL(window.location.href);
const fetchApi = async function () {
    const response = await fetch ('https://oc-p5-api.herokuapp.com/api/cameras/'+ myUrl.searchParams.get("id"))
    const jsonData = await response.json();

    //On sotcke les éléments du fichier JSON dans une variable.
    let appareil = jsonData;
    // On sélectionne les éléments qui afficheront les résultats donnés par le fichier JSON, puis on y implémente les valeurs voulues
    document.getElementById('name').textContent = appareil.name;
    document.getElementById('description').textContent = appareil.description;
    document.getElementById('price').textContent = Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(appareil.price/100);
    document.getElementById('image-container').innerHTML = `<img id="image" src="${appareil.imageUrl}" class="page-produit__image" alt="image de l'appareil photo selectionné">`;

    // Pour les options, nous optons pour du innerHTML avec un complétion complétion automatique générée par la méthode forEach.
    let select = `<select><option value="">Choisissez votre lentille</option>`;

    appareil.lenses.forEach(element => {
        select += `<option>${element}</option>`
    })
        select += `</select>`;
    document.getElementById('selecteur').innerHTML = select; 

    // On séléctionne le bouton qui sera l'élément déclencheur de l'ajout au panier
    const button = document.getElementById('button');
    button.onclick = function () {
        //On crée une variable représentant l'objet apporté par la méthode fetch et on y ajoute la quantité
        let ajoutAppareil = {
            name: appareil.name,
            id: appareil._id,
            image: appareil.imageUrl,
            description: appareil.description,
            price: appareil.price,
            qty: 1
        }
        // On crée la variable qui permet d'afficher le local storage sous forme d'objet JSON
        let panierParse = JSON.parse(localStorage.getItem('panier'));

        //Si l'objet représentant le local storage existe déjà, alors nous ajoutons les valeurs de l'objet appareil
        if(panierParse!==null){
            ajoutPanier(ajoutAppareil); 
        }else{
        // si il n'existe pas, nous créons un tableau qui représentera notre panier de produits. 
            let panier = [];
            //Puis nous ajoutons les données du produit de la page dans le tableau
            panier.push(ajoutAppareil);
            //Enfin, nous transformons notre tableau en string avant de l'envoyer dans le local storage (car ce dernier n'accepte que des strings)
            let panierString = JSON.stringify(panier);
            localStorage.setItem('panier', panierString); 
        }

        //Détail de la fonction utilisée lorsque le panier existe déjà.
        function ajoutPanier(item){
            //Nous créons une variable qui défini si le produit de la page se trouve déjà dans le tableau panier.
            let articleExistant = panierParse.find(element => element.id === item.id);
            //S'il s'y trouve déjà, alors on augmente la quantité de 1, et on actualise le localStorage
            if(articleExistant !== undefined){
                articleExistant.qty++;
                let panierString = JSON.stringify(panierParse);
                localStorage.setItem('panier', panierString)
            //S'il ne s'y trouve pas, alors on ajoute les éléments de l'article en question dans le tableau des prodtuis et on actualise le localStorage
            }else{
                panierParse.push(ajoutAppareil);
                let panierString = JSON.stringify(panierParse);
                localStorage.setItem('panier', panierString); 
            }
        }
    };
} 
//On appelle notre fonction
fetchApi();

