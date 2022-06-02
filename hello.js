
(function(window) {
	var greetings = "Hello";
	var helloGreeter = function (name) {
		console.log(greetings + " " + name);
	}

	window.helloSpeaker = helloGreeter;

})(window);