class Carte {

    constructor(lenses, _id, name, price, description, imageUrl){
        this.lenses = lenses,
        this._id = _id, 
        this.name = name,
        this.price = price,
        this.description = description,
        this.imageUrl = imageUrl
    }

    affichageCarte(){

        const wrapper = document.getElementById('wrapper');
    
        const carte = document.createElement('article');carte.classList.add('carte');carte.setAttribute("id", this._id);
        const carteImage = document.createElement('img');carteImage.classList.add('carte__image');carteImage.setAttribute("src", this.imageUrl);
        const cartePrix = document.createElement('div');cartePrix.classList.add('carte__prix');cartePrix.textContent = Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(this.price/100)
        const carteDescription = document.createElement('div');carteDescription.classList.add('carte__description');
        const carteDescriptionHover = document.createElement('div');carteDescriptionHover.classList.add('carte__description-hover');carteDescriptionHover.textContent = this.description;
        const carteTitre = document.createElement('h2'); carteTitre.classList.add('carte__description__titre');carteTitre.textContent = this.name;
        const carteLenses = document.createElement('ul'); carteLenses.classList.add('carte__description__option');
        
        this.lenses.forEach(lense => {
            const carteLensesItems = document.createElement('li');carteLensesItems.textContent = lense; 
            carteLenses.appendChild(carteLensesItems); 
        });
    
        wrapper.appendChild(carte);
        carte.appendChild(carteImage);carte.appendChild(cartePrix);carte.appendChild(carteDescription);
        carteDescription.appendChild(carteTitre);
        carteDescription.appendChild(carteLenses);
        carte.appendChild(carteDescriptionHover);
    
        carte.addEventListener('click', function(){
            window.location.href = "produit.html";
        })
    };
}






/*
const blocCarteAppareil = data.map(appareil =>{
    let afficheCart = `<a href="./produit.html?${appareil._id}">
                            <article class="carte">
                                <img class="carte__image" src="${appareil.imageUrl}" alt=""></img>
                                <div class="carte__prix">${Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(appareil.price/100)}</div>
                                <div class="carte__description">
                                    <h2 class="carte__description__titre">${appareil.name}</h2>
                                    <ul class="carte__description__option">`
                                        appareil.lenses.forEach(lense => {
                                            afficheCart +=`<li>${lense}</li>`
                                        })
                                    afficheCart+=`</ul>
                                </div>
                                <div class="carte__description-hover">${appareil.description}</div>
                            </article>
                        </a>`;
    return afficheCart;
})
        
document.getElementById('wrapper').innerHTML = blocCarteAppareil;
*/