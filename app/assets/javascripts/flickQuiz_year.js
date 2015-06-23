function displayFilm(film) {
  var target = film;
  var xmlhttp = new XMLHttpRequest();
  var url = 'http://www.omdbapi.com/?t=' + target +'&y=&plot=short&r=json'

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var json = JSON.parse(xmlhttp.responseText);
      $("#title").html(json["Title"]);
      $("#director").html(json["Director"]);
      $("#poster").html('<img src="' + json["Poster"] + '"/>');
      $("#yearAnswer").html(json["Year"]);
    }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
};

function submitAnswer() {
  var yearAnswer = $("#yearAnswer").text();
  var yearGuess = $("#yearGuess").val();
  if(yearGuess == yearAnswer) {
    $("#result").html('Correct!');
  } else {
    $("#result").html('Wrong!');
  }
  $("#answer").html('Released in ' + yearAnswer);
  $("#reset").show();
};

function newFilm() {
  displayFilm(selectFilm());
  $("#reset").hide();
  $("#result").html('');
  $("#answer").html('');
  $("#yearGuess").val('');
};