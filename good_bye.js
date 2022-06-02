(function(window) {
	var greetings = "Good Bye";
	var byeGreeter = function (name) {
  		console.log(greetings + " " + name);
	}
	
	window.byeSpeaker = byeGreeter;

})(window);