const fetchApi = async function () {
    const response = await fetch ('http://localhost:3000/api/cameras')
    const jsonData = await response.json();

    displayAppareil(jsonData);
} 
function displayAppareil(data) {

    data.forEach(element => {
        const blocCarteAppareil = new Carte(element.lenses, element._id, element.name, element.price, element.description, element.imageUrl);
        console.log(blocCarteAppareil);
        blocCarteAppareil.affichageCarte();     
    });      
}
    


/* 1ere solution innerHTML
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

    document.querySelector('#wraper').innerHTML = blocAppareil;
*/

fetchApi();
