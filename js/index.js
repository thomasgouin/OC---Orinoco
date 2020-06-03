const fetchApi = async function () {
    const response = await fetch ('http://localhost:3000/api/cameras')
    const jsonData = await response.json();

    displayAppareil(jsonData);
    
} 
function displayAppareil(data) {

    class Carte {
        constructor(lenses, _id, name, price, description, imageUrl){
            this.lenses = lenses,
            this._id = _id,
            this.name = name,
            this.prices = Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price/100),
            this.description = description, 
            this.imageUrl = imageUrl

        }
    }
    for( i in data){
        const Appareil = new Carte(
            data[i].lenses,
            data[i]._id,
            data[i].name,
            data[i].price,
            data[i].descripton,
            data[i].imageUrl,
        );
        
    }
    


/* 1ere solution innerHTML
    console.log(data);
    const blocAppareil = data.map(appareil =>{
        return `<a href="./produit.html" title="Voir votre produit">
                    <article class="carte">
                        <img class="carte__image" src="${appareil.imageUrl}" alt="${appareil.description}"></img>
                        <div class="carte__prix">${Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(appareil.price/100)}</div>
                        <div class="carte__description">
                            <h2 class="carte__description__titre">${appareil.name}</h2>
                            <ul class="carte__description__option">
                                <li>${appareil.lenses[0]}</li>
                                <li>${appareil.lenses[1]}</li>
                                <li>${appareil.lenses[2]}</li>
                            </ul>
                        </div>
                    </article>
                </a>`;
    })

    document.querySelector('#wraper').innerHTML = blocAppareil;
*/
}

fetchApi();
