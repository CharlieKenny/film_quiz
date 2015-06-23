function displayFilm(film) {
  var target = film;
  var xmlhttp = new XMLHttpRequest();
  var url = 'http://www.omdbapi.com/?t=' + target +'&y=&plot=short&r=json'

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var json = JSON.parse(xmlhttp.responseText);
      $("#year").hide();
      $("#actors").hide();

      $("#year").html('Year: ' + json["Year"]).fadeIn(200, function() {
        $("#actors").html('Actors: ' + json["Actors"]).fadeIn(200, function() {
          $("#input").fadeIn(200);
        });
      });
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
  $("#poster").hide();
  if(filmGuess.toLowerCase() == filmAnswer.toLowerCase()) {
    $("#result").hide().html('Correct!').fadeIn(200, function() {
      $("#answer").hide().html('The film is ' + filmAnswer).fadeIn(200, function() {
        $("#poster").html('<img src="' + poster + '"/>').fadeIn(200, function() {
          $("#reset").fadeIn(200);
        });
      });
    });
  } else {
    $("#result").hide().html('Wrong!').fadeIn(200, function() {
      $("#answer").hide().html('The film is ' + filmAnswer).fadeIn(200, function() {
        $("#poster").html('<img src="' + poster + '"/>').fadeIn(200, function() {
          $("#reset").fadeIn(200);
        });
      });
    });
  }
};

function newFilm() {
  $("#reset").fadeOut(200, function() {
    $("#poster").fadeOut(200, function() {
      $("#answer").fadeOut(200, function() {
        $("#result").fadeOut(200, function() {
          $("#input").fadeOut(200, function() {
            $("#actors").fadeOut(200, function() {
              $("#year").fadeOut(200, function() {
                $("#year").html('');
                $("#actors").html('');
                $("#result").html('');
                $("#answer").html('');
                $("#filmGuess").val('');
                displayFilm(selectFilm());
              });
            });
          });
        });
      });
    });
  })
};