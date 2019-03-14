console.log("Jake's .js is connected to .html! :)");

// function that tells the functions of the javascript to take a chill pill until all our ducks are in a row
// Hadassah had me write this and although it can trick things up in certain scenarios, I dont think it's absence was ever the problem or antidote.
$(document).ready(function() {
	// API key
	var myKey = "&api_key=d7S1j7qyKKGKeVfB477Ut47RkSESq0SM";

	// array of topics
	var topics = [
		"joyous",
		"sassy",
		"sulky",
		"lazy",
		"bored",
		"furious",
		"confused"
	];

	// establishes a div for possible future renevations.
	// for some reason, this div only works when the div below is there. alone, this div does not work
	// the createButton function is attached to this div
	var div = $("<div>");
	$(div).attr("id", "gix");
	$("body").append(div);

	//weird div I made for another reason entirely, but now the div above with 'gix' relies on this div to survive and operate.
	// for some reason, the div above and everything attached to it does not work without this div
	// without the div above, this div does not work
	var div = $("<div>");
	$(div).attr("img");

	//a function that adds a button to each string in the array
	//each with a class id and phantom source attribute
	//i also gave each of these buttons its own daddy-div for future
	// note: I actually made a div called daddy div in trial-and-error process but it's since been deleted
	// I realize some of this may be redundant and unnecessary; clearly my understanding of the application of scope (not to be confused with the concept itself) lacking and needs more work
	var createButton = function createButton() {
		for (i = 0; i < topics.length; i++) {
			var btn = $("<button>");
			var picDiv = $("<div>");
			btn.attr("class", "buttons");
			btn.attr("id", topics[i]);
			btn.text(topics[i]);
			picDiv.append(btn);
			div.append(picDiv);
			$("#container-1").append(div);
		}
	};
	// call it
	createButton();

	// when the button is clicked, the text of the button is thrust into the a fetchgif's function that triggers the ajax
	$(document).on("click", ".buttons", function() {
		var topic = $(this).text();
		// $(this).attr(myGif);
		// .val()
		// .trim();
		fetchGifs(topic);
	});

	// T.A. Michael helped me make this; it's clear why he had it be named 'fetch'
	// when the ajax returns its with a pale of data we trial-and-error our way to hell and back, then sans back
	function fetchGifs(placeholder) {
		var queryURL =
			"http://api.giphy.com/v1/gifs/search?q=" +
			placeholder +
			"&r=g&limit=10" +
			myKey;
		$.ajax({
			url: queryURL,
			method: "GET"
		}).then(function(response) {
			for (i = 0; i < topics.length; i++) {
				var picDiv = $("<div>");
				var img = $("<img>");
				// var rating = $("<div>");
				response.data[0].images.original.url;
				img.attr("class", "buttons");
				img.attr("id", topics[i]);
				img.attr("src", response.data[0].images.original.url);
				// rating.text("response.data[0].rating");
				// $(".badIdea").text(response.data[0].images.rating);<--- didn't work anyway
				// console.log($(".badIdea").text(response.data[0].images.rating)); <--- didn't work anyway
				picDiv.append(img);
				$("#container-1").append(picDiv);
				// console.log(img).append(response.data[0].rating);
				// console.log(response.data[0].rating); <--- ERR: GOOGLING EVERY PERMUTATION OF "CONSOLE LOG GIPHY API OBJECT PROPERTIES RATING DISPLAY DOCUMENT YIELDS NO RESULTS"
				// var sdf = response.data[0].rating;
				// // console.log(sdf);
				// $("#container-1").attr("text", response.data[0].rating);
				// $("<img>").attr("src", response.data[0].images.original.url);
				// $("#gix").append(imInGix);
				// imInGix.attr("src", response.data[0].images.original.url);
				// $("#gix").attr("src", response.data[0].images.original.url);

				console.log(response);
			}
		});
	}
	// img.text();
	// console.log(img, "I exist");
});

// var theGifURL = response.data[0].images.original.url;

// var tenRandyGifs = [Math.floor(Math.random) * response.length
// console.log(queryURL);

// onclick(btn);

// $(".gif").on("click", function () {
// var state = $(this).attr("data-state");
// if (state === "still") {
// 	$(this).attr("src", $(this).attr("data-animate"));
// 	$(this).attr("data-state", "animate");
// } else {
// 	$(this).attr("src", $(this).attr("data-still"));
// 	$(this).attr("data-state", "still");
