function displayFilm(film) {
  var target = film;
  var xmlhttp = new XMLHttpRequest();
  var url = 'http://www.omdbapi.com/?t=' + target +'&y=&plot=short&r=json'

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var json = JSON.parse(xmlhttp.responseText);
      $("#input").hide();
      $("#title").hide();
      $("#director").hide();
      $("#title").html('Film: ' + json["Title"]).fadeIn(400, function() {
        $("#director").html('Director: ' + json["Director"]).fadeIn(400, function() {
          $("#poster").hide().html('<img src="' + json["Poster"] + '"/>').fadeIn(400, function() {
            $("#input").fadeIn(400);
          });
        });
      });
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
    $("#result").hide().html('Correct!').fadeIn(400, function() {
      $("#answer").hide().html('Released in ' + yearAnswer).fadeIn(400, function() {
        $("#reset").fadeIn(400);
      });
    });
  } else {
    $("#result").hide().html('Wrong!').fadeIn(400, function() {
      $("#answer").hide().html('Released in ' + yearAnswer).fadeIn(400, function() {
        $("#reset").fadeIn(400);
      });
    });
  }
};

function newFilm() {
  $("#reset").fadeOut(400, function() {
    $("#answer").fadeOut(400, function() {
      $("#result").fadeOut(400, function() {
        $("#input").fadeOut(400, function() {
          $("#poster").fadeOut(400, function() {
            $("#director").fadeOut(400, function() {
              $("#title").fadeOut(400, function() {
                $("#title").html('');
                $("#director").html('');
                $("#result").html('');
                $("#answer").html('');
                $("#yearGuess").val('');
                displayFilm(selectFilm());
              });
            });
          });
        });
      });
    });
  })
};