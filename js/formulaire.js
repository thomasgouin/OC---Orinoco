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


const inputs = document.querySelectorAll('input');


const checkValidity = (input) =>{
    
    input.addEventListener('invalid',(e) =>{
        e.preventDefault()
        if(!e.target.validity.valid){
            e.target.parentElement.classList.add('formulaire__error');
            console.log(e.target.validity);
        }
    })
    input.addEventListener('input',(e) =>{
        e.preventDefault()
        if(e.target.validity.valid){
            e.target.parentElement.classList.remove('formulaire__error');
            console.log(e.target.validity);
        }
    })
};
let validationChamps = Array.from(inputs).forEach(checkValidity);




    




