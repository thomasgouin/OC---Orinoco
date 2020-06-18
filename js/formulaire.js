/* Validation du formulaire de contact
    => création d'une validation RegEx pour chaque champ de formulaire
    => création d'une fonction globale permettant l'envoi du formulaire
*/

const formulaire = document.forms['formulaireDeContact'];
const nom = document.forms['formulaireDeContact']['nom'];
const prenom = document.forms['formulaireDeContact']['prenom'];
const email = document.forms['formulaireDeContact']['email'];
const adresse = document.forms['formulaireDeContact']['adresse'];
const ville = document.forms['formulaireDeContact']['ville'];
const validation = document.forms['formulaireDeContact']['payer'];
const supprimer = document.forms['formulaireDeContact']['reset'];
let prixPanier = document.getElementById('prixTotal');

function checkData(){
    validation.addEventListener('click', (e)=>{
        if(parseInt(prixPanier.innerText) ==0){
            alert('Veuillez sélectionner au moins un produit');
        }else{
            Array.from(formulaire).forEach(checkValidity);
        }
    })
}

formulaire.addEventListener('submit', async (e)=>{
    e.preventDefault();

    
    const dataOk = checkData();
    if (dataOk !== false){
        const response = await postData('POST','http://localhost:3000/api/cameras/order', donneesServeur);
        console.log(response);
    }
})

const postData = async(method, url, data) => {
    const response = await fetch(url,{
        headers: {'Content-Type' : 'application/json'},
        method,
        body: JSON.stringify(data)

    })
    return await response.json();
}


const checkValidity = (input) => {
    input.addEventListener('invalid', (e) => {
        if (!e.target.validity.valid) {
            e.target.classList.add('formulaire__error')
        }
    })
    input.addEventListener('input', (e) => {
        if (e.target.validity.valid) {
            e.target.classList.remove('formulaire__error')
        }
    })
}


let contact = {
    firstName: nom.value,
    lastName: prenom.value,
    address: adresse.value,
    city: ville.value,
    email: email.value,
}

let products = [];
for(let i = 0; i<panierParse.length; i++){
   products.push(panierParse[i].id);
}

let donneesServeur = {
    contact,
    products
}   







    




