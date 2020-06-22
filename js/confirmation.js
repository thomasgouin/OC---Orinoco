
//Sélection du bloc dans lequel sera affiché le texte de confirmation
const blocConfirmation = document.getElementById('confirmation');

//On récupère l'URL dans une variable pour ensuite isoler les éléments de cette dernière. 
const myUrl = new URL(window.location.href);
let firstName = myUrl.searchParams.get("firstName");
let lastName = myUrl.searchParams.get("lastName");
let id = myUrl.searchParams.get("id");
let totalPrice = myUrl.searchParams.get("totalPrice");

// On ajoute le texte de remerciement et les différentes valeurs de la commande grâce au inner HTML. 
blocConfirmation.innerHTML = `<p class="confirmation__titre">Merci pour votre confiance,</p>
<p class="confirmation__paragraphe">Cher <span id="confirmPrenom">${firstName}</span> <span id="confirmNom">${lastName}</span>, nous vous confirmons que votre commande de <span id="confirmPTotal">${totalPrice}</span>, est bien enregistrée. Vous recevrez un accusé de réception à l'adresse mail indiquée.</p>
<P class="confirmation__paragraphe">Pour suivre son acheminement, renseignez votre n° de commande : <span id="numCommande">${id}</span> lorsque vous contactez notre service après vente.</P>`

//On crée une fonction pour vider le panier. 
function clearCart(){
    let cartToClear = localStorage.getItem('panier');
    if (cartToClear != null) {
        localStorage.clear('panier');
    } 
}
clearCart();