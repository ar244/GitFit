$(document).ready(function () {

	var muscleName = ["Biceps", "Shoulder", "Ribs", "Chest", "Triceps", 
					  "Abs", "Calves", "Glutes", "Trapezius", "Quads",
					  "Hamstring", "Lats", "Brachialis", "Obliques", "Soleus"];


	var muscle = "";
	var muscleIndex = 0;
	// wger API
	var baseURL = "https://wger.de/api/v2/exercise/?";
	var key = "d847f4de1299dad25a4bd31b15e5c5a3";
	var queryURLBefore = "https://wger.de/api/v2/exercise/?key=7984176e785d9a22346cacb2840d8ddb961748d3&language=2&muscles="; 
	var queryURL = "";

	


	$("#menu li a").on('click', function(){
		event.preventDefault();
    	$('#muscleMenu').text($(this).text());

    	queryURL = "";

    	$("#exerciseSpace").empty();

    	muscle = $(this).text();
    	muscleIndex = parseInt(muscleName.indexOf(muscle)) + 1;

    	console.log("clicked muscle = "+muscle+" muscleIndex = "+muscleIndex);

    	queryURL = queryURLBefore +muscleIndex;

    	
		console.log(queryURL);

		$.ajax({
			crossDomain: false,
	    	url: queryURL,
	    	method: "GET"
  		}).done(function(response) {
  			console.log(response);

  			
  			for (var i=0; i<Math.min(5, response.results.length); i++) {
  				var name = (response.results[i].name);
  				var des = (response.results[i].description);

  				$("#exerciseSpace").append("<h3 id='exerciseHeading' style='background-color: lightgrey; border:1px solid'>"+name+"</h3>");
  				$("#exerciseSpace").append("<div style='background-color: white; border: 1px solid; padding: 20px;''><p>"+des+"</p></div>");

  			}
  			
  			$( "#exerciseSpace" ).accordion();


  		});

	});
});








