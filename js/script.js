const url = 'https://randomuser.me/api/?results=12';
const gallery = document.querySelector('#gallery');
const modalContainer = document.querySelector('.modal-container');
let peopleArray;

fetch(url)
    .then(res => res.json())
    .then(data =>{
        peopleArray = data.results;
        generatePeople(peopleArray);
        generateModal(peopleArray);
        
    })



//HELPER FUNCTIONS
function generatePeople(data){
       
        const people = data.map( person => `
        <div class="card">
            <div class="card-img-container">
                <img class="card-img" src="${person.picture.large}" alt="profile picture">
            </div>
            <div class="card-info-container">
                <h3 id="name" class="card-name cap">${person.name.first} ${person.name.last}</h3>
                <p class="card-text">${person.email}</p>
                <p class="card-text cap">${person.location.city}, ${person.location.country}</p>
            </div>
        </div>
        `).join('');

        gallery.innerHTML = people;

        let cards = document.querySelectorAll('.card');
        
        cards.forEach( card => card.addEventListener('click', e => console.log(e.target)))
}

function generateModal(data){
    const modal = data.map( person => `
    <div class="modal-container">
        <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src="${person.picture.medium}" alt="profile picture">
                <h3 id="name" class="modal-name cap">name</h3>
                <p class="modal-text">${person.email}</p>
                <p class="modal-text cap">${person.location.city}</p>
                <hr>
                <p class="modal-text">${person.phone}</p>
                <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                <p class="modal-text">Birthday: 10/21/2015</p>
            </div>
        </div>

        <div class="modal-btn-container">
            <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
            <button type="button" id="modal-next" class="modal-next btn">Next</button>
        </div>
    </div>

    `).join('')

    modalContainer.innerHTML = modal;
}




