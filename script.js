/* 
NOTE: A song may consist of multiple beatmaps, not just one. All objects apply solely to standard osu!. This list will NOT include: 
osu! taiko 
osu! mania
osu! catch. 
*/
document.addEventListener("DOMContentLoaded", function() {
console.log("HTML is ready, script.js is running.");
var searchBar = document.getElementById("search-bar")
  , searchButton = document.getElementById("search-button")
  , autoSuggestions = document.getElementById("auto-suggest")
  , display = document.getElementById("display");
var database = [{
    name: "Vanic - Samurai (Spirix Remix)",
    //Name of song being categorized
    mapper: "Monstrata",
    //Mapper refers to the name of the person who created the beatmap for the song.
    bpm: [150],
    //Beats Per Minute used by osu! algorithim to determine note snap placement (Some beatmaps change pace, hence array).
    length: "1:16",
    //Length of overall beatmap, usually kept consistent but some beatmaps do offer range of selection
    difficulty: ["Easy", "Normal", "Hard", "Fading"],
    //Difficulty for EACH beatmap—increasing order.
    stars: [1.35, 1.97, 3.31, 4.15]
    /*Star difficulty (out of 10) is used to 
	allow players to determine difficulty of beatmap (corresponds to difficulty—increaasing order). */
}, {
    name: "Kurokotei - Galaxy Collapse",
    mapper: "Doomsday is Bad",
    bpm: [27, 520],
    length: "5:53",
    difficulty: ["Galaxy, Galactic"],
    stars: [9.41, 10.67]
}, {
    name: "REOL - 404 Not Found",
    mapper: "SnowNiNo_",
    bpm: [140],
    length: "4:01",
    difficulty: ["Normal", "Hard", "Collab Light Insane", "Chaoz's Insane", "Error"],
    stars: [1.75, 2.84, 3.44, 4.45, 5.14]
}, {
    name: "BRIGHT - Ichinen Nikagetsu Hatsuka",
    mapper: "Nymph",
    bpm: [119],
    length: "2:58",
    difficulty: ["Easy", "Normal", "Hard"],
    stars: [1.27, 1.7, 3.2]
}, {
    name: "Yousei Teikoku - Kokou no Sousei",
    mapper: "Saten-san",
    bpm: [240],
    length: "5:06",
    difficulty: ["Hard", "Insane", "Collab", "Chaos"],
    stars: [2.87, 4.53, 5.40, 6.10]
}];

if (searchBar) {
// If HTML is not finished loaded and parsed, searchBar and searchButton 
//listeners will not be able to mount, hence needing us to check if it does not equal null.	
    searchBar.addEventListener("keypress", checkKey);
} else {
	return alert("searchBar event error, searchBar equals null");
}
if (searchButton) {
    searchButton.addEventListener("click", processInput);
} else {
	return alert("searchButton event error, searchButton equals null");
}
function checkKey(event) {
    var key = event.which || event.keyCode;
    if (key == "13") {
        console.log("enter was pressed");
        processInput();
    }
}
function processInput() {
    var cleanedInput = searchBar.value.toLowerCase().trim();
    console.log("cleanedInput: "+ cleanedInput);
    searchBar.value = "";
    autoSuggestions.innerHTML = "";
    display.innerHTML = "";
    autoSuggestions.style.display = "none";
    var databaseRecord = getRecord(cleanedInput);
    if (databaseRecord != null) {
    	displayRecord(databaseRecord);
    } else {
    	alert("No Results");
    }
    console.log("processInput done.");
}
function displayRecord(record) {
	// I'll most likely shorthand this with loops later.
	var name = document.createElement("h2")
	, mapper = document.createElement("h3")
	, bpm = document.createElement("h4")
	, length = document.createElement("h4")
	, difficulty = document.createElement("h4")
	, stars = document.createElement("h4");
	name.innerHTML = record.name
	, mapper.innerHTML = record.mapper
	, bpm.innerHTML = "BPM: " + record.bpm
	, length.innerHTML = "Length: " + record.length
	, difficulty.innerHTML = record.difficulty
	, stars.innerHTML = record.stars;
	display.appendChild(name)
	, display.appendChild(mapper)
	, display.appendChild(difficulty)
	, display.appendChild(stars)
	, display.appendChild(length)
	, display.appendChild(bpm)
}
function getRecord(input) {
	console.log("getRecord called, running");
	for (var i = 0; i < database.length; i++) {
		console.log(database[i]);
		var recordName = database[i].name.toLowerCase().trim();
		if (input == recordName) {
			console.log("Match made, passing Results.");
			return database[i];
		}
	}
	return null;
}

});