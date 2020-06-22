
   
    const verifForm = function verifForm(){
        if(verifNom == true && verifPrenom == true && verifEmail == true && verifAdresse ==true && verifVille == true ){
            true;
        }else{
            false;
        }
    }
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
            e.target.previousElementSibling.textContent = "Veuillez vérifier vos informations";
            false;
        }
    });