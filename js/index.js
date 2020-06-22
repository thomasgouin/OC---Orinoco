/* Récupération des données depuis l'API 
    La méthode affichageCarte() est définie dans ClassCarteProduit.js
*/

const fetchApi = async function () {
    const response = await fetch ('https://oc-p5-api.herokuapp.com/api/cameras')
    const jsonData = await response.json();
    displayAppareil(jsonData);
} 
//On crée une fonction qui va créer une carte produit pour chaque élément renvoyé dans le JSON de l'API
function displayAppareil(data) {
    data.forEach(element => {
        const blocCarteAppareil = new Carte(element.lenses, element._id, element.name, element.price, element.description, element.imageUrl);
        blocCarteAppareil.affichageCarte();     
    });      
}
    
fetchApi();
