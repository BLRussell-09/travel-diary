console.log('yo')
const places = [
  {
    location: "Mount Olympus",
    images: "https://17447-presscdn-0-13-pagely.netdna-ssl.com/wp-content/uploads/2017/07/Mount-Olympus-e1500861345324.jpg",
    desc: "Olympus was notable in Greek mythology as the home of the Greek gods, on the Mytikas peak."
  },
  {
    location: "Space Mountain",
    images: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Magic_Kingdom_Space_Mountain.jpg",
    desc: "Olympus was notable in Greek mythology as the home of the Greek gods, on the Mytikas peak."
  },
  {
    location: "Atlantis",
    images: "https://www.atlantisbahamas.com/media/N_Homepage/Heros_8_28_17/RoyalTreatment_Hero9_7_17.jpg",
    desc: "Atlantis, is a lost city."
  },
  {
    location: "The Wall",
    images: "https://vignette.wikia.nocookie.net/gameofthrones/images/9/97/The_Wall_from_the_south.jpg/revision/latest?cb=20150323201042",
    desc: "The Wall is a colossal fortification which stretches for 100 leagues (300 miles) along the northern border of the Seven Kingdoms, defending the realm from the wildlings who live beyond."
  },
  {
    location: "Mount Doom",
    images: "https://upload.wikimedia.org/wikipedia/en/6/6d/Mount_Doom_%28Tolkien%29.jpg",
    desc: "Mount Doom, also known as Orodruin and Amon Amarth, was a volcano in Mordor where the One Ring was forged and finally destroyed. "
  },
  {
    location: "Salt Flats",
    images: "https://media.deseretdigital.com/file/4c14626423?type=jpeg&quality=55&c=15&a=4379240d",
    desc: "I have no idea how to get to this place"
  },
]

const rightNow = new Date();

const printToDom = (domString, divId) => {
  const printTo = document.getElementById(divId);
  printTo.innerHTML = domString;
};

const buildDomString = (locationArray) => {
  let domString = '';
  locationArray.forEach((location) => {
    domString += `<div class="card">`;
    domString +=  `<h1>${location.location}</h1>`;
    domString +=  `<img src="${location.images}" alt=""></br>`;
    domString +=  `<p class="description">${location.desc}</p>`;
    domString +=  `<textarea id="input" class="input"></textarea></br>`;
    domString +=  `<button class="card-button">Submit</button>`;
    domString += `</div>`;
  });
  printToDom(domString, 'location-cards');
}

buildDomString(places);
let outputter = document.getElementsByClassName("input")
let domArray = [];
const allTheButtons = document.getElementsByClassName('card-button')

for (let idx = 0; idx < allTheButtons.length; idx++){
  allTheButtons[idx].addEventListener('click', (e) => {
    let domString = '';
    domString += `<div class = "card">`;
    domString += `<h1>${places[idx].location}</h1>`;
    domString += `<textarea class = "output">${outputter[idx].value}</textarea>`;
    domString += `<span class = "time">${rightNow}</span></br>`;
    domString +=  `<button class="del-button">Delete</button>`;
    domString += `</div>`;
    domArray.push(domString);
   printToDom(domArray, 'submitted-cards');

  })
}

const delButtons = document.getElementsByClassName('del-button')
for (let idx = 0; idx < delButtons.length; idx++){
  delButtons[idx].addEventListener('click', (event) => {
    console.log(event);
  })
}
