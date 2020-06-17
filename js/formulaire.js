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



const checkValidity = (input) => {
    input.addEventListener('invalid', (e) => {
        e.preventDefault()
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
sendData();

function sendData(){
    validation.addEventListener('click', (e)=>{
        if(parseInt(prixPanier.innerText) ==0){
            alert('Veuillez sélectionner au moins un produit');
        }else{
            Array.from(formulaire).forEach(checkValidity);
        }
    })
}

formulaire.addEventListener('submit', (e)=> {
   e.preventDefault();
   
   console.log(panierParse);
})






    




