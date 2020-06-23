
//On récupère l'ensemble des éléments du formulaire
const formulaire = document.forms['formulaireDeContact'];
const nom = document.forms['formulaireDeContact']['lastName'];
const prenom = document.forms['formulaireDeContact']['firstName'];
const email = document.forms['formulaireDeContact']['email'];
const adresse = document.forms['formulaireDeContact']['address'];
const ville = document.forms['formulaireDeContact']['city'];
let prixPanier = document.getElementById('prixTotal');

//On paramètre la requête fetch en spécifiant que l'on envoit des données sous forme JSON
const postData = async(method, url, data) => {
    const response = await fetch(url,{
        headers: {'Content-Type' : 'application/json'},
        method,
        body: JSON.stringify(data)

    })
    return await response.json();
}

//On vérifie que le panier n'est pas vide lors de la soumission du formulaire 

//Si le prix total est différent de 0 alors au clic sur le bouton submit nous demandons : 
if(parseInt(prixTotal.innerText) !== 0){
    formulaire.addEventListener('submit', async (e)=>{
        //d'empécher le fonctionnement traditionnel d'un formulaire
        e.preventDefault();
        // nous créons l'objet à envoyer dans la requête POST en trois étapes : 
        //l'objet contact avec l'ensemble des valeurs saisies dans le formulaire
        let contact = {
            firstName: nom.value,
            lastName: prenom.value,
            address: adresse.value,
            city: ville.value,
            email: email.value,
        }
        //le tableau des produits qui sont dans le panier au moment du clic
        let products = [];
        JSON.parse(localStorage.getItem('panier'))
            for(let i = 0; i<panierParse.length; i++){
            products.push(panierParse[i].id);
        }
        //L'objet total qui sera envoyé et qui contient les deux variables précédentes. 
        let donneesServeur = {
            contact,
            products
        } 
        // Enfin nous appelons notre méthode postData avec l'ensemble des éléments nécessaires pour recevoir ensuite la réponse voulue avec l'ID de commande. 
        const response = await postData('POST','https://oc-p5-api.herokuapp.com/api/cameras/order', donneesServeur);
        //Nous renvoyons l'utilisateur vers la page de confirmation avec l'ensemble des éléments de la réponse et du formulaire dans l'URL. 
        window.location = `confirmation.html?id=${response.orderId}&firstName=${prenom.value}&lastName=${nom.value}&totalPrice=${prixPanier.innerText}`
    });
//Si le prix total est à 0 nous empéchons l'envoi du formulaire avec une popup personnalisée expliquant l'erreur à l'utilisateur. 
}else{
    formulaire.addEventListener('submit', (e)=>{
        Swal.fire({
            title: "Pas de bras, pas de chocolat",
            icon: 'info',
            text: "Veuillez sélectionner au moins un article",
        });
        e.preventDefault();
    });    
}       

  







    




