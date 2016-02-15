var app = angular.module('8ball', ['ionic'])

app.run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
});


app.controller('PredictionController', function ($scope, $timeout) { // inject the 'timeout' service  as a parameter into the controller

	var predictionList = [
		"Signs point to yes",
		"Yes",
		"Smoke got in my eyes. Ask again",
		"Without a doubt",
		"My confidential sources say no.  My public sources say yes.",
		"As I see it, yes",
		"You may rely on it",
		"You're not concentrating! Oh... forgive me. Okay, just pay attention and ask again.",
		"Outlook is not so good",
		"It is decidedly so",
		"I better not tell you now",
		"Are you sitting down for this?",
		"Absolutely, you good lookin' thing!",
		"Louder, please.",
		"What a joke!  You're not serious with that, are you?",
		"Eh... most likely",
		"Never ask me that again.  (I'm so offended.)",
		"Are you kidding? Not in a million years.",
		"Um.... yeah, sure.",
		"Don't count on it, you freak.",
		"Oh, puleeeze. Ask something else.",
		"Hahaha!  (I know what you're thinking.)"
	];

	$scope.prediction = "Ask a Question... Tap the Magic 8-Ball... Await the Oracle's Response.";
	$scope.answered = true;  // initially, show prediction text (.prediction)

	$scope.ask = function() {
		$scope.answered = false; // when user clicks 8-ball, hide prediction text (.prediction)
		$scope.prediction = "Asking the Oracle";  // show message until timer executes code below
		$timeout(function() {  // $timeout is the Angular service that works like javascript's setTimeout
							   // because 'setTimeout' is not Angular, it would cause problems and would
							   // require the use of $scope.apply, so this uses Angular's $timeout
		console.log("inside ask()");
		console.log(predictionList.length);
		
		$scope.prediction = predictionList[Math.floor(Math.random()*predictionList.length) + 1];
		$scope.answered = true; // show prediction text (.prediction)
		}, 2000);  // milliseconds before code executes
	};
});
