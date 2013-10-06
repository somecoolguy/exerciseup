var index = window.location.href.indexOf("?authToken");
if (index > 0) {
  var authToken = window.location.href.substring(index+11);
  var xmlHttp = null;
  xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", "https://Jawbone.com/nudge/api/users/@me/moves",false);
  xmlHttp.setRequestHeader("Accept", "application/json");
  xmlHttp.setRequestHeader("Authorization","Bearer " + authToken);
  xmlHttp.send(null);
//  alert(xmlHttp.responseText);
  index=xmlHttp.responseText.indexOf("\"title\":");
    var str = xmlHttp.responseText.substring(index+10)
    index=str.indexOf("steps");
    var totalSteps=0;
    var stepLen=str.substring(0,index-1).length;
    if(stepLen>3)
    {
      totalSteps+=parseInt(str.substring(0,index-1))*1000+parseInt(str.substring(stepLen-3,index-1));
    }
    else
      stepLen=parseInt(str.substring(0,index-1));
    //alert(totalSteps);
    if (totalSteps > 2250) {
   /*   chrome.storage.local.set({'timeLeft': 10000}, function() {
      // Notify that we saved.
      message('Settings saved');
      }); */
      //localStorage["timeLeft"] = 1000;
      sessionStorage.setItem("timeLeft", 1500);
      alert("Took " + totalSteps + " steps so far today. Internet Unlocked!");
      window.location = "http://www.yahoo.com?unlocked";
    }
    else {
      alert("Took " + totalSteps + " steps so far today. Need " + (2250 - totalSteps) + " more before the internet is unlocked");
    }
}

document.querySelector('#jawboneLogin').addEventListener('click', function(e) {
  window.location = "https://jawbone.com/auth/oauth2/auth?response_type=code&client_id=Le9MQzalLhQ&scope=basic_read extended_read move_read cardiac_read&redirect_uri=https://xorsizeup.appspot.com/?go=stop";
});

document.querySelector('#adminLogin').addEventListener('click', function(e) {
  if ($('#adminPass').val() != "123456") {
    alert("Incorrect Admin Password");
  } else {
    chrome.storage.local.set({'timeLeft': 1000000}, function() {
      // Notify that we saved.
      message('Settings saved');
    });
    window.location = "http://www.yahoo.com?unlocked";
  }
});