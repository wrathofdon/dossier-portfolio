'use strict'

let pixArray = [];
let lastPix = [];

//constructor
function Display(filePath, petName, species, people, costume, owner, tag) {
  this.filePath = filePath;
  this.petName = [];
  this.species = [];
  this.people = [];
  this.costume = costume;
  this.owner = owner;
  this.tag = [];
  this.displayViews = 0;
  this.clicks = 0;
  pixArray.push(this);
}

new Display('images/bailey.jpg', ['Bailey'], ['Dog'], ['Savannah'], false, 'Linda', ['ShiZuDoodle']);
new Display('images/baileyBed.jpg', ['Bailey'], ['Dog'], false, false, 'Linda', ['ShiZuDoodle']);
new Display('images/baileyDance.jpg', ['Bailey'], ['Dog'], ['Savannah'], false, 'Linda', ['ShiZuDoodle']);
new Display('images/bails.jpg', ['Bailey'], ['Dog'], false, false, 'Linda', ['ShiZuDoodle']);
new Display('images/belind.jpg', ['Belle,Indie'], ['Dog'], false, false, 'Me', ['IG', 'Italian Greyhound']);
new Display('images/belleIndieSteve.jpg', ['Belle', 'Indie', 'Steve'], ['Dog'], false, false, 'Me', ['IG', 'Italian Greyhound','Chihuahua']);
new Display('images/biscuit.jpg', ['Biscuit'], ['Cat'], false, false, 'Savannah', ['Tabby', 'Domestic Shorthair']);
new Display('images/boston_friends.jpg', ['Henri', 'Rose'], ['Dog'], false, false, 'Maggie', ['Sheltie', 'Shetland Sheepdog']);
new Display('images/bostonHomecoming.jpg', ['Boston'], ['Dog'], ['ShaSha', 'José'], false, 'ShaSha', ['Sheltie', 'Shetland Sheepdog']);
new Display('images/bosty.jpg', ['Boston'], ['Dog'], false, false, 'ShaSha', ['Sheltie', 'Shetland Sheepdog']);
new Display('images/bostybath.jpg', ['Boston'], ['Dog'], false, false, 'ShaSha', ['Sheltie', 'Shetland Sheepdog']);
new Display('images/chillinlulu.jpg', ['LuLu'], ['Dog'], false, false, 'Donna', ['Frenchie', 'French Bulldog']);
new Display('images/gertrude.jpg', false, false, false, false,false,false);
new Display('images/halloween.jpg', ['Indie', 'Belle'], ['Dog'], false, true, 'Me', ['IG', 'Italian Greyhound']);
new Display('images/highFlying.jpeg', ['Wicket', 'Wacket'], ['Dog'], false, true, 'Annie', ['IG', 'Italian Greyhound']);
new Display('images/hildeMovesIn.jpg', ['Hilde', 'Ruby'], ['Cat', 'Dog'], false, false, 'Me', ['Domestic Shorthair', 'IG', 'Italian Greyhound']);
new Display('images/hotdog.jpg', ['Lily'], ['Dog'], false, true, 'Sally', ['IG', 'Italian Greyhound']);
new Display('images/indiebelle.jpg', ['Indie', 'Belle'], ['Dog'], false, false, 'Me', ['IG', 'Italian Greyhound']);
new Display('images/lulu.jpg', ['LuLu'], ['Dog'], false, false, 'Donna', ['Frenchie', 'French Bulldog']);
new Display('images/luluMagoo.jpg', ['LuLu'], ['Dog'], false, false, 'Donna', ['Frenchie', 'French Bulldog']);
new Display('images/Lydi_and_Rubi.jpg', ['Lydia', 'Ruby'], ['Dog'], false, false, 'Me', ['IG', 'Italian Greyhound']);
new Display('images/LydiaSteveHilde.jpg', ['Lydia', 'Steve', 'Hilde'], ['Dog', 'Cat'],false, false, 'Me', ['IG', 'Italian Greyhound', 'Domestic Shorthair']);
new Display('images/rubyHilde.jpg', ['Ruby', 'Hilde'], ['Cat', 'Dog'], false, false, 'Me', ['IG', 'Italian Greyhound', 'Domestic Shorthair']);
new Display('images/sawyerDogs.jpg', ['Steve', 'Ruby'], ['Dog'], ['Sawyer'], false, 'Me', ['IG', 'Italian Greyhound', 'Chihuahua']);
new Display('images/seahawk12s.jpg', ['The Crew'], ['Dog'], ['Fan1', 'Fan2'], true, 'Twelves', ['IG', 'Italian Greyhound']);
new Display('images/seahawkiggies.jpg', ['The Crew'], ['Dog'], ['Fan1', 'Fan2'], true, 'Twelves', ['IG', 'Italian Greyhound']);
new Display('images/shelties.jpg', ['The Pack'], ['Dog'], false, false, 'Many', ['Sheltie', 'Shetland Sheepdog']);
new Display('images/steveCard.jpg', ['Steve'], ['Dog'], false, false, 'Me', ['Chihuahua']);
new Display('images/stevie.jpg', ['Steve'], ['Dog'], false, false, 'Me', ['Chihuahua']);
new Display('images/SweetLydia.jpg', ['Lydia'], ['Dog'], false, false, 'Me', ['IG', 'Italian Greyhound']);
new Display('images/taco.jpg', ['Gus'], ['Dog'], false, true, 'Sally', ['IG', 'Italian Greyhound']);
new Display('images/tacoHotDogSundae.jpeg', ['Gus', 'Sophia', 'Beatrice'], ['Dog'], false, true, 'Sally', ['IG', 'Italian Greyhound']);
new Display('images/threeAmigos.jpg', ['Lydia', 'Ruby', 'Steve'], ['Dog'],false, true, 'Me', ['IG', 'Italian Greyhound']);
new Display('images/twins_and_ruby.jpg', ['Ruby'], ['Dog'],['Savannah', 'Sawyer'],false, 'Me', ['IG', 'Italian Greyhound']);
new Display('images/wee_ones.jpg', ['Lydia', 'Steve'], ['Dog'],['Sawyer'], false,'Me', ['IG', 'Italian Greyhound']);

//randomizer

function randomPix() {
  while (true) {
    let random = Math.floor(Math.random() * pixArray.length);
    if (lastPix.includes(pixArray[random]) === false) {
      pixArray[random].displayViews += 1;
      return pixArray[random];
    }
  }
}

//render

function render() {
  let seenBefore = [];
  let images = document.getElementsByClassName('images');
  for (let j = 0; j < images.length; j++) {
    let newPix = randomPix();
    images[j].setAttribute('src', newPix.filePath);
    images[j].setAttribute('id', newPix.petName);
    lastPix.push(newPix);
    seenBefore.push(newPix);
  }
  lastPix = seenBefore;
}

//listener
var count = 0;

function eventListener(event) {
  let selectedPix = event.target.id;
  for (let k = 0; k < pixArray.length; k++) {
    if (selectedPix === pixArray[k]) {
      pixArray[k].clicks++;
      count++;
    }
  }
  if (count < 50) {
    render();
  }
}
var holds = document.getElementsByClassName('images');
for (var m = 0; m < holds.length; m++) {
  holds[m].addEventListener('click', eventListener);
}
render()
