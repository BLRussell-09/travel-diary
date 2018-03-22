console.log('yo')
const places = [
  {
    location: "Mount Olympus",
    image: "https://en.wikipedia.org/wiki/Mount_Olympus#/media/File:Mytikas.jpg",
    desc: "Olympus was notable in Greek mythology as the home of the Greek gods, on the Mytikas peak."
  },
  {
    location: "Space Mountain",
    images: "https://en.wikipedia.org/wiki/Space_Mountain#/media/File:Magic_Kingdom_Space_Mountain.jpg",
    desc: "Olympus was notable in Greek mythology as the home of the Greek gods, on the Mytikas peak."
  },
  {
    location: "Atlantis",
    images: "https://en.wikipedia.org/wiki/Mount_Olympus#/media/File:Mytikas.jpg",
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
    location: "Sesame Street",
    images: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Sesame_Street_sign.svg",
    desc: "I have no idea how to get to this place"
  },
]

const printToDom = (domString, divId) => {
  const printTo = document.getElementById(divId);
  printTo.innerHTML = domString;
};

const buildDomString = (locationArray) => {
  let domString = '';
  studentArray.forEach((location) => {
    domString += `<div class="card">`;
    domString +=  `<h1>${places.location}</h1>`;
    domString +=  `<img src="${places.images}" alt=""></br>`;
    domString +=  `<p>${places.desc}</p>`;
    domString +=  `<input></input>`;
    domString +=  `<button class="card-button">Submit</button>`;
    domString += `</div>`;
  });
  printToDom(domString, 'location-cards');
}