'use strict'

var pixArray = [];
var lastPix = [];

//constructor
function Display(filePath,petName,species,people,costume,owner,tag){
  this.filePath = filePath;
  this.petName = [];
  this.species = []
  this.people = [];
  this.costume = costume;
  this.owner = owner;
  this.tag = [];
  pixArray.push(this);
}

new Display ('bailey.jpg',['Bailey'],['Dog'],['Savannah'],false,'Linda',['ShiTzuDoodle']);
new Display ('baileyBed.jpg',['Bailey'],['Dog'],false,false,'Linda',['ShiTzuDoodle']);
new Display ('baileyDance.jpg',['Bailey'],['Dog'],['Savannah'],false,'Linda',['ShiTzuDoodle']);
new Display ('bails.jpg',['Bailey'],'Dog',false,false,'Linda',['ShiTzuDoodle']);
new Display ('belind.jpg',['Belle,Indie'],['Dog'],false,false,'Me',['IG','Italian Greyhound']);
new Display ('belleIndieSteve.jpg',['Belle','Indie','Steve'],['Dog'],false,false,'Me',['IG','Italian Greyhound','Chihuahua']);
new Display ('biscuit.jpg',['Biscuit'],['Cat'],false,false,'Savannah',['Tabby','Domestic Shorthair']);
new Display ('boston_friends.jpg',['Henri','Rose'],['Dog'],false,false,'Maggie',['Sheltie','Shetland Sheepdog']);
new Display ('bostonHomecoming',['Boston'],['Dog'],false,['ShaSha','José'],false,'ShaSha',['Sheltie','Shetland Sheepdog']);
new Display ('bosty.jpg','Boston',['Dog'],false,false,['ShaSha'],false,'ShaSha',['Sheltie','Shetland Sheepdog']);
new Display ('bostybath.jpg',['Boston'],['Dog'],false,false,'ShaSha',['Sheltie','Shetland Sheepdog']);
new Display ('chillinlulu.jpg','LuLu',['Dog'],false,false,'Donna',['Frenchie', 'French Bulldog']);
new Display ('gertrude.jpg',false,false,false,false);
new Display ('halloween.jpg',['Indie','Belle'],['Dog'],false,true,'Me',['IG','Italian Greyhound']);
new Display ('highFlying.jpg',['Wicket','Wacket'], ['Dog'],false,true,'Annie',['IG','Italian Greyhound']);
new Display ('hildeMovesIn.jpg',['Hilde','Ruby'], ['Cat','Dog'], false, false,'Me',['Domestic Shorthair','IG','Italian Greyhound'] );
new Display ('hotdog.jpg',['Lily'], ['Dog'],false,true,'Sally',['IG','Italian Greyhound']);
new Display ('indiebelle.jpg',['Indie', 'Belle'], ['Dog'],false,false,'Me',['IG','Italian Greyhound']);
new Display ('lulu.jpg',['LuLu'],['Dog'],false,false,'Me',['IG','Italian Greyhound']);
new Display ('luluMagoo.jpg',['LuLu'],['Dog'],false,false,'Donna',['Frenchie', 'French Bulldog']);
new Display ('Lydi_and_Rubi.jpg',['Lydia','Ruby'],['Dog'],false,false,'Me',['IG','Italian Greyhound']);
new Display ('LydiaSteveHilde.jpg',['Lydia','Steve','Hilde'],false,false,'Me',['IG','Italian Greyhound','Domestic Shorthair']);
new Display ('rubyHilde.jpg',['Ruby','Hilde'],['Cat','Dog'],false,false,'Me',['IG','Italian Greyhound','Domestic Shorthair']);
new Display ('sawyerDogs.jpg',['Steve','Ruby'],['Dog'],['Sawyer'],false,'Me',['IG','Italian Greyhound','Chihuahua'])
new Display ('seahawk12s.jpg',['The Crew'],['Dog'],['Fan1','Fan2'],true,'Twelves'['IG','Italian Greyhound']);
new Display ('seahawkiggies.jpg',['The Crew'],['Dog'],['Fan1','Fan2'],true,'Twelves',['IG','Italian Greyhound']);
new Display ('shelties.jpg',['The Pack'],['Dog'],false,false,'Many',['Sheltie','Shetland Sheepdog']);
new Display ('steveCard.jpg',['Steve'],['Dog'],false,false,'Me',['Chihuahua']);
new Display ('stevie.jpg',['Steve'],['Dog'],false,false,'Me',['Chihuahua']);
new Display ('SweetLydia.jpg'['Lydia'],['Dog'],false,false,'Me'['IG','Italian Greyhound']);
new Display ('taco.jpg',['Gus'],['Dog'],false,true,'Sally',['IG','Italian Greyhound']);
new Display ('tacoHotDogSundae.jpeg',['Gus','Sophia','Beatrice'],['Dog'],false,true,'Sally',['IG','Italian Greyhound']);
new Display ('threeAmigos.jpg',['Lydia','Ruby','Steve'],false,true,'Me',['IG','Italian Greyhound']);
new Display ('twins_and_ruby.jpg',['Ruby'],['Savannah','Sawyer'],false,'Me',['IG','Italian Greyhound']);
new Display ('wee_ones.jpg',['Lydia','Steve'],'Sawyer',false,'Me',['IG','Italian Greyhound']);
