const IMAGE_URL = "https://placehold.co/200";

const users = [
    {
        id: 1,
        user_name: 'User1',
        description: 'lorem ipsum',
        age: '46',
        fav_music: {
            bands: [
                'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    },
    {
        id: 2,
        user_name: 'User LastName',
        description: 'Lorem lorem lorem',
        age: '23',
        fav_music: {
            bands: [
                'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    }
];

//Selectores
const card = document.getElementsByClassName("card");
const cardImgContainer = document.getElementsByClassName("card-img-container");

//Crear elemento img
const imageElement = document.createElement("img");
imageElement.src = IMAGE_URL;
imageElement.alt = "User profile photo";

//Creamos elemento título, edad y descripción para card
const cardTitleElement = document.createElement("h3");
cardTitleElement.classList.add("card-title"); //Agrega una clase para dar estilo al elemento h3
const cardAgeElement = document.createElement("p");
const cardDescElement = document.createElement("p");

//Populate/Poblar
cardTitleElement.textContent = users.username;
cardAgeElement.textContent = users.age;
cardDescElement.textContent = users.description;

//Renderizar
cardImgContainer.appendChild(imageElement);
card.append(cardTitleElement, cardAgeElement, cardDescElement);