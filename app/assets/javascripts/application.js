// = require jquery
// = require jquery_ujs
// = require turbolinks
// = require bootstrap-sprockets
// = require_tree .

window.onload = function WindowLoad(event) {
  displayFilm(selectFilm());
  $("#input").hide();
  $("#reset").hide();
};

function updateFilmInfo() {
  var film = $("#filmtitle").val();
  displayFilm(film);
}



function selectFilm() {
  var filmlist = ["The Godfather", "The Shawshank Redemption", "Schindler's List", "Raging Bull", "Under The Skin", "Casablanca", "One Flew Over the Cuckoo's Nest", "Blood Diamond", "Gone with the Wind", "Citizen Kane", "The Wizard of Oz", "Titanic", "Lawrence of Arabia", "The Godfather: Part II", "Psycho", "Sunset Boulevard", "Vertigo", "On the Waterfront", "Forrest Gump", "West Side Story", "Star Wars: Episode IV - A New Hope", "E.T. the Extra-Terrestrial", "2001: A Space Odyssey", "The Silence of the Lambs", "Chinatown", "The Bridge on the River Kwai", "Singin' in the Rain", "It's a Wonderful Life", "Some Like It Hot", "12 Angry Men", "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb", "Amadeus", "Apocalypse Now", "Gandhi", "The Lord of the Rings: The Return of the King", "Gladiator", "From Here to Eternity", "Saving Private Ryan", "Unforgiven", "Raiders of the Lost Ark", "Rocky", "A Streetcar Named Desire", "The Philadelphia Story", "To Kill a Mockingbird", "An American in Paris", "The Best Years of Our Lives", "My Fair Lady", "Ben-Hur", "Doctor Zhivago", "Patton", "Jaws", "Braveheart", "The Good, the Bad and the Ugly", "Butch Cassidy and the Sundance Kid", "The Treasure of the Sierra Madre", "The Apartment", "Platoon", "High Noon", "Dances with Wolves", "The Pianist", "Goodfellas", "The Exorcist", "All Quiet on the Western Front", "The French Connection", "City Lights", "The King's Speech", "It Happened One Night", "A Place in the Sun", "Midnight Cowboy", "Mr. Smith Goes to Washington", "Rain Man", "Annie Hall", "Good Will Hunting", "Terms of Endearment", "Tootsie", "Fargo", "Giant", "The Grapes of Wrath", "Kingsman: The Secret Service", "Dr. No", "Casino Royale", "Pitch Perfect", "Avengers: Age of Ultron", "Frozen", "Wedding Crashers", "Django Unchained", "Jurassic Park", "Shane", "Anchoman", "The Green Mile", "Close Encounters of the Third Kind", "The Wolf of Wall Street", "Zoolander", "Magic Mike", "Minions", "Mad Max", "Skyfall", "Zero Dark Thirty", "Selma", "Argo", "Apollo 13", "Toy Story", "The Big Lebowski", "Lost in Translation", "The School of Rock", "Star Trek", "Harry Potter and the Goblet of Fire", "In the Bedroom", "Network ", "The Social Network", "American Sniper", "The Goonies", "The Fault in Our Stars", "Bridesmaids", "The Theory of Everything", "The Wizard of Oz", "The Sound of Music", "Blazing Saddles", "Mary Poppins", "There Will Be Blood", "Fight Club", "Batman Begins", "Grease", "Nashville", "The Graduate", "The Mosquito Coast", "Leaving Las Vegas", "Man on Wire", "No Country for Old Men", "Scream", "Halloween", "American Beauty", "Serpico", "Top Gun", "The Lego Movie", "American Graffiti", "Pulp Fiction", "The African Queen", "Stagecoach", "Bonnie and Clyde", "Mutiny on the Bounty", "The Maltese Falcon", "A Clockwork Orange", "Taxi Driver", "Wuthering Heights", "Double Indemnity", "Rebel Without a Cause", "Rear Window", "The Third Man", "North by Northwest", "Yankee Doodle Dandy", "From Russia With Love", "Goldfinger", "Thunderball", "You Only Live Twice", "On Her Majesty's Secret Service", "Diamonds Are Forever", "Live And Let Die", "The Man With The Golden Gun", "The Spy Who Loved Me", "Moonraker", "For Your Eyes Only", "Octopussy", "A View To A Kill", "The Living Daylights", "Licence To Kill", "Goldeneye", "Tomorrow Never Dies", "The World Is Not Enough", "Die Another Day", "Casino Royale", "Quantum Of Solace", "Shrek", "Godzilla", "Die Hard", "Die Hard 2", "Die Hard: With A Vengeance", "Harry Brown", "The Deer Hunter", "Iron Man", "Oldboy", "Love Actually", "Four Weddings And A Funeral", "Hero", "The Fifth Element", "Crouching Tiger Hidden Dragon", "Drive", "Only God Forgives", "Enter The Dragon", "The Notebook", "Sink The Bismarck", "The Departed", "The Lion King", "The Mask", "Westworld", "Waterworld", "Wayne's World", "This Is Spinal Tap", "The Cider House Rules", "From Here To Eternity", "Citizen Kane", "Modern Times", "The Poseidon Adventure", "Battleship Potemkin", "The General", "Rush", "Senna", "Margin Call", "All Is Lost", "The Katate Kid", "Alien", "Aliens", "The Terminator", "American Pie"];

  var filmselection = filmlist[Math.floor(Math.random()*filmlist.length)];

  return filmselection;
}

