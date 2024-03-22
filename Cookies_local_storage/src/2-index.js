function setCookies() {
  const firstName = document.getElementById('firstname').value;
  const email = document.getElementById('email').value;

  // Set expiration date 10 days into the future
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 10);

  // Set cookies with expiration date
  document.cookie = `firstname=${firstName}; expires=${expirationDate.toUTCString()}`;
  document.cookie = `email=${email}; expires=${expirationDate.toUTCString()}`;
}

function getCookie(name) {
  const cookies = document.cookie.split('; ').find(cookie => cookie.startsWith(name + '='));
  if (cookies) {
      return cookies.split('=')[1];
  }
  return '';
}

function showCookies() {
  const firstName = getCookie('firstname');
  const email = getCookie('email');
  const cookiesParagraph = document.createElement('p');

  // Display Email and Firstname
  cookiesParagraph.textContent = `Email: ${email} - Firstname: ${firstName}`;
  document.body.appendChild(cookiesParagraph);
}

// Event listeners
document.getElementById('loginBtn').addEventListener('click', setCookies);
document.getElementById('showCookiesBtn').addEventListener('click', showCookies);
