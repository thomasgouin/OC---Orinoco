/* Validation du formulaire de contact
    => création d'une validation RegEx pour chaque champ de formulaire
    => création d'une fonction globale permettant l'envoi du formulaire
*/

const formulaire = document.forms['formulaireDeContact'];
const email = document.forms['formulaireDeContact']['email'];
const nom = document.forms['formulaireDeContact']['nom'];
const prenom = document.forms['formulaireDeContact']['prenom'];
const adresse = document.forms['formulaireDeContact']['adresse'];
const ville = document.forms['formulaireDeContact']['ville'];
const validation = document.forms['formulaireDeContact']['validation'];



validation.addEventListener("click", (e)=>{

    //Vérifier que la commande n'est pas nulle

    if (aPayer === 0){
        alert('Commandez au moins un produit')
        e.preventDefault();
    }else{
        let nomValide = /^[A-Za-zéèïîÉÈÏÎ][a-zéèïùçïî]+([-'\s][a-zA-ZéèïîÉÈÏÎ][a-zéèïùçïî]+)?$/;
        if(nom.value ==""){
            e.preventDefault();
            document.getElementById('erreurNom').textContent='Quel est ton nom ?';
            document.getElementById('erreurNom').style.color = "red";
        }else if(nomValide.test(nom.value) == false){
            e.preventDefault();
            document.getElementById('erreurNom').textContent='Aïe, il semblerait que ton nom soit un peu compliqué...';
            document.getElementById('erreurNom').style.color = "orange";
        }
        let prenomValide = /^[A-Za-zéèïîÉÈÏÎ][a-zéèïùçïî]+([-'\s][a-zA-ZéèïîÉÈÏÎ][a-zéèïùçïî]+)?$/;
        if(prenom.value ==""){
            e.preventDefault();
            document.getElementById('erreurPrenom').textContent='Quel est ton prénom ?';
            document.getElementById('erreurPrenom').style.color = "red";
        }else if(prenomValide.test(prenom.value) == false){
            e.preventDefault();
            document.getElementById('erreurPrenom').textContent='Aïe, il semblerait que ton prénom soit un peu compliqué...';
            document.getElementById('erreurPrenom').style.color = "orange";
        }

        let emailValide = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(email.value ==""){
            e.preventDefault();
            document.getElementById('erreurEmail').textContent='Indique nous ton e-mail';
            document.getElementById('erreurEmail').style.color = "red";
        }else if(emailValide.test(email.value) == false){
            e.preventDefault();
            document.getElementById('erreurEmail').textContent='Mhhh tu peux vérifier ton email s\'il te plait ?';
            document.getElementById('erreurEmail').style.color = "orange";
        };


        if(adresse.value ==""){
            e.preventDefault();
            document.getElementById('erreurAdresse').textContent='Quelle est ton adresse ?';
            document.getElementById('erreurAdresse').style.color = "red";
        }

        let villeValide =  /\d{2}[ ]?\d{3}/
        if(ville.value ==""){
            e.preventDefault();
            document.getElementById('erreurVille').textContent='Dans quelle ville habites-tu ?';
            document.getElementById('erreurVille').style.color = "red";
        }else if(villeValide.test(ville.value) == false){
            e.preventDefault();
            document.getElementById('erreurVille').textContent='Tu es sur(e) d\'avoir mis 5 chiffres ?;)';
            document.getElementById('erreurVille').style.color = "orange";
        };
        
        
    }
});



