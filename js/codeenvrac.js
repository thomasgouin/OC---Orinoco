const button = document.getElementById('button');
    button.addEventListener('click', (e)=>{
        e.preventDefault();
        const ajoutAppareil = {
            id: appareil._id,
            image: appareil.imageUrl,
            name: appareil.name,
            description: appareil.description,
            price: appareil.price,
            qty: 1
        }
        function ajouterElement(){
            let panier = localStorage.getItem('camera');
    
            if (panier){
                let cart = JSON.parse(panier);
                let articleExistant = panier.find(element => element.id === item)
                cart.push(ajoutAppareil);
                localStorage.setItem('camera', JSON.stringify(cart));
            }else{
                let cart = [];
                cart.push(ajoutAppareil);
                localStorage.setItem('camera', JSON.stringify(cart));
            }
        }ajouterElement()
    })


    let appareilJSONString = JSON.stringify(appareil);
        localStorage.setItem('appareil', appareilJSONString);

        const prixTotal = document.getElementById('prixTotal');
    prixTotal.innerText = Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(prixAppareil*(qEgal.value));


    validation.addEventListener('submit', (e) =>{
        e.preventDefault();
        if (parseInt(prixPanier.innerText) == 0){
            alert('Veuillez enregistrer au moin un article dans le panier');
        }else{
            verifForm();
        }
    })
    
    
    function verifForm(){
        verifNom;
        verifPrenom;
        verifEmail;
        verifAdresse;
        verifVille;
    }
    
    
    
    const verifNom = nom.addEventListener('blur', (e) => {
        e.preventDefault();
        if (e.target.validity.valueMissing) {
            e.target.classList.add('formulaire__error')
            e.target.previousElementSibling.textContent = "Merci de renseigner votre nom";
        }else if (e.target.validity.valid) {
            e.target.classList.remove('formulaire__error')
            e.target.previousElementSibling.textContent = "";
        } else{
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
        } else{
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
        } else{
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
        } else{
            false;
        }
    });