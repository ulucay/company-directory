const url = 'https://randomuser.me/api/?results=12';
const gallery = document.querySelector('#gallery');
const card = document.querySelectorAll('.card');

fetch(url)
    .then(res => res.json())
    .then(data =>{
        const people = data.results;
        generatePeople(people);
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
                <p class="card-text cap">${person.location.city}, ${person.location.state}</p>
            </div>
        </div>
        `).join('');

        gallery.innerHTML = people;
}


card.addEventListener("change", "click", (e) => console.log(e.target));

