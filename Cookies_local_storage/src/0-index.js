function setCookies() {
  var firstname = document.getElementById("firstname").value;
  var email = document.getElementById("email").value;
  document.cookie = "Firstname: " + encodeURIComponent(firstname);
  document.cookie = "Email: " + encodeURIComponent(email);

  alert('Cookies set successfully!')
}

function showCookies() {
  var cookiesDiv = document.getElementById("cookies");
  var cookiesText = "Cookies: ";
  var cookies = document.cookie.split("; ");
  cookies.forEach(function(cookie) {
      var parts = cookie.split("=");
      var name = decodeURIComponent(parts[0]);
      var value = decodeURIComponent(parts[1]);
      cookiesText += name + ": " + value + "; ";
  });
  var p = document.createElement("p");
  p.innerHTML = cookiesText;
  cookiesDiv.appendChild(p);
}
