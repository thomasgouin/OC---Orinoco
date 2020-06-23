/*
    Afin d'aider les utilisateurs à bien remplir le champ de données, nous indiquons un message personnalisé lorsque ce dernier quitte le champ
    Nous avons trois étapes : 
        - le champs est manquant :"Merci de renseigner "valeur demandée" ".
        - le champs répond à toutes les exigences et est déclaré valide.
        - le champs n'est pas valide (PatternMismatch notamment) et on demande à l'internaute de vérifier ses informations. 

*/

const verifNom = nom.addEventListener('blur', (e) => {
    e.preventDefault();
    if (e.target.validity.valueMissing) {
        e.target.classList.add('formulaire__error')
        e.target.previousElementSibling.textContent = "Merci de renseigner votre nom";
        false;
    }else if (e.target.validity.valid) {
        e.target.classList.remove('formulaire__error')
        e.target.previousElementSibling.textContent = "";
        true;
    } else{
        e.target.classList.add('formulaire__error')
        e.target.previousElementSibling.textContent = "Veuillez vérifier vos informations";
        false;
    }
});
const verifPrenom = prenom.addEventListener('blur', (e) => {
    e.preventDefault();
    if (e.target.validity.valueMissing) {
        e.target.classList.add('formulaire__error')
        e.target.previousElementSibling.textContent = "Merci de renseigner votre prénom";
    }else if (e.target.validity.valid) {
        e.target.classList.remove('formulaire__error')
        e.target.previousElementSibling.textContent = "";
        true;
    } else{
        e.target.classList.add('formulaire__error')
        e.target.previousElementSibling.textContent = "Veuillez vérifier vos informations";
        false;
    
    }
});
const verifEmail = email.addEventListener('blur', (e) => {
    e.preventDefault();
    if (e.target.validity.valueMissing) {
        e.target.classList.add('formulaire__error')
        e.target.previousElementSibling.textContent = "Nous avons besoin d'un email valide";
    }else if (e.target.validity.valid) {
        e.target.classList.remove('formulaire__error')
        e.target.previousElementSibling.textContent = "";
    } else{
        e.target.classList.add('formulaire__error')
        e.target.previousElementSibling.textContent = "Veuillez vérifier vos informations";
        false;
    }
});
const verifAdresse = adresse.addEventListener('blur', (e) => {
    e.preventDefault();
    if (e.target.validity.valueMissing) {
        e.target.classList.add('formulaire__error')
        e.target.previousElementSibling.textContent = "Merci de renseigner votre adresse";
    }else if (e.target.validity.valid) {
        e.target.classList.remove('formulaire__error')
        e.target.previousElementSibling.textContent = "";
        true;
    } else{
        e.target.classList.add('formulaire__error')
        e.target.previousElementSibling.textContent = "Veuillez vérifier vos informations";
        false;
    }
});
const verifVille = ville.addEventListener('blur', (e) => {
    e.preventDefault();
    if (e.target.validity.valueMissing) {
        e.target.classList.add('formulaire__error')
        e.target.previousElementSibling.textContent = "Merci de nous indiquer votre ville";
    }else if (e.target.validity.valid) {
        e.target.classList.remove('formulaire__error')
        e.target.previousElementSibling.textContent = "";
        true;
    } else{
        e.target.classList.add('formulaire__error')
        e.target.previousElementSibling.textContent = `Veuillez vérifier vos informations : ex"33000"`;
        false;
    }
});