

function showSpring() { 
	document.getElementById("spring").style.opacity = "1";
}
function hideSpring() {
	document.getElementById("spring").style.opacity = "0";
}

function showSummer() { 
	document.getElementById("summer").style.opacity = "1";
}
function hideSummer() {
	document.getElementById("summer").style.opacity = "0";
}

function showAutumn() { 
	document.getElementById("autumn").style.opacity = "1";
}
function hideAutumn() {
	document.getElementById("autumn").style.opacity = "0";
}

function showWinter() { 
	document.getElementById("winter").style.opacity = "1";
}
function hideWinter() {
	document.getElementById("winter").style.opacity = "0";
}


function onLoad() { 
	document.getElementById("circle_image").style.backgroundImage = "url('images//betty_resized.jpg')";
}
var clickCounter = 0; 
function nextTestemonial() { 
	
	if(clickCounter < 3) {
		clickCounter++;
		switch(clickCounter) { 
			case 1: 
				document.getElementById("feedback").innerHTML = "An amazing customer base, with great possibilities, offers and passion.";
				document.getElementById("customer_name").innerHTML = "Elena Ivanova";
				document.getElementById("circle_image").style.backgroundImage = "url('images//ellie_resized.jpg')";
				break;
			case 2: 
				document.getElementById("feedback").innerHTML = "I am really satisfied with the customer service and the fast response!";
				document.getElementById("customer_name").innerHTML = "Dessislava Lozanova";
				document.getElementById("circle_image").style.backgroundImage = "url('images//dessi_resized.jpg')"; 
				break;
			case 3: 
				document.getElementById("feedback").innerHTML = "The items were of a great quality and the customer support was great!";
				document.getElementById("customer_name").innerHTML = "Ivo Kovachev";
				document.getElementById("circle_image").style.backgroundImage = "url('images//ivo_resized.jpg')"; 
				console.log(clickCounter);
				break;
			default:
			document.getElementById("feedback").innerHTML = "An amazing customer base, with great possibilities, offers and passion.";
			document.getElementById("customer_name").innerHTML = "Roberta Tihomirova";
			document.getElementById("circle_image").style.backgroundImage = "url('images//betty_resized.jpg')";
		}
	}
}

function previousTestemonial() { 
	console.log("Click Counter: " + clickCounter);
	
	
	if(clickCounter >= 0) {
	clickCounter--;
	switch(clickCounter) { 

		case 0:
			document.getElementById("feedback").innerHTML = "Fast response, kind personnel and great items list. I will definitely be ordering soon again.";
			document.getElementById("customer_name").innerHTML = "Elena Ivanova";
			document.getElementById("circle_image").style.backgroundImage = "url('images//ellie_resized.jpg')";
			break;

		case 1: 
			document.getElementById("feedback").innerHTML = "An amazing customer base, with great possibilities, offers and passion.";
			document.getElementById("customer_name").innerHTML = "Roberta Tihomirova";
			document.getElementById("circle_image").style.backgroundImage = "url('images//betty_resized.jpg')";
			break;
		case 2: 
			document.getElementById("feedback").innerHTML = "I am really satisfied with the customer service and the fast response!";
			document.getElementById("customer_name").innerHTML = "Dessislava Lozanova";
			document.getElementById("circle_image").style.backgroundImage = "url('images//dessi_resized.jpg')"; 
			break;
		case 3: 
			document.getElementById("feedback").innerHTML = "The items were of a great quality and the customer support was great!!";
			document.getElementById("customer_name").innerHTML = "Ivo Kovachev";
			document.getElementById("circle_image").style.backgroundImage = "url('images//ivo_resized.jpg')";
			break;
		default: 
			console.log("def");
		}
	}
}

function changeColorForward() {

	document.getElementById("forward_button").style.opacity = "0";
	document.getElementById("forward_button_light").style.opacity = "1";
}


function changeToNormalForward() {
	document.getElementById("forward_button").style.opacity = "1";
	document.getElementById("forward_button_light").style.opacity = "0";
}

function changeColorBackward() {
	
	document.getElementById("back_button").style.opacity = "0";
	document.getElementById("back_button_light").style.opacity = "1";
}


function changeToNormalBackward() {
	document.getElementById("back_button").style.opacity = "1";
	document.getElementById("back_button_light").style.opacity = "0";
}


var pictureCounter = 0;
function nextSlideshowPicture() {
	console.log(pictureCounter);
	if(pictureCounter >= 0 && pictureCounter < 2) {
		pictureCounter++;
		switch(pictureCounter) {
			case 1: document.getElementById("slideshow").style.backgroundImage = "url('images//img_mountains_wide.jpg')";break;
			case 2: document.getElementById("slideshow").style.backgroundImage = "url('images//img_fjords_wide.jpg')"; break;
		}
	}
}

function previousSlideshowPicture() {
	console.log(pictureCounter);
	if(pictureCounter > 0 && pictureCounter <= 2) {
		pictureCounter--;
		switch(pictureCounter) {
			case 0: document.getElementById("slideshow").style.backgroundImage = "url('images//img_nature_wide.jpg')";break;
			case 1: document.getElementById("slideshow").style.backgroundImage = "url('images//img_mountains_wide.jpg')"; break;
		}
	}
}
var amount = 0;
function addAmount() {
	amount += 24.5;
	document.getElementById("money").innerHTML = "$" + amount;
}

function displaySum() {
	document.getElementById("final_bill").innerHTML = "$" + this.amount;
}

function refreshPage() {
	 window.location.reload();
}