/*setInterval(function(){
	var timeLeft;
	 chrome.storage.local.get('timeLeft', function (result) {
	        timeLeft = result.timeLeft;
	        console.log(result.timeLeft);
	    });
	alert(timeLeft);
	if (typeof timeLeft == 'undefined' || timeLeft == 'undefined') {
		alert("in here");
		timeLeft = 0;
		chrome.storage.local.set({'timeLeft': timeLeft}, function() {
	    	// Notify that we saved.
	    	message('Settings saved');
	  	});
	}

	chrome.storage.local.set({'timeLeft': timeLeft - 3}, function() {
      // Notify that we saved.
      message('Settings saved');
    });
},3000);
*/
/*
setInterval(function(){
	var timeLeft;
	 chrome.storage.local.get('timeLeft', function (result) {
	        timeLeft = result.timeLeft;
	        console.log(result.timeLeft);
	        if (typeof timeLeft == 'undefined' || timeLeft == 'undefined') {
				alert("in here");
				timeLeft = 0;
				chrome.storage.local.set({'timeLeft': timeLeft}, function() {
	    		// Notify that we saved.
	    		message('Settings saved');
	  			});
			}
	    });
	alert(timeLeft);

	chrome.storage.local.set({'timeLeft': timeLeft - 3}, function() {
      // Notify that we saved.
      message('Settings saved');
    });
},3000);
*/