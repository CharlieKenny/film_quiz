function displayFilm(film) {
  var target = film;
  var xmlhttp = new XMLHttpRequest();
  var url = 'http://www.omdbapi.com/?t=' + target +'&y=&plot=short&r=json'

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var json = JSON.parse(xmlhttp.responseText);
      $("#year").html(json["Year"]);
      $("#actors").html(json["Actors"]);
      $("#hiddenPoster").html(json["Poster"]);
      $("#filmAnswer").html(json["Title"]);
    }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
};

function submitAnswer() {
  var filmAnswer = document.getElementById('filmAnswer').innerText;
  var filmGuess = $("#filmGuess").val();
  var poster = document.getElementById('hiddenPoster').innerText;
  if(filmGuess == filmAnswer) {
    $("#result").html('Correct: +5 points');
  } else {
    $("#result").html('Wrong: -1 points');
  }
  document.getElementById('answer').innerHTML = 'The film is ' + filmAnswer;
  document.getElementById('poster').innerHTML = '<img src="' + poster + '"/>';
  $("#reset").show();
};

function newFilm() {
  displayFilm(selectFilm());
  $("#reset").hide();
  $("#result").html('');
  $("#answer").html('');
  $("#poster").html('');
  $("#filmGuess").val('');
};