const fetchApi = async function () {
    const response = await fetch ('http://localhost:3000/api/cameras')
    const jsonData = await response.json();

    displayAppareil(jsonData);
} 
function displayAppareil(data) {

    data.forEach(element => {
        const blocCarteAppareil = new Carte(element.lenses, element._id, element.name, element.price, element.description, element.imageUrl);
        blocCarteAppareil.affichageCarte();     
    });      
}
    
fetchApi();
