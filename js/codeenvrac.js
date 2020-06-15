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


