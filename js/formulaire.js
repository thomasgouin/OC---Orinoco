const formulaire = document.forms['formulaireDeContact'];
const email = document.forms['formulaireDeContact']['email'];
const nom = document.forms['formulaireDeContact']['nom'];
const adresse = document.forms['formulaireDeContact']['adresse'];
const telephone = document.forms['formulaireDeContact']['telephone'];

console.log(nom);
console.log(adresse);
console.log(telephone);
console.log(email);

function surlignError(champ, erreur) {
    if (erreur){
        champ.style.backgroundColor = "#"; 
    }else{
        champ.style.backgroundColor = "";
    }
    
}

function verifNom (champ) {
    const regNom = /[A-Za-z\-]+\s[A-Za-z/-]+/;
    if (!regNom.test(champ.value)){
        surlignError(champ, true);
        return false;
    }else {
        surlignError(champ, false);
        return true;
    }
}

function verifEmail(champ) {
    const regEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regEmail.test(champ.value)){
        surlignError(champ, true);
        return false;
    }else {
        surlignError(champ, false);
        return true;
    }
}

function verifTel(champ) {
    const regTel= /^0\d{9}$/;
    if (!regTel.test(champ.value)){
        surlignError(champ, true);
        return false;
    }else {
        surlignError(champ, false);
        return true;
    }
}

function verifAdd(champ) {
    const regAdd= /^[a-zA-Z]{1,50}\W?\s[0-9]{5}\s[a-zA-Z]{3,50}|^[0-9]{1,3}\s[a-zA-Z]{2,9}\s[a-zA-Z\s]{2,20}\W?\s[0-9]{5}\s[a-zA-Z\s]{2,20}/;
    if (!regAdd.test(champ.value)){
        surlignError(champ, true);
        return false;
    }else {
        surlignError(champ, false);
        return true;
    }
}
