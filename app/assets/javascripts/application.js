// = require jquery
// = require jquery_ujs
// = require turbolinks
// = require bootstrap-sprockets
// = require_tree .

window.onload = function WindowLoad(event) {
  displayFilm(selectFilm());
};

function updateFilmInfo() {
  var film = document.getElementById('filmtitle').value;
  displayFilm(film);
}

function submitAnswer() {
  var yearAnswer = document.getElementById('yearAnswer').innerText;
  var yearGuess = document.getElementById('yearGuess').value;
  console.log(yearAnswer);
  console.log(yearGuess);
  if(yearGuess == yearAnswer) {
    document.getElementById('result').innerHTML = 'Correct: 10 points';
  } else {
    document.getElementById('result').innerHTML = 'Wrong: -1 points';
  }
}

