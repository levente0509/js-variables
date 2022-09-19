// My Favorite Movie

let title = "The Phantom Menace";
let length = 133;
let isKidFriendly = true;
let protagonist = {
  actorName: "Liam Neeson",
  characterName: "Qui-GOn Jinn",
};
let antagonist = {
  actorName: "Ray Park",
  characterName: "Darth Maul",
};

console.log(antagonist.actorName);

let myFavoriteMovie = {
  actors: ["Liam Neeson", "Ewan McGregor", "Ray Park"],
  release: 1999,
  villains: {
    main: "Palpatine",
    support: "Darth Maul",
  },
};

console.log(myFavoriteMovie.villains.main);

// My Facebook page

let myProfile = {
  name: "Levente",
  age: 26,
  dob: "1996.05.09",
  nat: "hun",
  lang: ["hungarian", "english", "dutch"],
  residence: ["Budapest", "Leuven"],
  username: "b.levente2",
  friends: ["Andris", "Dóra", "Bulcsú", "Bence", "Anita"],
  likes: ["movies", "music", "dogs", "comics"],
};

console.log(myProfile.residence[1]);
console.log(myProfile.lang[2]);

// My favorite band

let myFaveBand = {
  name: "Fall out boy",
  members: ["Andy", "Joe", "Patrick", "Pete"],
  origin: "Chicago",
  founded: "2001",
  albums: "7",
  discography: {
    no1: "Take This to Your Grave",
    no2: "From Under the Cork Tree",
    no3: "Infinity on High",
    no4: "Folie à Deux",
    no5: "Save Rock and Roll",
    no6: "American Beauty/American Psycho",
    no7: "Mania",
  },
};

console.log(myFaveBand.members[2]);
console.log(myFaveBand.discography.no7);
