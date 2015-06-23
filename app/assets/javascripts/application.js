window.onload = function WindowLoad(event) {
  displayFilm(selectFilm());
  $("#reset").hide();
};

function updateFilmInfo() {
  var film = document.getElementById('filmtitle').value;
  displayFilm(film);
}

function submitAnswer() {
  var yearAnswer = document.getElementById('yearAnswer').innerText;
  var yearGuess = document.getElementById('yearGuess').value;
  if(yearGuess == yearAnswer) {
    document.getElementById('result').innerHTML = 'Correct: +5 points';
  } else {
    document.getElementById('result').innerHTML = 'Wrong: -1 points';
  }
  document.getElementById('answer').innerHTML = 'Released in ' + yearAnswer;
  $("#reset").show();
}

function newFilm() {
  displayFilm(selectFilm());
  $("#reset").hide();
  document.getElementById('result').innerHTML = '';
  document.getElementById('answer').innerHTML = '';
  document.getElementById('yearGuess').value = '';
}