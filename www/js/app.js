"use strict";

const app = angular.module('8ball', ['ionic']);

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

	const predictionList = [
		"Yeah, sure, whatever.  By the way, who picks your clothes – Stevie Wonder?",
		"Yes, Asians are nice people... but they burn a lot of shirts.",
		"I'll tell you after you tell me this; Why do they have handicapped parking in front of a gym?",
		"We'll get to you in a minute, you hockey puck.  Are part-time bandleaders semi-conductors?",
		"All I know is, Italians are fantastic people, really. They can work you over in an alley while singing an opera.",
		"Yes, Frank Sinatra was a nice man. When you entered a room, you'd have to kiss his ring. I didn't mind, but he kept it in his back pocket.",
		"Boy, you must have some troubles.  I think if you took therapy, the doctor would quit. He'd just pick up the couch and walk out of the room.",
		"What? Political correctness? In my humor, I never talk about politics. I was never much into all that.",
		"Well, I was sitting in the toilet and I was by myself. I was tired of playing with the roller, so I said I'd better write a book. Oh, I thought you asked about my book, you hockey puck!",
		"Never ask me that again. I'm so offended.",
		"Sure, I know why there are no Irish lawyers. Ever seen an Irishman pass a bar?",
		"Sure, I know why there is no Disneyland in China. No one's tall enough to go on the good rides.",
		"What? Why can't Chinese Barbecue?  Because the rice falls through the grill.",
		"Don't count on it, putz.",
		"What? Why aren't there any Mexicans in Canada? They can't run that far.",
		"Yes, I know how every Islamic joke starts. By looking over your shoulder."
		];

	$scope.prediction = "Ask Don Rickles, if you dare, then tap him and await his answer.";
	$scope.answered = true;  // initially, show prediction text (.prediction)

	$scope.ask = function() {
		$scope.answered = false; // when user clicks 8-ball, hide prediction text (.prediction)
		$scope.prediction = "Wait a second, you putz.";  // show message until timer executes code below
		$timeout(function() {  // $timeout is the Angular service that works like javascript's setTimeout
							   // because 'setTimeout' is not Angular, it would cause problems and would
							   // require the use of $scope.apply, so this uses Angular's $timeout
		console.log("inside ask()");
		console.log(predictionList.length);
		
		$scope.prediction = predictionList[Math.floor(Math.random()*predictionList.length) + 1];
		$scope.answered = true; // show prediction text (.prediction)
		}, 2500);  // milliseconds before code executes
	};
});
