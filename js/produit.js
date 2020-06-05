const myUrl = new URL(window.location.href);

let appareil = {
    name : myUrl.searchParams.get("name"),
    _id : myUrl.searchParams.get("id"),
    description : myUrl.searchParams.get("description"),
    image : myUrl.searchParams.get("image"),
    lenses : myUrl.searchParams.get("lenses"),
    price :  myUrl.searchParams.get("price"),
}

document.getElementById('name').textContent = appareil.name;
document.getElementById('description').textContent = appareil.description;
document.getElementById('price').textContent = Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(appareil.price/100);
document.getElementById('image').setAttribute("src", appareil.image);

const select = document.createElement('select');select.classList.add('lentille');select.setAttribute('id', 'lentille');
const divSelecteur = document.getElementById('selecteur'); 
const option = document.createElement('option');option.textContent = appareil.lenses;

select.appendChild(option);
divSelecteur.appendChild(select);


const button = document.getElementById('button');


button.onclick = function () {
    let appareilJSONString = JSON.stringify(appareil);
    localStorage.setItem("appareil", appareilJSONString);
    console.log(localStorage);
}

