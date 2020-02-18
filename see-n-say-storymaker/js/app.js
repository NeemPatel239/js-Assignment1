// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';
var speakButton = document.querySelector('button');


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
}



// starting

// initializing variables 
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var btn3 = document.querySelector(".btn3");
var btn4 = document.querySelector(".btn4");
var btn5 = document.querySelector(".btn5");
var btn6 = document.querySelector(".btn6");
var btn7 = document.querySelector(".btn7");

// initializing arrays
var nouns1     = ["The Turkey", "Mom","Dad","The dog","My teacher","The elephant","The cat"];
var verbs      = ["sat on","ate","danced with","saw","doesn't like","kissed"];
var adjectives = ["a funny","a scary","a goofy","a slimy","a barking","a fat"];
var nouns2      = ["goat","monkey","fish","cow","frog","bug","worm"];
var places     = ["on the moon","on the chair","in my spaghetti","in my soup","on the grass","in my shoes"];

// function for generating random value from defined arrays
function randomValueFromArray(array) {
	return array[Math.floor(Math.random()*array.length)];
}
// function for 1 to speak a word
btn1.onclick = function() {
var p1 = randomValueFromArray(nouns1);
speakNow(p1);
}

// function for 2 to speak a word
btn2.onclick = function() {
	var p2 = randomValueFromArray(verbs);
speakNow(p2);
}

// function for 3 to speak a word
btn3.onclick = function() {
	var p3 = randomValueFromArray(adjectives);
	speakNow(p3);
}

// function for 4 to speak a word
btn4.onclick = function() {
	var p4 = randomValueFromArray(nouns2);
speakNow(p4);
}

// function for 5 to speak a word
btn5.onclick = function() {
	var p5 = randomValueFromArray(places);
	speakNow(p5);
}

// function for 6th to speak a word
btn6.onclick = function() {
function Result() {
	 string = 
	randomValueFromArray(nouns1) + " " 
	+ randomValueFromArray(verbs) + " " 
	+ randomValueFromArray(adjectives) + " " 
	+ randomValueFromArray(nouns2) + " " 
	+ randomValueFromArray(places); 
	speakNow(string);
}
Result();
}

// btn7.onclick = function() {
// 	if(btn6.onclick == false) {
// 		document.getElementsByClassName('btn6').innerHTML = "please press a button 'Press to listen a joke' first. "
// 	}

// 	else {
// 		Result();
// 	}





