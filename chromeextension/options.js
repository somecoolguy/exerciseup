function set_url(url, element) {
  element.value = url;
        
  var span = document.createElement("span");
  span.innerHTML = "&nbsp;&nbsp;<a href='" + url + "' target='_blank'>Open</a>";
  element.parentNode.insertBefore(span, element.nextSibling);
}
alert("hello");
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
  alert("clicked");
  var consumer_key = "Le9MQzalLhQ";
  var shared_secret = "f30d441eb9cb8dd9eb3eeb198dd85b0a599575dd";
  var oauth_info = {};
  var oauth = OAuthSimple(consumer_key, shared_secret);
  alert("got through");
  var url = oauth.sign({action: "GET", path: "https://jawbone.com/auth/oath2/auth", parameters: {oauth_callback: "oob"}}).signed_url;      
  set_url(url, document.getElementById("rt"));
});