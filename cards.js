const IMAGE_URL = "https://placehold.co/200";
const container = document.querySelector(".container");
const listBands = document.querySelector(".bands");

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

function createCard(user_name, description, age, id, bands) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
            <div class = "card-img-container">
            <img src="${IMAGE_URL}" alt="${user_name}">
            </div>
            <div class="card">
                <h3 class="card-title">${user_name}</h3>
                <p>${age}</p>
                <p>${description}</p>
            </div>
            <li>${bands}</li>
    `;
    
    container.appendChild(card);
    return card;
    
}
//createCard();

function render () {
    users.forEach(user => {
        container.appendChild(createCard(
            user.user_name,
            user.age,
            user.description,
            user.id,
        )
    )
    });
    users.fav_music.bands.forEach(band => {
        const li = document.createElement('li');
        li.textContent = band;
        listBands.appendChild();
    })
}

render();