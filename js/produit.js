const myUrl = new URL(window.location.href);

let name = myUrl.searchParams.get("name");
let _id = myUrl.searchParams.get("id");
let description = myUrl.searchParams.get("description");
let image = myUrl.searchParams.get("image");
let lenses = myUrl.searchParams.get("lenses");
let price = myUrl.searchParams.get("price");

document.getElementById('name').textContent = name;
document.getElementById('description').textContent = description;
document.getElementById('price').textContent = Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price/100);
document.getElementById('image').setAttribute("src", image);

const select = document.createElement('select');select.classList.add('lentille');select.setAttribute('id', 'lentille');
const divSelecteur = document.getElementById('selecteur'); 
const option = document.createElement('option');option.textContent = lenses;

select.appendChild(option);
divSelecteur.appendChild(select);



