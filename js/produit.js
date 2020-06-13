/*  Récupère les informations dans l'URL envoyée par la page index (searchParams)
    Crée un objet à partir des informations
    Insère les information dans le DOM de la page produit.html

    A la validation du bouton Acheter, enregistre les informations du produit dans le localStorage
*/ 



const myUrl = new URL(window.location.href);

const fetchApi = async function () {
    const response = await fetch ('http://localhost:3000/api/cameras/'+ myUrl.searchParams.get("id"))
    const jsonData = await response.json();

    let appareil = jsonData;

    document.getElementById('name').textContent = appareil.name;
    document.getElementById('description').textContent = appareil.description;
    document.getElementById('price').textContent = Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(appareil.price/100);
    document.getElementById('image').setAttribute("src", appareil.imageUrl)

    let select = `<select><option value="">Choisissez votre lentille</option>`;

    appareil.lenses.forEach(element => {
        select += `<option>${element}</option>`
    })
        select += `</select>`;
    document.getElementById('selecteur').innerHTML = select; 

    const button = document.getElementById('button');
   // const panierExistant = JSON.parse(localStorage.getItem(""));

    button.onclick = function (e) {
        e.preventDefault();
        
        let ajoutAppareil = {
            id: appareil._id,
            image: appareil.imageUrl,
            name: appareil.name,
            description: appareil.description,
            price: appareil.price,
            qty: 1
        }
        
        let panierParse = JSON.parse(localStorage.getItem('panier'));
        console.log(panierParse);


            //let articleExistant = panierParse.find(element => element.id === item.id);
        if(panierParse!==null){
            panierParse.push(ajoutAppareil);
            let panierString = JSON.stringify(panierParse);
            localStorage.setItem('panier', panierString); 
        }else{
            let panier = [];
            panier.push(ajoutAppareil);
            let panierString = JSON.stringify(panier);
            localStorage.setItem('panier', panierString); 
        }
    };
} 
fetchApi();

