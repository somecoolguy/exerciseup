 var index = window.location.href.indexOf("?unlocked");
 if (index >= 0) {
    sessionStorage.setItem("timeLeft", 1000);
 }
 var timeLeft = sessionStorage.getItem("timeLeft");
 /*chrome.storage.local.get('timeLeft', function (result) {
        timeLeft = result.timeLeft;
        console.log(result.timeLeft);
    });*/
if (typeof timeLeft == 'undefined' || timeLeft == 'undefined' || timeLeft == null) {
	timeLeft = 0;
	sessionStorage.setItem("timeLeft", 0);
//	localStorage["timeLeft"] = 0;
/*	chrome.storage.local.set({'timeLeft': timeLeft}, function() {
    	// Notify that we saved.
    	message('Settings saved');
  	});*/
}
if (timeLeft <= 0 && window.location.href != "chrome-extension://gjhbkgiiofeppegagfhnfaefnpipamob/blocker.html") {
	window.location = "chrome-extension://gjhbkgiiofeppegagfhnfaefnpipamob/blocker.html?targurl=" + window.location.href;
}
else { //timeLeft > 0
	//Do nothing
}
