var index = window.location.href.indexOf("?code"); // index of "code" in url
var i;
var authTokenRef = new Firebase('https://xorsize.firebaseIO.com/admins/unique/tokens');
/*authTokenRef.on('value', function(snapshot) {
  if (snapshot.val() != null) {
    for (token in snapshot.val()){
      alert(token.token);
      var xmlHttp = null;
      xmlHttp = new XMLHttpRequest();
      xmlHttp.open("GET", "https://Jawbone.com/nudge/api/v.1.0/users/@me",false);
      xmlHttp.setRequestHeader("Accept", "application/json");
      xmlHttp.setRequestHeader("Authorization","Bearer " + token.token);
      xmlHttp.send(null);
      alert(xmlHttp.responseText);
    }
  }
}); */
if (index > 0) {
  var authToken = window.location.href.substring(index+6);
  authTokenRef.on('value', function(snapshot) {
    if (snapshot.val() != null) {
      for (token in snapshot.val()){
        if (authToken == token.token){
          return;
        }
      }
    }
    authTokenRef.push({token: authToken});
  });
  var xmlHttp = null;
  xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", "https://Jawbone.com/nudge/api/v.1.0/users/@me",false);
  xmlHttp.setRequestHeader("Accept", "application/json");
  xmlHttp.setRequestHeader("Authorization","Bearer " + authToken);
  xmlHttp.send(null);
  alert(xmlHttp.responseText);
}
/*$('#updateButton').click(function (e) {
  alert("clicked");
  var pass = $('#newPass').val();
  adminRef.set({pass: pass});
});
*/
document.querySelector('#updateButton').addEventListener('click', function (e) {
  alert("2");
  var adminRef = new Firebase('https://xorsize.firebaseIO.com/admins/__MSG_@@extension_id__/');
  alert("clicked");
  var pass = $('#newPass').val();
  adminRef.update({pass: pass});
  alert("updated");
});

document.querySelector('#AuthButton').addEventListener('click', function(e) {
/*  alert("clicked");
  var consumer_key = "Le9MQzalLhQ";
  var shared_secret = "f30d441eb9cb8dd9eb3eeb198dd85b0a599575dd";
  var oauth_info = {};
  var oauth = OAuthSimple(consumer_key, shared_secret);
  alert("got through");
  var url = oauth.sign({action: "GET", path: "https://jawbone.com/auth/oath2/auth", parameters: {oauth_callback: "oob"}}).signed_url;      
  set_url(url, document.getElementById("rt"));
  */
  alert("yo1");
//  var xmlHttp = null;
//  xmlHttp = new XMLHttpRequest();
//  xmlHttp.open("GET", "https://jawbone.com/auth/oauth2/auth?response_type=code&client_id=Le9MQzalLhQ&scope=basic_read extended_read move_read cardiac_read&redirect_uri=https://xorsizeup.appspot.com/", false);
  window.location = "https://jawbone.com/auth/oauth2/auth?response_type=code&client_id=Le9MQzalLhQ&scope=basic_read extended_read move_read cardiac_read&redirect_uri=https://xorsizeup.appspot.com/";
  
  //xmlHttp.send(null);
  //alert(xmlHttp.responseText);
  //response_type=code&client_id=Le9MQzalLhQ&scope=basic_read extended_read move_read cardiac_read&redirect_uri=xorsizeup.appspot.com
  //alert("Yo");
});