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
  if(filmGuess.toLowerCase() == filmAnswer.toLowerCase()) {
    $("#result").html('Correct!');
    score("true");
  } else {
    $("#result").html('Wrong!');
    score("false");
  }
  $("#answer").html('The film is ' + filmAnswer);
  $("#poster").hide();
  $("#poster").html('<img src="' + poster + '"/>');
  $("#poster").fadeIn(1000);
  $("#reset").fadeIn(1000);
};

function newFilm() {
  displayFilm(selectFilm());
  $("#reset").hide();
  $("#result").html('');
  $("#answer").html('');
  $("#poster").html('');
  $("#filmGuess").val('');
};

function score(value) {
  $.ajax({ url: '/users/1/score',  
    type: 'POST',
    beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
    data: {"reply" : value},
    success: function(response) {
      console.log("ok")
    }
  });
}