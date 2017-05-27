$(document).ready(function () {

	//BMI calculator
	$("#bmiSubmit").on("click", function(event) {
		//adding the if statement for form validation. The number will be calculated only if an input was entered by the user.
		if ($("#bmiWeight").val().length > 0 && $("#bmiHeight").val().length > 0) {
				event.preventDefault();
				//grab the value from the input field and convert it into an integer
				var bmiWeight = parseInt($("#bmiWeight").val().trim());
				var bmiHeight = parseInt($("#bmiHeight").val().trim());
				//convert the height into meters
				bmiHeight = bmiHeight / 100;
				//the logic for the calculation
				var bmi = bmiWeight / (bmiHeight * bmiHeight);
				//testing
				console.log(bmi);
				//end up only with one decimal
				bmi = Math.round(bmi * 10) / 10;
				//write the result to the screen
				$("#bmiResult").val(bmi);
				//testing
				console.log(bmi);
		} else {
			$("#bmiWeight").css("border", "1px solid red");
			$("#bmiHeight").css("border", "1px solid red");
		}
	});

	// Body Fat % Calculator
	// -----------------------------------------------
	$("#bodyFatSubmit").on("click", function() {
		// Operate only if all inputs are added
		if ($("#bodyFatWeight").val().length > 0 && $("#waistCir").val().length > 0 && $("#wristCir").val().length > 0 && $("#hipCir").val().length > 0 && $("#forearm-cir").val().length > 0) {
			event.preventDefault();
			// Grabbing values from input boxes
			var bodyFatWeight = parseInt($("#bodyFatWeight").val().trim());
			var waistCir	  = parseInt($("#waistCir").val().trim());
			var wristCir	  = parseInt($("#wristCir").val().trim());
			var hipCir		  = parseInt($("#hipCir").val().trim());
			var forearmCir    = parseInt($("#forearm-cir").val().trim());
			// Factors
			bodyFatWeight = (bodyFatWeight * 0.732) + 8.897;
			wristCir	  = wristCir / 3.140;
			waistCir	  = waistCir * 0.157;
			hipCir		  = hipCir * 0.249;
			forearmCir 	  = forearmCir * 0.434;

			console.log(bodyFatWeight);
			console.log(waistCir);
			console.log(wristCir);
			console.log(hipCir);
			console.log(forearmCir);

			// 
			var bodyMass = bodyFatWeight + wristCir + waistCir + hipCir + forearmCir;
			//
			var bodyFat  = bodyFatWeight - bodyMass;
			//
			var bodyFatPercentage = (bodyFat * 100) / bodyFatWeight;
			// Reflect Result
			$("#bodyFatResult").val(bodyFatPercentage); 
		} else {
			$("#bodyFatWeight").css("border", "1px solid red");
			$("#waistCir").css("border", "1px solid red");
			$("#wristCir").css("border", "1px solid red");
			$("#hipCir").css("border", "1px solid red");
			$("#forearm-cir").css("border", "1px solid red");
		}
	});

	//Lean Body Mass Kg Calculator
	$("#leanMassSubmit").on("click", function(event) {
		//adding the if statement for form validation. The number will be calculated only if an input was entered by the user.
		if ($("#leanMassWeight").val().length > 0 && $("#fatPercentage").val().length > 0) {
			event.preventDefault();
			var leanMassWeight = parseInt($("#leanMassWeight").val().trim());
			var fatPercentage = parseInt($("#fatPercentage").val().trim());
			var leanMassKg = leanMassWeight - ((leanMassWeight * fatPercentage) / 100);
			leanMassKg = Math.round(leanMassKg * 10) / 10;
			console.log(leanMassKg);
			$("#leanMassResult").val(leanMassKg + " kilograms");
		} else {
			$("#leanMassWeight").css("border", "1px solid red");
			$("#fatPercentage").css("border", "1px solid red");
		}
	});

	//Maximum Heart Rate Calculator
	$("#maxHRSubmit").on("click", function(event) {
		//adding the if statement for form validation. The number will be calculated only if an input was entered by the user.
		if($("#maxHRage").val().length > 0 && $("#exerciseIntensity").val().length > 0) {
			event.preventDefault();
			var maxHrAge = parseInt($("#maxHRage").val().trim());
			var exerciseIntensity = parseInt($("#exerciseIntensity").val().trim());
			exerciseIntensity = exerciseIntensity / 100;
			var maxHR = (220 - maxHrAge) * exerciseIntensity;
			maxHR = Math.round(maxHR);
			console.log(maxHR);
			$("#maxHRresult").val(maxHR + " beats per minute");
		} else {
			$("#maxHRage").css("border", "1px solid red");
			$("#exerciseIntensity").css("border", "1px solid red");
		}
	});

	// Daily Caloric Intake Calculator
	// ----------------------------------------------
	// The Harris-Benedict equation is one of the most popular equations for determining energy 
	// needs by nutrition and health professionals. This equation takes into account a persons 
	// sex, age, height, weight and level of physical activity. 
	// The equation for males is: 66.5 + 13.8 x (Weight in kg) + 5 x (Height in cm); 6.8 x age. 
	// The equation for females is: 655.1 + 9.6 x (Weight in kg) + 1.9 x (Height in cm); 4.7 x age. 
	// These equations are then multiplied by an energy factor to determining estimated caloric needs. 
	// The physical activity factors are 1.2 for sedentary people, 1.3 for moderately active people and 1.4 for active people.

	$("#caloricIntakeSubmit").on("click", function(){
		// Grabbing variables
		var caloricAge 		= $("#caloricAge").val().trim();
		var caloricWeight 	= $("#caloricWeight").val().trim();
		var caloricHeight 	= $("#caloricHeight").val().trim();
		var caloricExercise = $("#caloricExercise").val(); // Does not need trim since there is already a value from the HTML

		console.log(caloricAge);
		console.log(caloricWeight);
		console.log(caloricHeight);
		console.log(caloricExercise);

		// If female is selected
		if ($("#sexFem").attr("checked")) {
		// Equation
		var caloricIntake = 655.1 + (9.6 * caloricWeight) + (1.9 * caloricHeight);
		caloricAge 		  = (4.7 * caloricAge);
		$("#caloricIntakeResult").val(caloricIntake + "calories");
		} 
		  // If male is selected
		  else if ($("#sexMale").attr("checked")) {
		  var caloricIntake = 66.5 + (13.8 * caloricWeight) + (5 * caloricHeight);
		  caloricAge 		= (6.8 * caloricAge);
		  $("#caloricIntakeResult").val(caloricIntake + "calories");

		} else {
		  $("#caloricAge").css("border", "1px solid red");
		  $("#caloricWeight").css("border", "1px solid red");
		  $("#caloricHeight").css("border", "1px solid red");
		  $("#caloricExercise").css("border", "1px solid red");	
		}
	});


	// Protein RDA Calculator
	// ----------------------------------------------

});