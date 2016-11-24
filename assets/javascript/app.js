// TODO: Put links to our images in this image array.
var images = [" ", "https://s-media-cache-ak0.pinimg.com/236x/7a/88/12/7a88129b8ff60e2840b96e84deff44de.jpg", "http://static7.comicvine.com/uploads/scale_small/0/77/193654-140154-moon-boy.jpg", "http://www.themarysue.com/wp-content/uploads/2013/09/382108643_ceb8d59dc6_z.jpg", "http://www.cosmicteams.com/legion/img/fanfare/cockrum-trio.JPG"];
var number = 60;	//Timer
var counter;		//Variable used for setInterval in the "run" function
var showAns;		//Holds the setInterval when we show the right answers (as images[])
var count = 0;		//Keeps track of the index for images array

function run(){
	counter = setInterval(decrement, 1000);
}

function decrement(){
	$("#show-number").html("<h1>" + number + "</h1>");
	//Times Up
	if (number === 0)
	{
		stop();
		console.log("Times Up!");
	} else if (number > 0)
		{
			number--;
		}
}

function stop(){
	clearInterval(counter);
	counter = setInterval(nextImg, 4000);
	console.log("2nd hit");
}

function nextImg(){
		console.log("hit");
		//Show loading.gif for answer-img div
		$("#answer-img").html("<img src='assets/images/loading.gif' width='200px' />");
		if (count === images.length)
		{
			count = 0;
		} else if (count < images.length)
			{
				//Display img in images array 
				function displayAns(){
					setTimeout(function(){$("#answer-img").html("<img src=" + images[count] + " width '400px' />")}, 1000);
				}
				displayAns();		//This will display images array as soon as the pg loads
				console.log(count);
				count++;
				console.log(count);
			}
	}	

run();