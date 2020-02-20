const url = 'https://randomuser.me/api/?results=12';
const gallery = document.querySelector('#gallery');
const modalContainer = document.querySelector('.modal-container');
let peopleArray;

//Fetchs data from API
fetch(url)
    .then(res => res.json())
    .then(data =>{
        peopleArray = data.results;
        generatePeople(peopleArray);
        generateModal(peopleArray);
        
    })


//Generates people and inserts into HTML
function generatePeople(data){
        //Creates card template according to fetched data, and stores inside a variable
        const people = data.map( (person, index) => `
        <div class="card" id="${index}">
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

        //Stores card elements from HTML
        let cards = document.querySelectorAll('.card');
        
        //If any cards clicked, then show the corresponding modal on the screen
        cards.forEach( card => card.addEventListener('click', e => {
            const cardId = e.currentTarget.id; // Get clicked card item's id
            popUpModal(cardId);
        }));
}

//Generates modals and insert into HTML
function generateModal(data){
    //Creates modal template according to fetched data, and stores inside a variable
    const modal = data.map( (person, index) => `
        <div class="modal" id="${index}">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src="${person.picture.large}" alt="profile picture">
                <h3 id="name" class="modal-name cap">name</h3>
                <p class="modal-text">${person.email}</p>
                <p class="modal-text cap">${person.location.city}</p>
                <hr>
                <p class="modal-text">${person.phone}</p>
                <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                <p class="modal-text">Birthday: 10/21/2015</p>
            </div>
            <div class="modal-btn-container">
                <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                <button type="button" id="modal-next" class="modal-next btn">Next</button>
            </div>
        </div>
    `).join("")

    modalContainer.innerHTML = modal;
}

//Pops up clicked card as a modal
function popUpModal(cardId){
    let modals = document.querySelectorAll('.modal'); //Stores all modals
    let closeButton = document.querySelectorAll('#modal-close-btn'); //Stores all close buttons

    //If card is clicked, pop up the correct model by checking the id
    modals.forEach((modal) => {
        if(modal.id == cardId){
            modalContainer.style.display = 'block';
        }else{
            modal.style.display = 'none';
        }
    });

    //Adds features to buttons when user clicks, it modifys css of modal-container and modals
    closeButton.forEach((button) => button.addEventListener('click', () => {
        modalContainer.style.display = 'none';
        modals.forEach((modal) =>{
            modal.style.display = 'block'
        })
    }));
}






