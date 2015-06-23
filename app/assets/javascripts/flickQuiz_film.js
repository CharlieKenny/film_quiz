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
  var filmAnswer = $("#filmAnswer").text();
  var filmGuess = $("#filmGuess").val();
  var poster = $("#hiddenPoster").text();
  if(filmGuess == filmAnswer) {
    $("#result").html('Correct!');
  } else {
    $("#result").html('Wrong!');
  }
  $("#answer").html('The film is ' + filmAnswer);
  $("#poster").html('<img src="' + poster + '"/>');
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