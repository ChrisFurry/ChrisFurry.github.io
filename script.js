// Remove the "JAVASCRIPT REQUIRED" text and open the "About me" tab (or open previous)
document.getElementById("YOUNEEDJAVA").style.display = "none";
document.getElementById("javascript-tabs").style.display = "block";
// Doing this so the let value isn't kept.
do
{
	let tablines = document.getElementsByClassName("no-javascript-lines");
	for (i = 0; i < tablines.length; i++)
	{
		tablines[i].style.display = "none";
	}
}
while(false);

// Init
let body,style;
body = document.body;
style = document.querySelector(":root").style;
rescaleBackground();

// Add listeners
addEventListener("resize", (event) => {
	rescaleBackground();
});

if(window.location.hash)
{
	openTab(window.location.hash.replace("#",""));
} else {
	openTab("AboutMe");
}

function openTab(name) {
	var i, tabcontent, tablinks;

	// Set hash
	window.location.hash = name;

	// Get all tab contents and hide them.
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++)
	{
		tabcontent[i].style.display = "none";
	}

	// Get tab buttons and reset them.
	tablinks = document.getElementsByClassName("tablink");
 	for(i = 0; i < tablinks.length; i++)
 	{
		tablinks[i].className = tablinks[i].className.replace(" active", "");
		if(tablinks[i].className.includes(name))
		{
			tablinks[i].className += " active";
		}
	}

	// Show the current tab.
	document.getElementById(name).style.display = "block";
}

function rescaleBackground() {
	let windowSizeMul = (window.innerHeight / 480);
	let windowScreenWid = 320 * windowSizeMul;
	let windowScreenFinal = Math.ceil(window.innerWidth / windowScreenWid) * 2 * windowScreenWid;
	style.setProperty('--background-width',	windowScreenFinal + 'px');
}