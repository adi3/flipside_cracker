var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var needle = "var Puzzles = {};";

var content = document.getElementById("content").children;
var Puzzles = getPuzzles();
window.eval(Puzzles.innerText);

var answers = Puzzles.ANSWERS;
var shift = Puzzles.SHIFT;

for (var i = 0; i < answers.length; i++) {
	document.getElementById("puzzleAnswer").value = process(answers[i]);
	var event = new KeyboardEvent('keyup');
	document.querySelector('#puzzleAnswer').dispatchEvent(event);
}

function process(str) {
	var result = "";
	for (var j = 0; j < str.length; j++) {
		var code = str.charCodeAt(j);
		code = code - shift - 65;				// ASCII index of A is 65
		if (code < 0) code = 26 + code;			// to loop around the alphabet
		result += chars[code];
	}
	return result;
}

function getPuzzles() {
	for (var i = content.length - 1; i >= 0; i--) {
		if (content[i].innerText.indexOf(needle) != -1) return content[i];
	}
}