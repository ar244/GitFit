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
	// Formula from: http://www.bmi-calculator.net/body-fat-calculator/body-fat-formula.php
	// -----------------------------------------------
	$("#bodyFatSubmit").on("click", function() {
		// Operate only if all inputs are added
		if ($("#bodyFatWeight").val().length > 0 && $("#waistCir").val().length > 0 && $("#wristCir").val().length > 0 && $("#hipCir").val().length > 0 && $("#forearm-cir").val().length > 0) {
			event.preventDefault();
			// Grabbing (metric) values from input boxes
			var bodyFatWeight = parseInt($("#bodyFatWeight").val().trim());
			var waistCir	  = parseInt($("#waistCir").val().trim());
			var wristCir	  = parseInt($("#wristCir").val().trim());
			var hipCir		  = parseInt($("#hipCir").val().trim());
			var forearmCir    = parseInt($("#forearm-cir").val().trim());

			// Converting variable values from metric to imperial since our formula is imperial (I could not find one in metric)
			bodyFatWeight = bodyFatWeight * 2.20462262;
			waistCir 	  = waistCir * 0.39370079;
			wristCir 	  = wristCir * 0.39370079;
			hipCir 		  = hipCir * 0.39370079;
			forearmCir 	  = forearmCir * 0.39370079;

			// Converting variables into factors for the body fat formula
			// We have a new weight variable because we will need to grab the original weight input later
			var weight 	  = (bodyFatWeight * 0.732) + 8.897;
			wristCir	  = wristCir / 3.140;
			waistCir	  = waistCir * 0.157;
			hipCir		  = hipCir * 0.249;
			forearmCir 	  = forearmCir * 0.434;

			// Lean Body Mass
			var bodyMass = weight + wristCir - waistCir - hipCir + forearmCir;
			// Body Fat Weight
			var bodyFat  = bodyFatWeight - bodyMass;
			// Body Fat Percentage
			var bodyFatPercentage = (Math.round((bodyFat * 100) / bodyFatWeight) + "%");
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
	// Mifflin-St. Jeor Equation - http://www.livestrong.com/article/178764-caloric-intake-formula/ 
	// The physical activity factors are 1.2 for sedentary people, 1.3 for moderately active people and 1.4 for active people.

	$("#caloricIntakeSubmit").on("click", function(){
		//if ($("#caloricAge").val().length > 0 && $("#caloricWeight").val().length > 0 && $("#caloricHeight").val().lenght > 0) {
		event.preventDefault();
		// Grabbing variables
		var caloricAge 		= parseInt($("#caloricAge").val().trim());
		var caloricWeight 	= parseInt($("#caloricWeight").val().trim());
		var caloricHeight 	= parseInt($("#caloricHeight").val().trim());
		var caloricExercise = parseInt($("#caloricExercise").val()); // Does not need trim since there is already a value from the HTML

		console.log(caloricAge);
		console.log(caloricWeight);
		console.log(caloricHeight);
		console.log(caloricExercise);

		var caloricIntake = (10 * caloricWeight) + (6.25 * caloricHeight) - (5 * caloricAge) - 161;
		caloricIntake 	  = caloricIntake * caloricExercise;
		$("#caloricIntakeResult").val(caloricIntake + " calories");

		// // If female is selected
		// if (document.getElementById("sexFem").checked) {
		// // Equation
		// var caloricIntake = (10 * caloricWeight) + (6.25 * caloricHeight) - (5 * caloricAge) - 161;
		// caloricIntake 	  = caloricIntake * caloricExercise;
		// $("#caloricIntakeResult").val(caloricIntake + "calories");
		// } 
		//   // If male is selected
		//   else if (document.getElementById("sexMale").checked) {
		//   var caloricIntake = (10 * caloricWeight) + (6.25 * caloricHeight) - (5 * caloricAge) + 5;
		//   caloricIntake 	= caloricIntake * caloricExercise;
		//   $("#caloricIntakeResult").val(caloricIntake + "calories");

		// } else {
		//   $("#caloricAge").css("border", "1px solid red");
		//   $("#caloricWeight").css("border", "1px solid red");
		//   $("#caloricHeight").css("border", "1px solid red");
		//   $("#caloricExercise").css("border", "1px solid red");	
		// }
	//}
});


	// Protein RDA Calculator
	// ----------------------------------------------
	$("#proteinSubmit").on("click", function() {
		event.preventDefault();
		// Grabbing variables
		var proteinAge 	  = parseInt($("#proteinAge").val().trim());
		var proteinWeight = parseInt($("#proteinWeight").val().trim());
		var proteinHeight = parseInt($("#proteinHeight").val().trim());
		var proteinExercise = parseInt($("#proteinExercise").val());

		console.log(proteinAge);
		console.log(proteinWeight);
		console.log(proteinHeight);

		var proteinRDA = Math.round(proteinWeight * 0.8);
		$("#proteinResult").val(proteinRDA + " g");
	})
});