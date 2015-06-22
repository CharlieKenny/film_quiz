function displayFilm(film) {
  var target = film;
  var xmlhttp = new XMLHttpRequest();
  var url = 'http://www.omdbapi.com/?t=' + target +'&y=&plot=short&r=json'

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var json = JSON.parse(xmlhttp.responseText);
      document.getElementById('title').innerHTML = json["Title"];
      document.getElementById('director').innerHTML = json["Director"];
      document.getElementById('yearAnswer').innerHTML = json["Year"];
    }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
};

function selectFilm() {
  var filmlist = ['Shrek', 'Godzilla', 'Die Hard', 'Harry Brown', 'The Deer Hunter', 'Titanic'];

  var filmselection = filmlist[Math.floor(Math.random()*filmlist.length)];

  return filmselection;
}