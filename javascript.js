console.log("Jake's .js is connected to .html! :)");

var topics = [
	"joyous",
	"sassy",
	"sulky",
	"lazy",
	"bored",
	"furious",
	"confused"
];

function createButton() {
	for (i = 0; i < topics.length; i++) {
		var btn = $("<button>");
		btn.attr("class", "btn" + topics[i]);

		btn.text(topics[i]);
		$("#btn1").append(btn);
		console.log(btn);
	}
}
// .empty()]

$("body").append("<div>");
$("<div>").attr("class", "container1");
$("<div>").attr("id", "btn1");
$("body").append("</div>");
$("body").append("<div>");
$("<div>").attr("class", "container1");
$("body").append("</div>");
$("body").append("<div>");
$("<div>").attr("class", "container1");
$("body").append("</div>");

createButton();

var myKey = "&api_key=d7S1j7qyKKGKeVfB477Ut47RkSESq0SM";

var queryURL =
	"http://api.giphy.com/v1/gifs/search?q=" + "&r=g&limit=10" + myKey;

console.log("#btn1", "i'm here!");
// console.log(queryURL);

var myURL = $.ajax({
	url: queryURL,
	method: "GET"
}).then(function(response) {
	console.log(response);
	response.data[i];
	// console.log(response.data([i]));
	console.log(response.data[i]);
});

// response.data[i];

function clickButton() {
	btn.on("click");
}
console.log(btn.class);

clickButton();
console.log(clickButton);
