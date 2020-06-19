/* Validation du formulaire de contact
    => création d'une validation RegEx pour chaque champ de formulaire
    => création d'une fonction globale permettant l'envoi du formulaire
*/

const formulaire = document.forms['formulaireDeContact'];
const nom = document.forms['formulaireDeContact']['lastName'];
const prenom = document.forms['formulaireDeContact']['firstName'];
const email = document.forms['formulaireDeContact']['email'];
const adresse = document.forms['formulaireDeContact']['address'];
const ville = document.forms['formulaireDeContact']['city'];
const validation = document.forms['formulaireDeContact']['payer'];
const supprimer = document.forms['formulaireDeContact']['reset'];
let prixPanier = document.getElementById('prixTotal');



formulaire.addEventListener('submit', async (e)=>{
    e.preventDefault();
    let contact = {
        firstName: nom.value,
        lastName: prenom.value,
        address: adresse.value,
        city: ville.value,
        email: email.value,
    }
    let products = [];
    JSON.parse(localStorage.getItem('panier'))
        for(let i = 0; i<panierParse.length; i++){
        products.push(panierParse[i].id);
    }

    let donneesServeur = {
        contact,
        products
    } 
    const response = await postData('POST','http://localhost:3000/api/cameras/order', donneesServeur);
    window.location = `confirmation.html?id=${response.orderId}&firstName=${prenom.value}&lastName=${nom.value}&totalPrice=${prixPanier.innerText}`
    console.log(response);
});       

const postData = async(method, url, data) => {
    const response = await fetch(url,{
        headers: {'Content-Type' : 'application/json'},
        method,
        body: JSON.stringify(data)

    })
    return await response.json();
}
  







    




