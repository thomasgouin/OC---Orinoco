/*  Récupère les informations dans l'URL envoyée par la page index (searchParams)
    Crée un objet à partir des informations
    Insère les information dans le DOM de la page produit.html

    A la validation du bouton Acheter, enregistre les informations du produit dans le localStorage
*/ 



const myUrl = new URL(window.location.href);

let appareil = {
    name : myUrl.searchParams.get("name"),
    _id : myUrl.searchParams.get("id"),
    description : myUrl.searchParams.get("description"),
    image : myUrl.searchParams.get("image"),
    lenses : myUrl.searchParams.get("lenses"),
    price :  myUrl.searchParams.get("price"),
}

document.getElementById('name').textContent = appareil.name;
document.getElementById('description').textContent = appareil.description;
document.getElementById('price').textContent = Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(appareil.price/100);
document.getElementById('image').setAttribute("src", appareil.image);

// Gestion de la liste déroulante pour les options de lentilles 
 // /!\ NON FONCTIONNEL
const select = document.createElement('select');select.classList.add('lentille');select.setAttribute('id', 'lentille');
const divSelecteur = document.getElementById('selecteur'); 
const option = document.createElement('option');option.textContent = appareil.lenses;

select.appendChild(option);
divSelecteur.appendChild(select);


// Au clic sur le bouton, envoie les information dans le localStorage
const button = document.getElementById('button');
button.onclick = function () {
    let appareilJSONString = JSON.stringify(appareil);
    localStorage.setItem("appareil", appareilJSONString);
}

